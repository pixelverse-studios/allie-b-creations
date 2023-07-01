import { useState, useRef, ChangeEvent, SetStateAction } from 'react'
import { CloudUpload, Sync } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import { uniqueId } from 'lodash'

import { ConfirmDeleteButton } from '@/components/buttons'
import { convertFileToBase64 } from '@/utils/fileConversions'
import { StyledFileUpload, StyledImgPreview } from './StyledFields'
export interface FileItem {
    [preview: string]: any
    contents: any
    base64: string
}

export type FilesList = FileItem[]

interface FileUploadTypes {
    multiple: boolean
    context: string
    files: FilesList
    setFiles: SetStateAction<any>
    label?: string
}

export const FileUpload = ({
    multiple,
    files,
    setFiles,
    label
}: FileUploadTypes) => {
    const [loading, setLoading] = useState<boolean>(false)
    const inputRef = useRef<any>(null)

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
        setLoading(true)
        const curatedFiles = await curateFilesList(e.target.files)
        setFiles(curatedFiles)
        setLoading(false)
    }

    const onMoreFilesUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return
        }
        setLoading(true)
        const curatedFiles = await curateFilesList(e.target.files)
        setFiles([...files, ...curatedFiles])
        setLoading(false)
    }

    const onFilePreviewDelete = (filename: string) => {
        inputRef.current.value = '' as any
        setFiles(
            files?.filter((file: any) => file.contents.name !== filename) ?? []
        )
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
                        ref={inputRef}
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
