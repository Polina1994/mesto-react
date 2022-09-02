import PopupWithForm from "./PopupWithForm";
import { useEffect, useState } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const [avatar, setAvatar] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({ avatar });
  }

  function handleChange(e) {
    const input = e.target;
    setAvatar(input.value);
  }

  useEffect(() => {
    if (isOpen) {
      setAvatar("");
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="formAvatar"
      btnName="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        name="avatar"
        id="form__input-avatar"
        form="formAvatar"
        className="popup__input popup__input_value_avatar form__input"
        placeholder="Ссылка"
        value={avatar}
        onChange={handleChange}
        required
      />
      <span className="form__input-avatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
