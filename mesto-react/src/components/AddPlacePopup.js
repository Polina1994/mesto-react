import PopupWithForm from "./PopupWithForm";
import {useState, useEffect} from 'react'

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

    const [name, setName] = useState('')
    const [link, setLink] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
      
        onAddPlace({
            name: name,
            link: link})
      }

    function handleChange(e) {
        const input = e.target
        if(input.name === 'name') {
        setName(input.value);
        }
        if (input.name === 'link') {
        setLink(e.target.value)
        }
    }

    useEffect(() => {
        if (isOpen) {
        setName('')
        setLink('')
        }
    }, [isOpen])


 return (
    <PopupWithForm
    title='Новое место'
    name='formAdd'
    btnName='Создать'
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
    >
    <input 
    type="text" 
    name="name" 
    id="form__input-place" 
    form="formAdd" 
    className="popup__input popup__input_value_place form__input" 
    placeholder="Название" 
    minLength="2" 
    maxLength="30" 
    value={name}
    onChange={handleChange}
    required />
    <span className="form__input-place-error"></span>
                
    <input 
    type="url" 
    name="link" 
    id="form__input-link" 
    form="formAdd" 
    className="popup__input popup__input_value_link form__input" 
    placeholder="Ссылка на картинку" 
    value={link}
    onChange={handleChange}
    required />
    <span className="form__input-link-error"></span>
    </PopupWithForm>
 )
}

export default AddPlacePopup;