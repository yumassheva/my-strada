let form = document.forms.first;
let button = document.querySelector(".but");
let input = document.querySelector(".input");
let namecityadd = document.querySelector(".name");
let temperature = document.querySelector(".grad");
let rain = document.querySelector(".rain");
let all = document.querySelector(".all");
let additional = document.querySelector(".additional");
let like = document.querySelector(".snow");
let listcity = document.querySelector(".listcity");
let nameDetails = document.querySelector(".name-details");

form.addEventListener("submit", function (event) {
    renderDetails();
    fetchRequest(input.value);
    event.preventDefault();
           
})
const storage = {
    saveCityFavoriteList: function (cityFavoriteList) {
        
        localStorage.setItem('cityFavoriteList', JSON.stringify(cityFavoriteList));
    },
    getCityFavoriteList () {
        return JSON.parse(localStorage.getItem('cityFavoriteList'));
    },
    getCurrentCity() {
       return localStorage.getItem('city');
    },
    saveCurrentCity(currentCityName) {
        return localStorage.setItem('city', currentCityName);
    }
}
let cityFavoriteList = [
  //{ name: ''},
    //{ name: 'Poland' },
];

function addCityFavorite(newCityFavorite) {
    let findName = cityFavoriteList.findIndex(function (findName) {
        return findName.name === newCityFavorite;
    });
    if (findName >= 0) {
        alert('Такой город уже есть');
        return;
    } else if (newCityFavorite === "") {
        alert('Введите название города');
    } else {
        cityFavoriteList.push({
            name: newCityFavorite,
        });
    }
}
cityFavoriteList = storage.getCityFavoriteList();
//storage.saveCityFavoriteList(cityFavoriteList);
//storage.getCityFavoriteList();

fetchRequest(storage.getCurrentCity());
addUI();

like.addEventListener("click", function () {
    renderNow();
    addCityFavorite(namecityadd.textContent);
    storage.saveCityFavoriteList(cityFavoriteList);
    addUI();
})
function renderDetails() {
    additional.textContent = "";
}
function renderNow() {
   let taski = document.querySelectorAll(".blockcity");
    for (let tas of taski) {
        tas.remove();
    }
}
function addUI() {
    for (i = 0; i < storage.getCityFavoriteList().length; i++) {
        absol=(storage.getCityFavoriteList()[i].name);

        let blockcity = document.createElement("div");
        blockcity.className = "blockcity";
        listcity.append(blockcity);

        let newcity = document.createElement("li");
        newcity.textContent = absol;
        newcity.className = "newcity";
        blockcity.append(newcity);

        let delete_button = document.createElement('button');
        delete_button.className = "deletetask";
        delete_button.textContent = "+";
        newcity.after(delete_button);

        delete_button.addEventListener('click', function deleteTask() {
            let task = cityFavoriteList.filter(item => item.name !== newcity.textContent);//без мутаций. исходник по ссылке остается
            cityFavoriteList = task;
            storage.saveCityFavoriteList(cityFavoriteList);
            blockcity.textContent = "";
            blockcity.remove();
        })
        newcity.addEventListener('click', function ShowCity() {
            renderDetails();
            storage.saveCurrentCity(newcity.textContent);
            fetchRequest(newcity.textContent);
        })
    }
}
function fetchRequest(cityName) {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(function (commits) {
            namecityadd.textContent = commits.name;
            temperature.textContent = Math.round(commits.main.temp - 273) + '°C';
            rain.src = `http://openweathermap.org/img/wn/${commits.weather[0].icon}@4x.png`;

            nameDetails.textContent = commits.name;

            let tempa = document.createElement("li");
            tempa.textContent = `Temp:${Math.round(commits.main.temp - 273.13)}°C`;
            additional.append(tempa);

            let feels = document.createElement("li");
            feels.textContent = `Feels like:${Math.round(commits.main.feels_like - 273.13)}°C`;
            tempa.append(feels);

            let weath = document.createElement("li");
            weath.textContent = `Weather: ${commits.weather[0].main}`;
            feels.append(weath);

            let sunris = document.createElement("li");
            let t = new Date(commits.sys.sunrise * 1000);
            sunris.textContent = `Sunrise:${t.getHours()}:${t.getMinutes() }`;
            weath.append(sunris);

            let time = new Date(commits.sys.sunset * 1000);
            let sunse = document.createElement("li");
            sunse.textContent = `Sunset:${time.getHours()}:${t.getMinutes() }`;
            sunris.append(sunse);
        })
        .catch(error => alert(error.message));
}
