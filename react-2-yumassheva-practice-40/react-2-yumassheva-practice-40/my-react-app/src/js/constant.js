import film from "/src/js/films.js";

const ACTION_1 = "start_next";
const ACTION_2 = "finish_next";
const ACTION_3 = "start_before";
const ACTION_4 = "finish_before";
const ACTION_5 = "page_next";
const ACTION_6 = "page_before";
const ACTION_7 = "change_option";
const ACTION_8 = "change_option2";
const ACTION_9 = "changeMas";
const ACTION_10 = "genre";
const ACTION_11 = "modal";
const ACTION_12 = "fav";
const ACTION_13 = "later";
const ACTION_14 = "nextSearch";
const ACTION_15 = "next2Search";

const options = [
  { id: 1, option: "Популярные по убыванию" },
  { id: 2, option: "Популярные по возрастанию" },
  { id: 3, option: "Рейтинг по возрастанию" },
  { id: 4, option: "Рейтинг по убыванию" },
];
const options2 = [
  { id: 1, option: "2020" },
  { id: 2, option: "2019" },
  { id: 3, option: "2018" },
  { id: 4, option: "2017" },
];
const options3 = [
  { id: 1, option: "Избранное" },
  { id: 2, option: "Смотреть позже" },
];
const options4 = [
  { id: 1, option: "Высокая" },
  { id: 2, option: "Низкая" },
];
const options5 = [
  { id: 1, option: "Известное" },
  { id: 2, option: "Неизвестное" },
];
const popularityLess = options[0].option;
const popularityMore = options[1].option;
const voteAverageMore = options[2].option;
const voteAverageLess = options[3].option;

const cardsPerPage = 10;
const firstNumberOfPages = 1;
const slidePerClick = 1;
const defaultStart = 0;
const lastNumberOfPages = film.length / cardsPerPage;
const buttonNameNext = "Вперед";
const buttonNameBefore = "Назад";
const defaultStartSearch=0;
const cardsPerPageSearch=1;
export {
  ACTION_1,
  ACTION_2,
  ACTION_3,
  ACTION_4,
  ACTION_5,
  ACTION_6,
  ACTION_7,
  ACTION_8,
  ACTION_9,
  ACTION_10,
  ACTION_11,
  ACTION_12,
  ACTION_13,
  ACTION_14,
  ACTION_15,
  popularityLess,
  popularityMore,
  voteAverageLess,
  voteAverageMore,
  options,
  options2,
  options3,
  options4,
  options5,
  cardsPerPage,
  firstNumberOfPages,
  slidePerClick,
  defaultStart,
  lastNumberOfPages,
  defaultStartSearch,
  cardsPerPageSearch,
  buttonNameNext,
  buttonNameBefore,
};
