interface NAMEOFCOOKIE {
    token: string,
    email: string
}
const NAMEOFCOOKIE = {
    token: 'token',
    email: 'email',
};
function getCookie(nameOfKey: string) {
    const name = nameOfKey;
    const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([$?*|{}\]\\^])/g, '\\$1')}=([^;]*)`));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function saveCode(nameOfKey: string, mean: string) {
    document.cookie = `${encodeURIComponent(nameOfKey)}=${encodeURIComponent(mean)}`;
}
interface POPUPNAME {
    POPUP_AUTORIZATION: HTMLDivElement,
    POPUP_CODE: HTMLElement,
    POPUP_NICNAME: HTMLElement
}
const POPUPNAME = {
    POPUP_AUTORIZATION: document.getElementById('popup1'),
    POPUP_CODE: document.getElementById('popup2'),
    POPUP_NICNAME: document.getElementById('popup3'),
};
const METHOD = {
    startBottom: 'append',
    startTop: 'prepend',
};
interface UI {
    place: HTMLElement,
    textmessage: HTMLElement,
    alreadycode: HTMLButtonElement,
    formMessage: HTMLFormElement,
    nicname: HTMLElement,
    popupform: HTMLDivElement,
    takecode: HTMLDivElement,
    sendcode: HTMLElement,
    emailInput: HTMLElement,
    my: HTMLElement,
    other: HTMLElement,
    setting: HTMLButtonElement,
    code: HTMLElement,
}
const UI_ELEMENT:UI = {
    place: document.querySelector('.place'),
    textmessage: document.querySelector('.input'),
    alreadycode: document.querySelector('.codealready'),
    formMessage: document.querySelector('.tools'),
    nicname: document.querySelector('.nicname'),
    popupform: document.querySelector('.popup-form'),
    takecode: document.querySelector('.popup1-form'),
    sendcode: document.querySelector('.popup2-form'),
    emailInput: document.querySelector('.email'),
    my: document.getElementById('myside'),
    other: document.getElementById('otherside'),
    setting: document.querySelector('.setting'),
    code: document.querySelector('.code'),
};
function openPopup(nameOfPopup: HTMLElement) {
    nameOfPopup.classList.remove('closepopup');
}
function closePopup(nameOfPopup: HTMLElement) {
    nameOfPopup.classList.add('closepopup');
}
function addMessagePrependOrAppend(elem: HTMLElement | Node, nameOfMethod: string) {
    if (nameOfMethod === METHOD.startBottom) {
        UI_ELEMENT.place.append(elem);
    }
    if (nameOfMethod === METHOD.startTop) {
        UI_ELEMENT.place.prepend(elem);
    }
}
function addMessageWithTemplate(tmpl: HTMLElement, nic: string, textOfmessage: string, nameOfMethodDirection: string) {
    const elem = tmpl.content.cloneNode(true);
    elem.querySelector('p').textContent = `${nic}:`;
    elem.querySelector('div').textContent = `${textOfmessage}`;
    addMessagePrependOrAppend(elem, nameOfMethodDirection);
}
const ERROR = {
    text: 'Упс! Что-то пошло не так...Загляните попозже',
};
function blockOfEndingMessages() {
  const allMessagesLoaded = document.createElement('div');
  allMessagesLoaded.classList.add('endofchat');
  allMessagesLoaded.textContent = 'Вся история загружена';
  UI_ELEMENT.place.prepend(allMessagesLoaded);
}
export {
  NAMEOFCOOKIE,
  getCookie,
  saveCode,
  POPUPNAME,
  METHOD,
  UI_ELEMENT,
  closePopup,
  openPopup,
  addMessageWithTemplate,
  ERROR,
  blockOfEndingMessages,
};