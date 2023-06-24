import { ChangeEventHandler } from 'react'

export interface FieldInputProps {
    value: string
    error: string
}

export interface TextFieldProps {
    field: FieldInputProps
    id: string
    type: 'text' | 'email' | 'textarea' | 'password' | 'file'
    label: string
    onChange: ChangeEventHandler
}

export interface TestimonialFormProps {
    name: string
    email: string
    rating: number
    review: string
}
