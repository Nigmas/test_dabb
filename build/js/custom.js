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
        descr: "Антикафе Freedom for people - это свобода для умов, свобода для творчества и креатива",
        link: "https://www.facebook.com/fdfp.spb",
        adress: "Санкт-Петербург, Васильевский остров, Невский проспект, дом.88, корпус 20, офис 17",
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

// =============== MADE DOM FROM OBJECT ==============

function getComputedValue () {

    var parent = document.querySelector('.container'),
        parentWidth = parent.clientWidth;
        parent = getComputedStyle(parent);
        parentWidth = parentWidth - parseInt(parent.paddingRight) -parseInt(parent.paddingLeft);

    var elemWidth = document.querySelector('.guide__item').offsetWidth,
        elemHeight = document.querySelector('.guide__item').offsetHeight,
        marginBottom = parseInt(getComputedStyle(document.querySelector('.guide__item')).marginBottom),
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
            width: elemWidth,
            marginBottom
        };

        return resalt;
};

var valuesData = getComputedValue();

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

//Make last clickable item and push from array

var item = document.createElement("LI");
    item.className = "guide__item guide__item--add";


var addName = document.createElement("DIV");
    addName.className = "guide__addName";
    addName.innerHTML = "Добавьте<br>свое место!";
    item.appendChild(addName);


var btn = document.createElement("DIV");
    btn.className = "btn js-form";
    btn.textContent = "Добавить место";
    item.appendChild(btn);

itemArray.push( item );

//create main element with children from itemArray

var reborn = document.createElement("SECTION");
    reborn.className = "guide__list";
    reborn.style.paddingLeft = values.padding +'px';
var countItem = itemArray.length;

    for (var i = 0; i < values.col; i++) {
        var vertCol = document.createElement("UL");
        vertCol.className = "guide__colWrapper col" + i;
        vertCol.style.width = values.width + 'px';
        if (!(i === values.col-1)) vertCol.style.marginRight = values.margin + 'px';

        var vertCount = Math.ceil( countItem / values.col );
        for (var k = 0; k < vertCount; k++) {
            var deletedItem = itemArray.shift();
            if (deletedItem === undefined) break;
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
   valuesData = getComputedValue();
};




// =============== BUILD FULLSIZE ITEM ON CLICK ==============

function createFullItem (obj, margin) {

    var item = document.createElement("LI");
        item.className = "full full-id-" + obj.id;
        item.style.top = margin.top + "px";

    var imgBlock = document.createElement("DIV");
        imgBlock.className = "full__imgBlock";

    var img = document.createElement("IMG");
        img.className = "full__img";
        img.setAttribute('src', obj.img);
        img.setAttribute('alt', obj.name);
        imgBlock.appendChild(img);

        item.appendChild(imgBlock);

    var textBlock = document.createElement("DIV");
        textBlock.className = "full__textBlock";

    function madeBlock (text) {
        var elem = document.createElement("DIV");
        elem.className = "full__" + text;
        elem.textContent = obj[text];
        textBlock.appendChild(elem);
    }
    madeBlock('name');
    if (obj.descr) madeBlock('descr');
    if (obj.link) madeBlock('link');
    if (obj.adress) madeBlock('adress');
    if (obj.person) madeBlock('person');

    var btn = document.createElement("DIV");
        btn.className = "full__btn";
        textBlock.appendChild(btn);

    item.appendChild(textBlock);
    return item;
}

function hideAll () {
    var arr = document.querySelectorAll(".full");
    for (var i = 0; i < arr.length; i++) {
        arr[i].style.display = "none";        
    }

    var itemArr = document.querySelectorAll(".guide__item");
    for (var k = 0; k < itemArr.length; k++) {
        itemArr[k].style.marginBottom = "";        
    }
    
}

function getRow (elem) {
    var itemList = elem.parentNode.parentNode,
        cols = itemList.children,
        arr = [];

    var num = function () {
        var parent = elem.parentNode.children;
        for (var i = 0; i < parent.length; i++) {
            if(elem === parent[i]) return i;
        }
    }();

    for (var i = 0; i < cols.length; i++) {
        var element = cols[i].children[num];
        if (element) arr.push(element);
    }
    return arr;
}

function itemIdentifyCheck (item, obj) {
    var itemImg = item.querySelector(".guide__img").getAttribute("src") || item.img,
        itemName = item.querySelector(".guide__name").textContent || item.name,
        itemCity = item.querySelector(".guide__city").textContent || item.city;

    for ( var key in obj) {
        if ( itemImg === obj[key].thumb && itemName === obj[key].name && itemCity === obj[key].city) {
            return obj[key];
        }
    }
    return false;
}

function createVirtFullSizeItem (item, obj, margin) {
    var itemData = itemIdentifyCheck(item, obj);
    return createFullItem(itemData, margin);
}


function countMargin (item, values) {
    var marginVal = {
        top: 393,
        bottom: 817
    };

    if (document.documentElement.clientWidth <= 1399) marginVal.top -= 60, marginVal.bottom -= 130;
    if (document.documentElement.clientWidth <= 1200) marginVal.top += 30, marginVal.bottom -= 70;
    if (document.documentElement.clientWidth <= 992) marginVal.top += 30, marginVal.bottom -= 150;
    if (document.documentElement.clientWidth <= 480) marginVal.top -= 50, marginVal.bottom -= 20;

    var num = function () {
        var parent = item.parentNode.children;
        for (var i = 0; i < parent.length; i++) {
            if(item === parent[i]) return i;
        }
    }();

    marginVal.top =  marginVal.top + num * ( values.height + values.marginBottom );       
        
    return marginVal;
}


document.querySelector(".guide__mainBlock").addEventListener("click", function (e) {
    e.preventDefault();

    var target = e.target,
        targetLi;

    function getParrent(elem) {
        targetLi = elem;
        if (elem.classList.contains("guide__item--disp")) return elem;
        if (elem === document.body) return false;
        getParrent(elem.parentNode);
    }
    getParrent(target);

    if(targetLi === document.body) return;


    function cleanSpaceFromBlock (elem, margin) {
        getRow(elem).forEach( function(i) {
            i.style.marginBottom = margin.bottom + 'px';
        })
    }


function renderFullBlock (elem, data) {
        var fullSize = createVirtFullSizeItem( elem, data, countMargin(elem, valuesData) );
        
        hideAll();
        cleanSpaceFromBlock(elem, countMargin(elem, valuesData) );        
        document.querySelector(".guide__list").appendChild(fullSize);
    }

    renderFullBlock(targetLi, dataObj);
}, false);



document.querySelector(".guide__mainBlock").addEventListener("click", function (e) {
    e.preventDefault();
    var target = e.target;
    if ( target.classList.contains("full__btn")) hideAll();    
}, false);




// ================ FORM DATA ===================

var form = document.getElementById("callbackForm"),
    newObj = {};

function showForm() {
    form.style.display = "block";
    document.querySelector(".shadowGround").style.display = "block";
    var elemScroll =   document.querySelector(".guide__item--add");
    elemScroll = elemScroll.getBoundingClientRect().top + pageYOffset;

    var boxScroll = document.querySelector(".guide__mainBlock");
    boxScroll = boxScroll.getBoundingClientRect().top + pageYOffset;

    form.style.top = elemScroll - boxScroll - 200 + "px";  
}

function hideForm() {
    form.style.display = "none";
    document.querySelector(".shadowGround").style.display = "none";
}

document.querySelector(".guide__mainBlock").addEventListener("click", function (e) {
    if ( e.target.classList.contains("js-form")) showForm();    
}, false);

form.addEventListener("click", function (e) {
    if ( e.target.classList.contains("full__btn--form")) hideForm();    
}, false);

document.querySelector(".btn--form").addEventListener("click", function (e) {
    newObj = {
        name: form.name.value,
        city: form.city.value,
        descr: form.descr.value,
        link: form.link.value,
        adress: form.adress.value,
        person: form.person.value,
        img: form.img.value
    };

    if (newObj.name == 0 || newObj.city == 0 || newObj.img == 0 ) {
        document.querySelector(".btn--form").innerHTML = "Попробовать еще раз!"
        return;
    }

    newObj.thumb = newObj.img;
    newObj.id = dataObj.length;

    dataObj.push(newObj);

    hideForm();
    rebuildDOM();
})

document.querySelector(".menu__target").addEventListener("click", function (e) {
    document.querySelector(".menu").classList.toggle("menu--active");      
}, false);

document.querySelector(".menu").addEventListener("click", function (e) {
    document.querySelector(".menu").classList.toggle("menu--active");      
}, false);