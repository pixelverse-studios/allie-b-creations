import { useState, useReducer, ChangeEventHandler, FormEvent } from 'react'
import { RESET, UPDATE, IMPORT } from '../constants'

interface ActionState {
    type: string
    payload?: any
}

function reducer(state: any, action: ActionState) {
    switch (action.type) {
        case UPDATE: {
            const { name, value } = action.payload

            return { ...state, [name]: { value } }
        }
        case RESET: {
            return action.payload
        }
        default:
            return state
    }
}

const useForm = (initialState: any) => {
    const [form, dispatch] = useReducer(reducer, initialState)

    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
        let { value, name } = event.target

        dispatch({
            type: UPDATE,
            payload: {
                name,
                value
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
