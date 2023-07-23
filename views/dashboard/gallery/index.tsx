import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Autocomplete, Chip, TextField, Modal, IconButton } from '@mui/material'
import { AddCircle, AddCircleOutline } from '@mui/icons-material'
import { enqueueSnackbar } from 'notistack'

import { ConfirmDeleteButton } from '@/components/buttons'
import { statuses } from '@/utils/banners'
import { FileUpload } from '@/components/form'
import useForm from '@/utils/hooks/useForm'
import { addGalleryItems, deleteGalleryItem } from '@/lib/db/cms/gallery-page'
import { setGallery } from '@/lib/redux/slices/gallery'
import { FormButtonGroup } from '@/components/form'
import FormValidations from '@/utils/validations/forms'
import { handleCloudUpload } from '@/utils/fileConversions'
import { StyledGalleryWidget } from './StyledGalleryWidget'

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
    const galleryItems = useSelector((state: any) => state.gallery)
    const { form, handleNonFormEventChange, handleReset } = useForm(
        INITIAL_STATE,
        VALIDACHE
    )
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const onModalToggle = () => setOpen(!open)
    const onAddNewImgs = async (e: any) => {
        setLoading(true)
        try {
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
            enqueueSnackbar('Your gallery images have been uploaded!', {
                variant: statuses.SUCCESS
            })
            handleReset()
            setLoading(false)
            setOpen(false)
        } catch (error) {
            setLoading(false)
            enqueueSnackbar(
                'There was an issue uploading your gallery images.',
                {
                    variant: statuses.ERROR
                }
            )
        }
    }

    const onDeleteClick = async (id: string) => {
        setLoading(true)
        try {
            const refreshed = await deleteGalleryItem(id)
            dispatch(setGallery(refreshed))
            enqueueSnackbar('Image deleted successfully.', {
                variant: statuses.SUCCESS
            })
            setLoading(false)
        } catch (error) {
            setLoading(false)
            enqueueSnackbar(
                'There was an issue uploading your gallery images.',
                {
                    variant: statuses.ERROR
                }
            )
        }
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
            <div className="imgsDisplay">
                {galleryItems?.map((img: any, key: string) => {
                    console.log({ img })
                    return (
                        <div className="galleryItem" key={img.name + '' + key}>
                            <div className="buttons">
                                <ConfirmDeleteButton
                                    Icon={AddCircleOutline}
                                    onTriggerMutation={() => null}
                                />
                                <ConfirmDeleteButton
                                    onTriggerMutation={() =>
                                        onDeleteClick(img.id)
                                    }
                                />
                            </div>
                            <img src={img.src} />
                            <div className="controls">
                                <Autocomplete
                                    multiple
                                    id={`${img.name + key}`}
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
                                            label="Tags"
                                            helperText="Hit enter to complete each tag"
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
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
