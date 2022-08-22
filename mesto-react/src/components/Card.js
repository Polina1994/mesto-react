import React from "react";

function Card({card, onCardClick}) {

    function handleClick() {
        onCardClick(card)
    }

    return (
            <article className="element">
                <button type="button" className="element__trash" ></button>
                <img src={card.link} className="element__image" alt={card.name} id="card-image" onClick={handleClick} />
                <div className="element__description">
                    <h2 className="element__title">{card.name}</h2>
                    <div className="element__like-container">
                        <button type="button" className="element__like"></button>
                        <p className="element__count">{card.likes.length}</p>
                    </div>
                </div>
            </article>
    )
}

export default Card;