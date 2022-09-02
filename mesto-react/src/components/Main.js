import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
      <main className="content">
        <section className="profile">
          <div className="profile__gak">
            <div className="profile__avatar-wrapper">
              <img
                className="profile__avatar"
                alt="аватар профиля"
                src={currentUser.avatar}
              />
              <button
                className="profile__avatar-overlay"
                onClick={onEditAvatar}
              ></button>
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="open-popup profile__edit-button"
                type="button"
                onClick={onEditProfile}
              ></button>
              <p className="profile__job">{currentUser.about}</p>
            </div>
          </div>
          <button
            className="open-popup profile__add-button"
            type="button"
            onClick={onAddPlace}
          ></button>
        </section>

        <section className="elements">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </section>
      </main>
  );
}

export default Main;
