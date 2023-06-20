import { useState, useReducer, ChangeEventHandler, FormEvent } from 'react'
import { FORM_ACTIONS } from '../constants'

interface ActionState {
    type: string
    payload?: any
}
const { UPDATE, RESET, IMPORT } = FORM_ACTIONS

function reducer(state: any, action: ActionState) {
    switch (action.type) {
        case UPDATE: {
            const { name, value, error } = action.payload

            return { ...state, [name]: { value, error } }
        }
        case IMPORT: {
            return { ...state, ...action.payload }
        }
        case RESET: {
            return action.payload
        }
        default:
            return state
    }
}

const useForm = (initialState: any, validations: any) => {
    const [form, dispatch] = useReducer(reducer, initialState)
    const [formLoading, setFormLoading] = useState<boolean>(false)
    const [isDataImported, setIsDataImported] = useState<boolean>(false)

    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
        const { value, name } = event.target

        const error = !validations[name]?.test(value.trim())
            ? validations[name]?.message
            : ''

        dispatch({
            type: UPDATE,
            payload: {
                name,
                value,
                error
            }
        })
    }

    const handleImport = (payload: any) => {
        setIsDataImported(true)
        const formattedData = {} as any
        for (const [key, value] of Object.entries(payload)) {
            formattedData[key] = { value, error: '' }
        }
        dispatch({ type: IMPORT, payload: formattedData })
    }

    const handleFormSubmit = async (
        event: FormEvent<HTMLFormElement>,
        mutation: Function
    ) => {
        event.preventDefault()
        setFormLoading(true)
        await mutation()
        setFormLoading(false)
    }

    const handleReset = () => {
        dispatch({ type: RESET, payload: initialState })
    }

    const isFormValid = Object.keys(form).every(label => !form[label].error)

    return {
        form,
        formLoading,
        isFormValid,
        handleChange,
        handleFormSubmit,
        handleImport,
        handleReset,
        isDataImported,
        setFormLoading,
        setIsDataImported
    }
}

export default useForm
