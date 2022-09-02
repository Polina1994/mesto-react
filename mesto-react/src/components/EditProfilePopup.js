import PopupWithForm from "./PopupWithForm";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (isOpen) {
    setName(currentUser.name);
    setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  function handleChange(e) {
    const input = e.target;
    if (input.name === "name") {
      setName(e.target.value);
    }
    if (input.name === "description") {
      setDescription(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="formEdit"
      btnName="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="form__input-text"
        type="text"
        name="name"
        form="formEdit"
        className="popup__input popup__input_value_name form__input"
        placeholder="Имя"
        value={name || ''}
        onChange={handleChange}
        minLength="2"
        maxLength="40"
        required
      />
      <span className="form__input-text-error"></span>

      <input
        id="form__input-job"
        type="text"
        name="description"
        form="formEdit"
        className="popup__input popup__input_value_job form__input"
        placeholder="О себе"
        value={description || ''}
        onChange={handleChange}
        minLength="2"
        maxLength="200"
        required
      />
      <span className="form__input-job-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
