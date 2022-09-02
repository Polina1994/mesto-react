function ImagePopup(props) {
  return (
    <div
      className={`popup popup-image ${
        props.card.name ? "popup_is-opened" : ""
      }`}
    >
      <article className="popup-image__element">
        <button
          type="button"
          className="popup__close-button popup-image__close-button"
          onClick={props.onClose}
        ></button>
        <img
          src={props.card.link}
          className="popup-image__image"
          alt={props.card.name}
        />
        <h2 className="popup-image__title">{props.card.name}</h2>
      </article>
    </div>
  );
}

export default ImagePopup;
