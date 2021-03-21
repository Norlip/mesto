export class UserInfo {

  constructor(name, descript) {

    this._name = document.querySelector(name);
    this._info = document.querySelector(descript);


  }


  getUserInfo() {
    return {
      name: this._name.textContent,
      info: this._info.textContent
    };
  }

  setUserInfo(name, info) {
    const inputName = document.querySelector(".popup-edit__input_type_name")
    const inputDesc = document.querySelector(".popup-edit__input_type_title")

    const docName = document.querySelector(".profile__name")
    const docDesc = document.querySelector(".profile__descript")

    inputName.value = name
    inputDesc.value = info

    docName.textContent = name
    docDesc.textContent = info

  }

}