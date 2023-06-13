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

    const handleFormSubmit = (
        event: FormEvent<HTMLFormElement>,
        mutation: Function
    ) => {
        event.preventDefault()
        mutation()
    }

    const handleReset = () => {
        dispatch({ type: RESET, payload: initialState })
    }

    return {
        handleChange,
        handleFormSubmit,
        handleReset,
        form
    }
}

export default useForm
