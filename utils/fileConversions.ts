import axios from 'axios'
import { format } from 'date-fns'
import { CLOUD_KEYS } from './constants'

export const convertFileToBase64 = (file: any) => {
    const base64 = new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => {
            const result = reader.result
            resolve(result)
        }
        reader.readAsDataURL(file)
    }).then(res => res as string)

    return base64
}

export interface CloudinaryCreationProps {
    base64: string
    filename: string
    context: string
}
const createCloudinaryFormData = ({
    base64,
    filename,
    context
}: CloudinaryCreationProps) => {
    const form = new FormData()
    form.append('file', base64)

    const today = format(new Date(), 'MM/dd/yyyy')
    const newFileName = `${filename}-${context}_${today}`
    form.append(CLOUD_KEYS.OVERRIDE, newFileName)
    form.append('upload_preset', CLOUD_KEYS.PRESET_FOLDER)

    return form
}

export const handleCloudUpload = async ({
    context,
    base64,
    filename
}: CloudinaryCreationProps) => {
    try {
        const form = createCloudinaryFormData({
            base64,
            filename,
            context
        })
        const res = await axios.post(CLOUD_KEYS.UPLOAD_URL, form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        return `${CLOUD_KEYS.PUBLIC}/${res.data.public_id}`
    } catch (error) {
        throw new Error('Image upload failed')
    }
}
