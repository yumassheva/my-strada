"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockOfEndingMessages = exports.ERROR = exports.addMessageWithTemplate = exports.openPopup = exports.closePopup = exports.UI_ELEMENT = exports.METHOD = exports.POPUPNAME = exports.saveCode = exports.getCookie = exports.NAMEOFCOOKIE = void 0;
const NAMEOFCOOKIE = {
    token: 'token',
    email: 'email',
};
exports.NAMEOFCOOKIE = NAMEOFCOOKIE;
function getCookie(nameOfKey) {
    const name = nameOfKey;
    const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([$?*|{}\]\\^])/g, '\\$1')}=([^;]*)`));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
exports.getCookie = getCookie;
function saveCode(nameOfKey, mean) {
    document.cookie = `${encodeURIComponent(nameOfKey)}=${encodeURIComponent(mean)}`;
}
exports.saveCode = saveCode;
const POPUPNAME = {
    POPUP_AUTORIZATION: document.getElementById('popup1'),
    POPUP_CODE: document.getElementById('popup2'),
    POPUP_NICNAME: document.getElementById('popup3'),
};
exports.POPUPNAME = POPUPNAME;
const METHOD = {
    startBottom: 'append',
    startTop: 'prepend',
};
exports.METHOD = METHOD;
const UI_ELEMENT = {
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
exports.UI_ELEMENT = UI_ELEMENT;
function openPopup(nameOfPopup) {
    nameOfPopup.classList.remove('closepopup');
}
exports.openPopup = openPopup;
function closePopup(nameOfPopup) {
    nameOfPopup.classList.add('closepopup');
}
exports.closePopup = closePopup;
function addMessagePrependOrAppend(elem, nameOfMethod) {
    if (nameOfMethod === METHOD.startBottom) {
        UI_ELEMENT.place.append(elem);
    }
    if (nameOfMethod === METHOD.startTop) {
        UI_ELEMENT.place.prepend(elem);
    }
}
function addMessageWithTemplate(tmpl, nic, textOfmessage, nameOfMethodDirection) {
    const elem = tmpl.content.cloneNode(true);
    elem.querySelector('p').textContent = `${nic}:`;
    elem.querySelector('div').textContent = `${textOfmessage}`;
    addMessagePrependOrAppend(elem, nameOfMethodDirection);
}
exports.addMessageWithTemplate = addMessageWithTemplate;
const ERROR = {
    text: 'Упс! Что-то пошло не так...Загляните попозже',
};
exports.ERROR = ERROR;
function blockOfEndingMessages() {
    const allMessagesLoaded = document.createElement('div');
    allMessagesLoaded.classList.add('endofchat');
    allMessagesLoaded.textContent = 'Вся история загружена';
    UI_ELEMENT.place.prepend(allMessagesLoaded);
}
exports.blockOfEndingMessages = blockOfEndingMessages;
