'use strict';

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
];

function getComputedValue () {
    var parentWidth = document.querySelector('.container');


       var parent = document.querySelector('.container');
        parentWidth = parent.clientWidth;
        parent = getComputedStyle(parent);
        parentWidth = parentWidth - parseInt(parent.paddingRight) -parseInt(parent.paddingLeft);
                

    var elemWidth = document.querySelector('.guide__item').offsetWidth,
        elemHeight = document.querySelector('.guide__item').offsetHeight,
        paddingValue = 0;

    var colsCount = Math.floor(parentWidth / elemWidth),
        elseSpace = parentWidth % elemWidth,
        marginValue = Math.floor(elseSpace / (colsCount - 1));

        if (colsCount === 1) {
            paddingValue = elseSpace / 2;
            marginValue = 0;
        }

    var resalt = {
            col: colsCount,
            margin: marginValue,
            padding: paddingValue,
            height: elemHeight,
            width: elemWidth
        };        

        return resalt;
};

function createItem (obj) {
    
    var item = document.createElement("LI");
        item.className = "guide__item guide__item--disp";
        item.style.marginRight = 0;

    var img = document.createElement("IMG");
        img.className = "guide__img";
        img.setAttribute('src', obj.thumb);
        img.setAttribute('alt', obj.name);
        item.appendChild(img);

    var wrapp = document.createElement("DIV"); 
        wrapp.className = "guide__wrapper";

    var name = document.createElement("DIV");
        name.className = "guide__name";
        name.textContent = obj.name;
        wrapp.appendChild(name);

    var city = document.createElement("DIV");
        city.className = "guide__city";
        city.textContent = obj.city;
        wrapp.appendChild(city);

        item.appendChild(wrapp);

        return item;
}

function createVirtualDOM (obj, values) {

//Make array of elements

var itemArray = [];
obj.forEach( function(i,item,arr) {
    itemArray.push( createItem(i) )
});


var item = document.createElement("LI");
    item.className = "guide__item guide__item--add";
    

var addName = document.createElement("DIV");
    addName.className = "guide__addName";
    addName.innerHTML = "Добавьте<br>свое место!";
    item.appendChild(addName);


var btn = document.createElement("DIV"); 
    btn.className = "btn";
    btn.textContent = "Добавить место";
    item.appendChild(btn);

itemArray.push( item )

//create main element with children from itemArray

var reborn = document.createElement("SECTION");
    reborn.className = "guide__list";
    reborn.style.paddingLeft = values.padding +'px';
var countItem = itemArray.length;

    for (var i = 0; i < values.col; i++) {
        var vertCol = document.createElement("UL");
        vertCol.className = "guide__colWrapper col" + i;
        vertCol.style.width = values.width + 'px';    
        if (!(i == values.col-1)) vertCol.style.marginRight = values.margin + 'px';

        var vertCount = Math.ceil( countItem / values.col );
        for (var k = 0; k < vertCount; k++) {
            var deletedItem = itemArray.shift();
            if (deletedItem == undefined) break;
            vertCol.appendChild(deletedItem);               
        }

        reborn.appendChild(vertCol);        
    }
return reborn;
}

function rebuildDOM () {

    var newDOM = createVirtualDOM(dataObj, getComputedValue());

    var mustDie = document.querySelector('.guide__list');
        mustDie.parentNode.removeChild(mustDie);

        if(document.querySelector('.guide__alarm')) {
            mustDie = document.querySelector('.guide__alarm');
            mustDie.parentNode.removeChild(mustDie);
        }    

    var parent = document.querySelector('.guide__mainBlock');
        parent.appendChild(newDOM);
}

rebuildDOM();


window.onresize = function(event) {
   rebuildDOM();
};

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
