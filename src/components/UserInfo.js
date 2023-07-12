export default class UserInfo {
  constructor(userName, userJob, avatar) {
    this.userName = document.querySelector(userName);
    this.userJob = document.querySelector(userJob);
    this._avatarSelector = document.querySelector(avatar);
  }
  getUserInfo() {
    return {
      userName: this.userName.textContent,
      userJob: this.userJob.textContent,
    };
  }
  setUserInfo({ userJob, userName }) {
    this.userName.textContent = userName;
    this.userJob.textContent = userJob;
  }
  setAvatar(avatar) {
    this._avatarSelector.src = avatar;
  }
}
