import { useState, DragEvent } from 'react'
import { FileUpload } from '@mui/icons-material'
import { StyledFileDragAndDrop } from './StyledFields'

interface FileDragAndDrop {
    id: string
    label: string
}

export const FileDragAndDrop = ({ id, label }: FileDragAndDrop) => {
    const [isDragging, setIsDragging] = useState(false)

    const handleDrag = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setIsDragging(true)
        } else if (e.type === 'dragleave') {
            setIsDragging(false)
        }
    }

    return (
        <StyledFileDragAndDrop onDragEnter={handleDrag}>
            <input type="file" id={id} className="fileInput" multiple={true} />
            <label
                className={`fileLabel ${isDragging ? 'active' : ''}`}
                htmlFor={id}>
                <div>
                    <p>{label}</p>
                    <FileUpload />
                    {isDragging && (
                        <div
                            className="dragElement"
                            id={`${id}-element`}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            // onDrop={handleDrop}
                        />
                    )}
                    {/* <button className="upload-button">Upload a file</button> */}
                </div>
            </label>
        </StyledFileDragAndDrop>
    )
}
