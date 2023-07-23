import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Autocomplete, Chip, TextField, Modal, IconButton } from '@mui/material'
import { AddCircle } from '@mui/icons-material'
import { FileUpload } from '@/components/form'
import useForm from '@/utils/hooks/useForm'
import { addGalleryItems } from '@/lib/db/cms/gallery-page'
import { setGallery } from '@/lib/redux/slices/gallery'
import { FormButtonGroup } from '@/components/form'
import { StyledGalleryWidget } from './StyledGalleryWidget'
import FormValidations from '@/utils/validations/forms'
import { handleCloudUpload } from '@/utils/fileConversions'

const INITIAL_STATE = {
    newImgs: { value: [] },
    existigImgs: { value: [] }
}

const VALIDACHE = {
    newImgs: FormValidations.yolo,
    existingImgs: FormValidations.yolo
}

const GalleryWidget = () => {
    const dispatch = useDispatch()
    const {
        form,
        formLoading,
        handleChange,
        handleNonFormEventChange,
        handleFormSubmit,
        handleReset
    } = useForm(INITIAL_STATE, VALIDACHE)
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const onModalToggle = () => setOpen(!open)
    const onAddNewImgs = async (e: any) => {
        e.preventDefault()
        const cloudImages = [] as any
        for (let i = 0; i < form.newImgs.value.length; i++) {
            const element = form.newImgs.value[i]
            const cloud = await handleCloudUpload({
                base64: element.base64,
                context: 'gallery',
                filename: element.name
            })
            cloudImages.push({
                name: element.name,
                type: element.type,
                src: cloud,
                tags: null
            })
        }
        const refreshedItems = await addGalleryItems(cloudImages)
        dispatch(setGallery(refreshedItems))
    }

    return (
        <StyledGalleryWidget>
            <div className="header">
                <h1>
                    Gallery{' '}
                    <IconButton onClick={onModalToggle}>
                        <AddCircle />
                    </IconButton>
                </h1>
            </div>
            <div className="imgsDisplay"></div>
            <Autocomplete
                multiple
                id="tags-filled"
                options={[]}
                freeSolo
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                        <Chip
                            variant="outlined"
                            label={option}
                            {...getTagProps({ index })}
                        />
                    ))
                }
                renderInput={params => (
                    <TextField
                        {...params}
                        variant="outlined"
                        label="freeSolo"
                        placeholder="Favorites"
                        helperText="Hit enter to complete each tag"
                    />
                )}
            />
            <Modal
                classes={{ root: 'galleryUploadModal' }}
                open={open}
                onClose={onModalToggle}>
                <form onSubmit={onAddNewImgs} className="galleryUploadBlock">
                    <FileUpload
                        context="galleryPics"
                        multiple
                        files={form.newImgs.value}
                        setFiles={(files: any) =>
                            handleNonFormEventChange(files, 'newImgs')
                        }
                        label="Upload your pics"
                    />
                    <FormButtonGroup
                        disableSubmit={!form.newImgs.value?.length}
                        handleReset={handleReset}
                        loading={loading}
                    />
                </form>
            </Modal>
        </StyledGalleryWidget>
    )
}

export default GalleryWidget
