"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpFunction_1 = require("./helpFunction");
let allMessages;
const step = 20;
let start = 0;
let finish = step + start;
const urlStart = 'https://edu.strada.one/api/';
const token = (0, helpFunction_1.getCookie)(helpFunction_1.NAMEOFCOOKIE.token);
const socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);
const saveInfo = ({ email }) => {
    let myMail;
    return myMail = email;
};
const saveH = (data) => {
    allMessages = data.messages;
    loadTwentyMes();
    helpFunction_1.UI_ELEMENT.place.scrollTop = 1e9;
};
async function request(type) {
    let additional;
    if (type === 'info') {
        additional = 'user/me';
    }
    else {
        additional = 'messages/';
    }
    try {
        const response = await fetch(`${urlStart}/${additional}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        if (response.ok) {
            const commits = await response.json();
            type === 'info' ? saveInfo(commits) : saveH(commits);
        }
    }
    catch (err) {
        alert(err);
    }
}
function sendMyMessageFromInput() {
    if (helpFunction_1.UI_ELEMENT.textmessage.value !== '') {
        const outgoingMessage = helpFunction_1.UI_ELEMENT.textmessage.value;
        socket.send(JSON.stringify({ text: outgoingMessage }));
    }
    helpFunction_1.UI_ELEMENT.textmessage.value = '';
}
function ConnectionBySocket() {
    socket.onopen = function statusSocket() {
        console.log('Соединение установлено');
    };
    socket.onmessage = function newMessage(event) {
        const item = JSON.parse(event.data);
        if (item.user.email === myMail) {
            (0, helpFunction_1.addMessageWithTemplate)(helpFunction_1.UI_ELEMENT.my, item.user.name, item.text, helpFunction_1.METHOD.startBottom);
        }
        else {
            (0, helpFunction_1.addMessageWithTemplate)(helpFunction_1.UI_ELEMENT.other, item.user.name, item.text, helpFunction_1.METHOD.startBottom);
        }
    };
}
function opening() {
    if (token !== undefined) {
        (0, helpFunction_1.closePopup)(helpFunction_1.POPUPNAME.POPUP_AUTORIZATION);
        (0, helpFunction_1.closePopup)(helpFunction_1.POPUPNAME.POPUP_CODE);
        (0, helpFunction_1.closePopup)(helpFunction_1.POPUPNAME.POPUP_NICNAME);
    }
    else {
        (0, helpFunction_1.closePopup)(helpFunction_1.POPUPNAME.POPUP_NICNAME);
        (0, helpFunction_1.openPopup)(helpFunction_1.POPUPNAME.POPUP_AUTORIZATION);
        helpFunction_1.UI_ELEMENT.alreadycode.addEventListener('click', () => {
            (0, helpFunction_1.closePopup)(helpFunction_1.POPUPNAME.POPUP_AUTORIZATION);
            (0, helpFunction_1.openPopup)(helpFunction_1.POPUPNAME.POPUP_CODE);
        });
    }
}
async function sendName(containOfBody, nameOfMethod, additionalToMainURL) {
    const body = containOfBody;
    try {
        const response = await fetch(`${urlStart}${additionalToMainURL} `, {
            method: nameOfMethod,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        });
        if (response.ok) {
            return response.ok;
        }
    }
    catch (err) {
        alert(err);
    }
}
function loadTwentyMes() {
    if (finish !== allMessages.length) {
        allMessages.slice(start, finish).forEach((item) => {
            if (item.user.email === myMail) {
                (0, helpFunction_1.addMessageWithTemplate)(helpFunction_1.UI_ELEMENT.my, item.user.name, item.text, helpFunction_1.METHOD.startTop);
            }
            else {
                (0, helpFunction_1.addMessageWithTemplate)(helpFunction_1.UI_ELEMENT.other, item.user.name, item.text, helpFunction_1.METHOD.startTop);
            }
        });
        finish += step;
        start += step;
    }
    else {
        (0, helpFunction_1.blockOfEndingMessages)();
    }
}
function scrollMessagesList(event) {
    (0, helpFunction_1.saveCode)('cash', helpFunction_1.UI_ELEMENT.place.scrollHeight);
    const oldScroll = (0, helpFunction_1.getCookie)('cash');
    const chat = event;
    if (chat.scrollTop === 0) {
        loadTwentyMes();
        chat.scrollTop += chat.scrollHeight - oldScroll;
    }
}
helpFunction_1.UI_ELEMENT.setting.addEventListener('click', () => {
    (0, helpFunction_1.openPopup)(helpFunction_1.POPUPNAME.POPUP_NICNAME);
    helpFunction_1.UI_ELEMENT.popupform.addEventListener('submit', (e) => {
        e.preventDefault();
        if (helpFunction_1.UI_ELEMENT.nicname.value !== '') {
            sendName({ name: helpFunction_1.UI_ELEMENT.nicname.value }, 'PATCH', 'user');
        }
        (0, helpFunction_1.closePopup)(helpFunction_1.POPUPNAME.POPUP_NICNAME);
    });
});
helpFunction_1.UI_ELEMENT.formMessage.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMyMessageFromInput();
});
helpFunction_1.UI_ELEMENT.takecode.addEventListener('submit', (e) => {
    e.preventDefault();
    if (helpFunction_1.UI_ELEMENT.emailInput.value !== '') {
        sendName({ email: helpFunction_1.UI_ELEMENT.emailInput.value }, 'POST', 'user');
    }
    (0, helpFunction_1.closePopup)(helpFunction_1.POPUPNAME.POPUP_AUTORIZATION);
});
helpFunction_1.UI_ELEMENT.sendcode.addEventListener('submit', (e) => {
    e.preventDefault();
    if (helpFunction_1.UI_ELEMENT.sendcode.value !== '') {
        (0, helpFunction_1.saveCode)(helpFunction_1.NAMEOFCOOKIE.token, helpFunction_1.UI_ELEMENT.code.value);
    }
    (0, helpFunction_1.closePopup)(helpFunction_1.POPUPNAME.POPUP_CODE);
});
document.addEventListener('DOMContentLoaded', () => {
    ConnectionBySocket();
    opening();
    request('info');
    request('mes');
});
helpFunction_1.UI_ELEMENT.place.addEventListener('scroll', () => {
    if (document.querySelector('.endofchat') === null) {
        scrollMessagesList(helpFunction_1.UI_ELEMENT.place);
    }
    else {
        return;
    }
});
