export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then((res) => {
      return this._checkServerResponse(res);
    });
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => {
      return this._checkServerResponse(res);
    });
  }

  changeUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then((res) => {
      return this._checkServerResponse(res);
    });
  }

  setAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar.link,
      }),
    }).then((res) => {
      return this._checkServerResponse(res);
    });
  }

  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => {
      return this._checkServerResponse(res);
    });
  }

  deleteCard(getId) {
    return fetch(`${this._baseUrl}/cards/${getId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._checkServerResponse(res);
    });
  }

  changeLikeNumber(getId, isLiked) {
    return fetch(`${this._baseUrl}/cards/likes/${getId}`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this._headers,
    }).then((res) => {
      return this._checkServerResponse(res);
    });
  }
  _checkServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }
}
