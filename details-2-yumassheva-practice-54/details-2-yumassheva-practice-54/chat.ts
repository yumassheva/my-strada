import {
  getCookie,
  saveCode,
  NAMEOFCOOKIE,
  METHOD,
  POPUPNAME,
  UI_ELEMENT,
  closePopup,
  openPopup,
  addMessageWithTemplate,
  blockOfEndingMessages,
} from './helpFunction';
interface ArrayOfMessages {
    text: string,
    messages: string,
    user:
    {
        name: string,
        email: string
    }
}
interface ArrayMessage{
    messages:string
}
let allMessages: Array<ArrayOfMessages>;
const step = 20;
let start = 0;
let finish = step + start;
let myMail: string

const urlStart: RequestInfo = 'https://edu.strada.one/api/';
const token: string | undefined = getCookie(NAMEOFCOOKIE.token);
const socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);

const saveInfo = ({ email }: { email:string } ) => {
  return myMail = email;
};
const saveH = (data: ArrayMessage) => {
  allMessages = data.messages;
  loadTwentyMes();
  UI_ELEMENT.place.scrollTop = 1e9;
};
async function request(type: string) {
   let additional: string
  if (type === 'info') { additional = 'user/me' } else { additional = 'messages/' }
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
  } catch (err) {
    alert(err);
  }
}
function sendMyMessageFromInput() {
  if (UI_ELEMENT.textmessage.value !== '') {
    const outgoingMessage = UI_ELEMENT.textmessage.value;
    socket.send(JSON.stringify({ text: outgoingMessage }));
  }
  UI_ELEMENT.textmessage.value = '';
}
function ConnectionBySocket() {
  socket.onopen = function statusSocket() {
    console.log('Соединение установлено');
  };
  socket.onmessage = function newMessage(event) {
    const item = JSON.parse(event.data);
    if (item.user.email === myMail) {
      addMessageWithTemplate(UI_ELEMENT.my, item.user.name, item.text, METHOD.startBottom);
    } else {
      addMessageWithTemplate(UI_ELEMENT.other, item.user.name, item.text, METHOD.startBottom);
    }
  };
}
function opening() {
  if (token !== undefined) {
    closePopup(POPUPNAME.POPUP_AUTORIZATION);
    closePopup(POPUPNAME.POPUP_CODE);
    closePopup(POPUPNAME.POPUP_NICNAME);
  } else {
    closePopup(POPUPNAME.POPUP_NICNAME);
    openPopup(POPUPNAME.POPUP_AUTORIZATION);
    UI_ELEMENT.alreadycode.addEventListener('click', () => {
      closePopup(POPUPNAME.POPUP_AUTORIZATION);
      openPopup(POPUPNAME.POPUP_CODE);
    });
  }
}
async function sendName(containOfBody: Object, nameOfMethod: string, additionalToMainURL: string) {
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
    } catch (err) {
        alert(err);
    }
}
function loadTwentyMes() {
  if (finish !== allMessages.length) {
    allMessages.slice(start, finish).forEach((item) => {
      if (item.user.email === myMail) {
        addMessageWithTemplate(UI_ELEMENT.my, item.user.name, item.text, METHOD.startTop);
      } else {
        addMessageWithTemplate(UI_ELEMENT.other, item.user.name, item.text, METHOD.startTop);
      }
    });
    finish += step;
    start += step;
  } else {
    blockOfEndingMessages();
  }
}
function scrollMessagesList(event: Event & { target: HTMLElement}) {
  saveCode('cash', UI_ELEMENT.place.scrollHeight);
  const oldScroll = getCookie('cash')
  const chat = event;
  if (chat.scrollTop === 0) {
    loadTwentyMes();
    chat.scrollTop += chat.scrollHeight - oldScroll;
  }
}
UI_ELEMENT.setting.addEventListener('click', () => {
  openPopup(POPUPNAME.POPUP_NICNAME);
    UI_ELEMENT.popupform.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    if (UI_ELEMENT.nicname.value !== '') {
      sendName({ name: UI_ELEMENT.nicname.value }, 'PATCH', 'user');
    }
    closePopup(POPUPNAME.POPUP_NICNAME);
  });
});
UI_ELEMENT.formMessage.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  sendMyMessageFromInput();
});
UI_ELEMENT.takecode.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  if (UI_ELEMENT.emailInput.value !== '') {
    sendName({ email: UI_ELEMENT.emailInput.value }, 'POST', 'user');
  }
  closePopup(POPUPNAME.POPUP_AUTORIZATION);
});
UI_ELEMENT.sendcode.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  if (UI_ELEMENT.sendcode.value !== '') {
    saveCode(NAMEOFCOOKIE.token, UI_ELEMENT.code.value);
  }
  closePopup(POPUPNAME.POPUP_CODE);
});
document.addEventListener('DOMContentLoaded', () => {
  ConnectionBySocket();
  opening();
  request('info');
  request('mes');
});
UI_ELEMENT.place.addEventListener('scroll', () => {
  if (document.querySelector('.endofchat') === null) { scrollMessagesList(UI_ELEMENT.place); }
  else { return; }
})