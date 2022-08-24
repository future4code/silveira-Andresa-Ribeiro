import { useState } from "react"

const useForm = (initialState) => {

    const [form, setForm] = useState(initialState)

    const InputChange = (event) => {
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }

    const clearInput = () => {
        setForm(initialState)
    }

    return  { form, InputChange, clearInput, setForm }
}

export default useForm;