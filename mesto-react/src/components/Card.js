import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext)
    
    function handleClick() {
        onCardClick(card)
    }
    function handleLikeClick() {
        onCardLike(card)
    }
    function handleDeleteClick() {
        onCardDelete(card)
    }
    const isOwn = card.owner._id === currentUser._id;

    const cardDeleteButtonClassName = (
  `element__trash ${isOwn ? 'element__delete-visible' : 'element__delete-hide'}`
);
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    const cardLikeButtonClassName = (
    `element__like ${isLiked ? 'element__like-active' : 'element__like'}`);

    return (
            <article className="element">
                <button 
                type="button" 
                className={cardDeleteButtonClassName} 
                onClick={handleDeleteClick}></button>
                <img 
                src={card.link} 
                className="element__image" 
                alt={card.name} 
                id="card-image" 
                onClick={handleClick} />
                <div className="element__description">
                    <h2 className="element__title">{card.name}</h2>
                    <div className="element__like-container">
                        <button 
                        type="button" 
                        className={cardLikeButtonClassName} 
                        onClick={handleLikeClick}></button>
                        <p className="element__count">{card.likes.length}</p>
                    </div>
                </div>
            </article>
    )
}

export default Card;