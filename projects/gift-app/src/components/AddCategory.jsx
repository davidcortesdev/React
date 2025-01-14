import { useState } from "react"
import PropTypes from "prop-types"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = (event) => {
        setinputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        
        if(inputValue.trim().length <= 1) return
        
        onNewCategory( inputValue.trim() )
        setinputValue('')
    }
    
    return(
        <form
            aria-label="form"
            onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}