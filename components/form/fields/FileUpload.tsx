import { useState, ChangeEvent, SetStateAction } from 'react'
import { CloudUpload, Sync } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import { uniqueId } from 'lodash'
import { enqueueSnackbar } from 'notistack'

import { ConfirmDeleteButton } from '@/components/buttons'
import bannerUtils from '@/utils/banners'
import { convertFileToBase64, handleCloudUpload } from '@/utils/fileConversions'
import { StyledFileUpload, StyledImgPreview } from './StyledFields'

const { statuses } = bannerUtils

export interface FileItem {
    [preview: string]: any
    contents: any
    base64: string
}

export type FilesList = FileItem[]

interface FileUploadTypes {
    label: string
    multiple: boolean
    context: string
    files: FilesList
    setFiles: SetStateAction<any>
}

export const FileUpload = ({
    context,
    label,
    multiple,
    files,
    setFiles
}: FileUploadTypes) => {
    const [loading, setLoading] = useState<boolean>(false)
    const curateFilesList = async (files: any) => {
        const newFiles = Array.from(files)
        const curatedFiles = await Promise.all(
            newFiles.map(async file => {
                const preview = URL.createObjectURL(file as any)
                const base64 = await convertFileToBase64(file)
                return { contents: file, preview, base64 } as any
            })
        )
        return curatedFiles
    }

    const onFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return
        }
        const curatedFiles = await curateFilesList(e.target.files)
        setFiles(curatedFiles)
    }

    const onMoreFilesUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return
        }
        const curatedFiles = await curateFilesList(e.target.files)
        setFiles([...files, ...curatedFiles])
    }

    const onFilePreviewDelete = (filename: string) =>
        setFiles(
            files?.filter((file: any) => file.contents.name !== filename) ?? []
        )

    const onCloudUploadClick = async () => {
        try {
            const images = await Promise.all(
                files.map((file: any) =>
                    handleCloudUpload({
                        context,
                        base64: file.base64,
                        filename: file.contents.name
                    })
                )
            )
            enqueueSnackbar(
                `Your image${
                    images?.length > 1 ? 's have been' : 'has been'
                } uploaded successfully`,
                {
                    variant: statuses.SUCCESS
                }
            )
        } catch (error) {
            enqueueSnackbar(
                'There was an issue uploading your images. Please try again or reach out to us for assistance.',
                {
                    variant: statuses.ERROR
                }
            )
        }
    }

    return (
        <StyledFileUpload>
            <div className="uploadBlock">
                <h4>Upload your file{multiple ? 's' : ''}</h4>
                <p>as JPG, PNG, or SVG types.</p>
                <Button
                    className={loading ? 'loading' : ''}
                    variant="contained"
                    component="label">
                    {loading ? (
                        <span>
                            <Sync className="loading" />
                            loading...
                        </span>
                    ) : (
                        <span>
                            <CloudUpload />
                            Upload
                        </span>
                    )}
                    <input
                        multiple={multiple}
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={
                            multiple && files?.length > 0
                                ? onMoreFilesUpload
                                : onFileUpload
                        }
                    />
                </Button>
            </div>
            <div className="previewBlock">
                {files?.map((file: any) => (
                    <StyledImgPreview key={uniqueId()}>
                        <Avatar
                            key={uniqueId()}
                            src={file.preview}
                            alt={file.contents.name}
                        />
                        <span>{file.contents.name}</span>
                        <ConfirmDeleteButton
                            onTriggerMutation={() =>
                                onFilePreviewDelete(file.contents.name)
                            }
                        />
                    </StyledImgPreview>
                ))}
            </div>
        </StyledFileUpload>
    )
}
