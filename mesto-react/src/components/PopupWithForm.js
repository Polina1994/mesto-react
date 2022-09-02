import React from "react";

function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  btnName,
  onClose,
  onSubmit,
}) {
  return (
    <div
      className={`popup popup_type_${name}
    ${isOpen ? "popup_is-opened" : false}`}
    >
      <div className="popup__container">
        <button
          type="button"
          className={`popup__close-button`}
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>

        <form
          className="popup__form"
          name={`${name}`}
          id={`${name}`}
          onSubmit={onSubmit}
        >
          <>{children}</>
          <button type="submit" className="popup__button">
            {btnName}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
