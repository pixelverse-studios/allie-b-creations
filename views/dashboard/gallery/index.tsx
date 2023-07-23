import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Autocomplete, Chip, TextField, Modal, IconButton } from '@mui/material'
import { AddCircle, Check } from '@mui/icons-material'
import { enqueueSnackbar } from 'notistack'

import { ConfirmActionButton } from '@/components/buttons'
import { statuses } from '@/utils/banners'
import { FileUpload } from '@/components/form'
import useForm from '@/utils/hooks/useForm'
import {
    addGalleryItems,
    deleteGalleryItem,
    updateGalleryItem
} from '@/lib/db/cms/gallery-page'
import { setGallery } from '@/lib/redux/slices/gallery'
import { FormButtonGroup } from '@/components/form'
import FormValidations from '@/utils/validations/forms'
import { handleCloudUpload } from '@/utils/fileConversions'
import { StyledGalleryWidget } from './StyledGalleryWidget'

const INITIAL_STATE = {
    newImgs: { value: [] },
    existingImgs: { value: [] }
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
    const [tag, setTag] = useState<{ id: string; value: string }>({
        id: '',
        value: ''
    })

    useEffect(
        () => handleNonFormEventChange(galleryItems, 'existingImgs'),
        [galleryItems]
    )

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

    const onAddNewTags = async (id: string) => {
        setLoading(true)
        try {
            const img = form.existingImgs.value.find(
                (item: any) => item.id === id
            )
            const refreshed = await updateGalleryItem(id, img.tags)
            dispatch(setGallery(refreshed))
            setLoading(false)
        } catch (error) {
            setLoading(false)
            enqueueSnackbar('There was an issue updating your images tags.', {
                variant: statuses.ERROR
            })
        }
    }

    const onTagValueChange = (img: any, value: string) => {
        const newTags = form.existingImgs.value.map((item: any) =>
            item.id === img.id ? { ...item, tags: value } : item
        )
        handleNonFormEventChange(newTags, 'existingImgs')
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
                {form.existingImgs.value?.map((img: any, key: string) => (
                    <div className="galleryItem" key={img.name + '' + key}>
                        <div className="buttons">
                            <ConfirmActionButton
                                Icon={Check}
                                action="Update"
                                onTriggerMutation={() => onAddNewTags(img.id)}
                            />
                            <ConfirmActionButton
                                onTriggerMutation={() => onDeleteClick(img.id)}
                            />
                        </div>
                        <img src={img.src} />
                        <div className="controls">
                            <Autocomplete
                                multiple
                                id={`${img.name + key}`}
                                options={[]}
                                inputValue={tag.id === img.id ? tag.value : ''}
                                onInputChange={(event, newInputValue) => {
                                    setTag({ id: img.id, value: newInputValue })
                                }}
                                value={img?.tags ?? []}
                                onChange={(event: any, newValue: any) => {
                                    onTagValueChange(img, newValue)
                                }}
                                // inputValue={}
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
                                        // onChange={e => onTagValueChange(img, e)}
                                        helperText="Hit enter to complete each tag"
                                    />
                                )}
                            />
                        </div>
                    </div>
                ))}
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
