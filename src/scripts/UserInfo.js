export default class UserInfo {
  constructor(userName, userJob) {
    this.UserInfo = document.querySelector(userName);
    this.UserJob = document.querySelector(userJob);
  }
  getUserInfo() {
    return {
      userName: this.userName.textContent,
      userJob: this.userJob.textContent,
    };
  }
  setUserInfo({ userJob, userName }) {
    this.userName.textContent = userName.value;
    this.userJob.textContent = userJob.value;
  }
}
