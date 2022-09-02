class Api {
  constructor({ headers, baseUrl }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUserData() {
    const requestUrl = this._baseUrl + "/users/me";
    return fetch(requestUrl, {
      headers: this._headers,
    }).then(this._getResponseData);
  }

  getCards() {
    const requestUrl = this._baseUrl + "/cards";
    return fetch(requestUrl, {
      headers: this._headers,
    }).then(this._getResponseData);
  }

  setUserData({ name, about }) {
    const requestUrl = this._baseUrl + "/users/me";
    return fetch(requestUrl, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._getResponseData);
  }

  addNewCard(data) {
    const requestUrl = this._baseUrl + "/cards";
    return fetch(requestUrl, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._getResponseData);
  }

  deleteCard(data) {
    const requestUrl = this._baseUrl + `/cards/${data._id}`;
    return fetch(requestUrl, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._getResponseData);
  }

  likeCard(cardId, isLiked) {
    const requestUrl = this._baseUrl + `/cards/likes/${cardId}`;
    return fetch(requestUrl, {
      method: isLiked ? "PUT" : "DELETE",
      headers: this._headers,
    }).then(this._getResponseData);
  }

  setNewAvatar({ avatar }) {
    const requestUrl = this._baseUrl + `/users/me/avatar`;
    return fetch(requestUrl, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then(this._getResponseData);
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-46",
  headers: {
    authorization: "b728ad0c-8a51-4521-be05-924ef3deb392",
    "Content-Type": "application/json",
  },
});
export default api;
