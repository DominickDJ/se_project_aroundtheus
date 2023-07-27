export default class UserInfo {
  constructor(userName, userJob, avatar) {
    this.userName = document.querySelector(userName);
    this.userJob = document.querySelector(userJob);
    this._avatar = document.querySelector(avatar);
  }
  getUserInfo() {
    return {
      userName: this.userName.textContent,
      userJob: this.userJob.textContent,
    };
  }
  setUserInfo({ about, name }) {
    this.userName.textContent = name;
    this.userJob.textContent = about;
  }
  setAvatar(avatar) {
    this._avatar.src = avatar;
  }
}
