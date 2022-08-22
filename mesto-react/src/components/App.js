import React, {useEffect} from 'react'
import '../index.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import api from '../utils/Api'

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
    const [isConfirmPopupOpen, setConfirmPopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState({})
    const [cards, setCards] = React.useState([])
    const [currentUser, setCurrentUser] = React.useState({})


    useEffect(() => {
        Promise.all([
            api.getUserData(),
            api.getCards()
        ])
        .then(([user,cards]) => {
            setCurrentUser(user)
            setCards(cards)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    function handleEditProfileClick () {
        setEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true)
    }
    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true)
    }

    function handleCardClick(card) {
        setSelectedCard(card)
    }

    function closeAllPopups() {
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setEditAvatarPopupOpen(false)
        setConfirmPopupOpen(false)
        setSelectedCard({})
    }
   
  return (
    <div className="page">
    <Header />
    <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        cards={cards}
        userName={currentUser}
        userDescription={currentUser}
        userAvatar={currentUser}
    />
    <Footer />
    

    {/* Edit */}
    <PopupWithForm
    title='Редактировать профиль'
    name='formEdit'
    btnName='Сохранить'
    isOpen={isEditProfilePopupOpen}
    onClose={closeAllPopups}
    >
    <input id="form__input-text" type="text" name="name" form="formEdit" className="popup__input popup__input_value_name form__input" placeholder="Имя" minLength="2" maxLength="40" required />
    <span className="form__input-text-error"></span>
    
    <input id="form__input-job" type="text" name="about" form="formEdit" className="popup__input popup__input_value_job form__input" placeholder="О себе" minLength="2" maxLength="200" required />
    <span className="form__input-job-error"></span>
    </PopupWithForm>

    {/* Add */}
    <PopupWithForm
    title='Новое место'
    name='formAdd'
    btnName='Создать'
    isOpen={isAddPlacePopupOpen}
    onClose={closeAllPopups}
    >
    <input type="text" name="name" id="form__input-place" form="formAdd" className="popup__input popup__input_value_place form__input" placeholder="Название" minLength="2" maxLength="30" required />
    <span className="form__input-place-error"></span>
                
    <input type="url" name="link" id="form__input-link" form="formAdd" className="popup__input popup__input_value_link form__input" placeholder="Ссылка на картинку" required />
    <span className="form__input-link-error"></span>
    </PopupWithForm>

    {/*  Avatar*/}
    <PopupWithForm
    title='Обновить аватар'
    name='formAvatar'
    btnName='Сохранить'
    isOpen={isEditAvatarPopupOpen}
    onClose={closeAllPopups}
    >
    <input type="url" name="avatar" id="form__input-avatar" form="formAvatar" className="popup__input popup__input_value_avatar form__input" placeholder="Ссылка" required/>
    <span className="form__input-avatar-error"></span>
    </PopupWithForm>

    <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
    >
    </ImagePopup>
        
    <PopupWithForm
        title='Вы уверены?'
        name='formSubmit'
        btnName='Да'
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
    >
    </PopupWithForm>
    
 


    {/* <div className="popup popup-image">
        <article className="popup-image__element">
            <button type="button" className="popup__close-button popup-image__close-button"></button>
            <img src="#" className="popup-image__image" alt=""/>
            <h2 className="popup-image__title"></h2>
        </article>
    </div>  */}
    

    {/* <div className="popup popup-confirm"> 
        <div className="popup__container">
            <button type="button" className="popup-confirm__close-button popup__close-button"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <button type="submit" className="popup__button popup-confirm__button">Да</button>
        </div>
    </div>  */}


</div>
  )}

  export default App;
