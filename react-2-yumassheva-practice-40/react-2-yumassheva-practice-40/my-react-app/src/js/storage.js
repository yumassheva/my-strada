const mailName = "mail";
const passwordName = "password";
const favouriteListName = "FavouriteList";
const laterListName = "LaterList";
const filmInfoList = "filmInfoList";
const storage = {
  saveMail: function (Mail) {
    localStorage.setItem(mailName, JSON.stringify(Mail));
  },
  savePass: function (Pass) {
    localStorage.setItem(passwordName, JSON.stringify(Pass));
  },
  getMail() {
    return JSON.parse(localStorage.getItem(mailName));
  },
  getPass() {
    return JSON.parse(localStorage.getItem(passwordName));
  },
  saveFavourite: function (favouriteList) {
    localStorage.setItem(favouriteListName,JSON.stringify(Array.from(favouriteList)));
  },
  saveLaterList: function (laterList) {
    localStorage.setItem(laterListName, JSON.stringify(Array.from(laterList)));
  },
  getFavourite() {
    return JSON.parse(localStorage.getItem(favouriteListName));
  },
  getLaterList() {
    return JSON.parse(localStorage.getItem(laterListName));
  },
  savefilmInfoList: function (filmInfo) {
    localStorage.setItem(filmInfoList, JSON.stringify(filmInfo));
  },
  getfilmInfoList() {
    return JSON.parse(localStorage.getItem(filmInfoList));
  },
};

export { storage };
