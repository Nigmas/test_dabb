'use strict';

// 1. получить ширину и высоту элемента
// 2. получить ширину и высоту род. блока
// 3. Разделить ширину родителя на колво блоков (остаток сделать падингами для первых элем)
// 4. каждый ряд ложим в псевдообложу с флоатом лефт
// 5. высота = колво блоков % колво псевдостолбцов с округлением в большую

// показать большой элемент
// 1. определяет создан ли элемент
// 2. если да - показывает его и скрывает прочие
//         (заздвинуть + показать)
// 3. если нет - создает элемент и вставляет его в первый столбец, после образа
//    с соответствующим номером (для всех столбцов) + показать

// функция раздвинуть
// 1. определяет номер элемента в столбце
// 2. ищет все элементы с похожими номерами в соседних столбцах
// 3. задает маржинботтом всем эелементам

// кнопка скрыть
// 1. скрыть элемент

// добавить новый
// 2. Всплывает окно с указанием данных
// 3. данные сохраняются в объект
//    3.1 проверка на похожий элемент 
//    3.2 если нет пуши в массив объектов
//    3.3 создаем из него новый элемент
// 1. вставка перед последним ("добавить") элементов


var dataObj = [
    {
        id: 0,
        name: "Mr. Cat",
        city: "Астана",
        descr: "Mr. Cat - это свобода умов, свобода творчества и креатива",
        link: "https://www.facebook.com/fdfp.spb",
        adress: "Астана, ул. Ленина, дом.1,",
        person: "Иннокентий Михайлов",
        thumb: "img/thumb_id_1.jpg",
        img: "img/thumb_id_1.jpg"        
    },
    {
        id: 1,
        name: "Freelance Cafe",
        city: "Екатеринбург",
        descr: "Freelance Cafe - это свобода умов, свобода творчества и креатива",
        link: "https://www.facebook.com/fdfp.spb",
        adress: "Екатеринбург, ул. Ленина, дом.1,",
        person: "Иннокентий Михайлов",
        thumb: "img/thumb_id_4.jpg",
        img: "img/thumb_id_4.jpg"
        
    },
    {
        id: 2,
        name: "Челюскинцев",
        city: "Воронеж",
        descr: "Челюскинцев - это свобода умов, свобода творчества и креатива",
        link: "https://www.facebook.com/fdfp.spb",
        adress: "Воронеж, ул. Ленина, дом.1,",
        person: "Иннокентий Михайлов",
        thumb: "img/thumb_id_2.jpg",
        img: "img/thumb_id_2.jpg"        
    },
    {
        id: 3,
        name: "Лаборатория Касперского",
        city: "Новосибирск",
        descr: "Лаборатория Касперского - это свобода умов, свобода творчества и креатива",
        link: "https://www.facebook.com/fdfp.spb",
        adress: "Новосибирск, ул. Ленина, дом.1,",
        person: "Иннокентий Михайлов",
        thumb: "img/thumb_id_5.jpg",
        img: "img/thumb_id_5.jpg"
        
    },
    {
        id: 4,
        name: "Антикафе Freedom for people",
        city: "Санкт-Петербург",
        descr: "Антикафе Freedom for people - это свобода умов, свобода творчества и креатива",
        link: "https://www.facebook.com/fdfp.spb",
        adress: "Санкт-Петербург, Васильевский остров, Невский проспект, дом.88,",
        person: "Иннокентий Михайлов",
        thumb: "img/thumb_id_3.jpg",
        img: "img/img_id_3.jpg"
    },
    {
        id: 5,
        name: "IT-office",
        city: "Кемерово",
        descr: "IT-office - это свобода умов, свобода творчества и креатива",
        link: "https://www.facebook.com/fdfp.spb",
        adress: "Кемерово, ул. Ленина, дом.1,",
        person: "Иннокентий Михайлов",
        thumb: "img/thumb_id_6.jpg",
        img: "img/thumb_id_6.jpg"
        
    }
]




document.querySelector(".guide__wrapper").addEventListener("click", function (e) {
    e.preventDefault();
    var parent = this,
        target = e.target;

    if (target.classList.contains("big-li")) return;

    // var href = target.getAttribute('href'),
    //     elem = document.querySelector('.' + href);

    var getTargetIndex = function () {
        for (var i = 0; i < parent.children.length; i++) {
            if(target === parent.children[i]) return i;        
        }
    }();

    console.log(parent);
    
    

        var newLi = document.createElement("LI");
        newLi.className = "big-li";
        newLi.setAttribute('data-name', 'id' + target.textContent)
        newLi.textContent = "BIG" + target.textContent;
        parent.insertBefore(newLi, parent.children[ getTargetIndex + 1 ]);
        // document.querySelector(".guide__wrapper").appendChild(newLi);
        // target.insertAdjacentHTML
});
