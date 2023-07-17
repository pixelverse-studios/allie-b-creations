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
    disabled?: boolean
    variant?: 'outlined' | 'standard' | 'filled'
}

export interface TestimonialFormProps {
    name: string
    email: string
    rating: number
    review: string
}
