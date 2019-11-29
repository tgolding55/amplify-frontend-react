import React, {useState} from 'react'

const PlaylistForm = () => {

const [nameField, setNameField] = useState('')
const [descriptionField, setDescriptionField] = useState('')


return (
        <form onSubmit>
            <input type='text' value={nameField} onChange={(e)=> setNameField(e.target.value)}>
            </input>
            <input type='text' value={descriptionField} onChange={(e)=> setDescriptionField(e.target.value)}>
            </input>
  
        </form>
    )
}

export default PlaylistForm;