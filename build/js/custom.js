"use strict";var dataObj=[{id:0,name:"Mr. Cat",city:"Астана",descr:"Mr. Cat - это свобода умов, свобода творчества и креатива",link:"https://www.facebook.com/fdfp.spb",adress:"Астана, ул. Ленина, дом.1,",person:"Иннокентий Михайлов",thumb:"img/thumb_id_1.jpg",img:"img/thumb_id_1.jpg"},{id:1,name:"Freelance Cafe",city:"Екатеринбург",descr:"Freelance Cafe - это свобода умов, свобода творчества и креатива",link:"https://www.facebook.com/fdfp.spb",adress:"Екатеринбург, ул. Ленина, дом.1,",person:"Иннокентий Михайлов",thumb:"img/thumb_id_4.jpg",img:"img/thumb_id_4.jpg"},{id:2,name:"Челюскинцев",city:"Воронеж",descr:"Челюскинцев - это свобода умов, свобода творчества и креатива",link:"https://www.facebook.com/fdfp.spb",adress:"Воронеж, ул. Ленина, дом.1,",person:"Иннокентий Михайлов",thumb:"img/thumb_id_2.jpg",img:"img/thumb_id_2.jpg"},{id:3,name:"Лаборатория Касперского",city:"Новосибирск",descr:"Лаборатория Касперского - это свобода умов, свобода творчества и креатива",link:"https://www.facebook.com/fdfp.spb",adress:"Новосибирск, ул. Ленина, дом.1,",person:"Иннокентий Михайлов",thumb:"img/thumb_id_5.jpg",img:"img/thumb_id_5.jpg"},{id:4,name:"Антикафе Freedom for people",city:"Санкт-Петербург",descr:"Антикафе Freedom for people - это свобода умов, свобода творчества и креатива",link:"https://www.facebook.com/fdfp.spb",adress:"Санкт-Петербург, Васильевский остров, Невский проспект, дом.88,",person:"Иннокентий Михайлов",thumb:"img/thumb_id_3.jpg",img:"img/img_id_3.jpg"},{id:5,name:"IT-office",city:"Кемерово",descr:"IT-office - это свобода умов, свобода творчества и креатива",link:"https://www.facebook.com/fdfp.spb",adress:"Кемерово, ул. Ленина, дом.1,",person:"Иннокентий Михайлов",thumb:"img/thumb_id_6.jpg",img:"img/thumb_id_6.jpg"}];document.querySelector(".guide__wrapper").addEventListener("click",function(e){e.preventDefault();var t=this,i=e.target;if(!i.classList.contains("big-li")){var m=function(){for(var e=0;e<t.children.length;e++)if(i===t.children[e])return e}();console.log(t);var d=document.createElement("LI");d.className="big-li",d.setAttribute("data-name","id"+i.textContent),d.textContent="BIG"+i.textContent,t.insertBefore(d,t.children[m+1])}});