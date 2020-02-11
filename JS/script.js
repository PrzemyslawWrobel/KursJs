window.onload = function() {
  let info = document.getElementById("info");
  let ToDay = new Date();

  info.innerHTML = ToDay.toLocaleDateString(); //getDay() + " " + (ToDay.getMonth() + 1) + " " + ToDay.getFullYear();
};
//   // let indeksy = " A-56 B-12 K-51 A-53";
//   // let imie = "Daąśrek";
//   // let d = "ALAArkadiusz";
//   // let result = d.replace(/(A)(l)(a)/gi);
//   // //let result = imie.match(/^[A-Z][^0-9]*/g);

//   // // let result = indeksy.match(/[0-9]{1,}/g);
//   // let kodPocztowy = "43-300";
//   // result = /[0-9]{2}-?[0-9]{3}/.test(kodPocztowy);
//   // info.innerHTML = result;

//   var testButton = document.getElementById("myForm").testButton;

//   testButton.onclick = function(e) {
//     // e.preventDefault();
//     // var pw = document.getElementById("myForm").pw.value;
//     // let redExpPattern = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{7,}/;

//     // if (redExpPattern.test(pw)) {
//     //   document.getElementById("myForm").submit();
//     //   info.innerHTML = "Hasło silne";
//     // } else {
//     //   info.innerHTML = "Hasło słabe";
//     // }
//     var info = document.getElementById("info");

//     var testButton = document.getElementById("myForm").testButton;

//     // var pw = "aBc4fgąi";

//     testButton.onclick = function(e) {
//       e.preventDefault();
//       var pw = document.getElementById("myForm").pw.value;
//       var regExpPattern = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{7,}/;

//       if (regExpPattern.test(pw)) {
//         document.getElementById("myForm").submit();
//         info.innerHTML = "Hasło jest silne";
//       } else {
//         info.innerHTML = "Hasło jest za słabe";
//       }
//     };
//   };
//   //let pw = "asAe7fhjd";
// };
//   var tmp = " aRkaDius ";
//   tmp =
//     tmp
//       .trim()
//       .charAt(0)
//       .toUpperCase() +
//     tmp.slice(1, tmp.length - 1).toLowerCase() +
//     tmp.charAt(tmp.length - 2).toUpperCase();
//   info.innerHTML = tmp;
//   // let link = "https://szczecinski.eu/docs/react/podstawowe-pojecia/basic";
//   // info.innerHTML = link.slice(link.lastIndexOf("/") + 1);
// };
// window.onload = function() {
//   var myForm = document.getElementById("myForm");
//   var submitButton = document.getElementById("myForm").submitButton;

//   var info = document.getElementById("info");

//   submitButton.onclick = function(e) {
//     var tmpString = "";
//     for (var i = 0; i < myForm.nazwaKursu.length; i++) {
//       if (myForm.nazwaKursu[i].checked)
//         tmpString += myForm.nazwaKursu[i].value + " ";
//     }

//     info.innerHTML += tmpString + "<br>";

//     e.preventDefault();
//   };
//   // myForm.akceptacjaRegulaminu[0].onclick = function() {
//   //   submitButton.disabled = false;
//   // };
//   // myForm.akceptacjaRegulaminu[1].onclick = function() {
//   //   submitButton.disabled = true;
//   // };
//   for (var i = 0; i < myForm.akceptacjaRegulaminu.length; i++) {
//     myForm.akceptacjaRegulaminu[i].onclick = function() {
//       submitButton.disabled = this.value === "true";
//     };
//   }
// };
// window.onload = function() {
//   var poleLiczbowe = document.getElementById("myForm").poleLiczbowe;
//   var poleTekstowe = document.getElementById("myForm").poleTekstowe;
//   var submitMyForm = document.getElementById("myForm").submitMyForm;

//   var info = document.getElementById("info");

//   poleLiczbowe.onkeyup = function(e) {
//     info.innerHTML = e.which;

//     // };
//     //     poleLiczbowe.onkeyup = function (e) {

//     //info.innerHTML = e.which;
//     //var wpisanyZnak = e.which;

//     // if (isNumber(this.value)) {
//     //     this.style.backgroundColor = "green";
//     //     info.innerHTML = "";
//     //     isEverythingOK = true;
//     // }
//     // else {
//     //     e.preventDefault();
//     //     this.style.backgroundColor = "red";
//     //     info.innerHTML = "Niepoprawny format - pole przyjmuje tylko liczby";
//     //     isEverythingOK = false;
//     // }
//   };
// };

// function isNumber(valueToCheck) {
//     return !isNaN(valueToCheck);
// }

// window.onload = function () {
//     var poleLiczbowe = document.getElementById("myForm").poleLiczbowe; //.elements[0]
//     var poleTekstowe = document.getElementById("myForm").poleTekstowe; //.elements[1]

//     var submitMyForm = document.getElementById("myForm").submitMyForm; //.elements[2]

//     var info = document.getElementById("info");
//     // var i = 0;
//     // var isEverythingOK = true;

//     poleLiczbowe.onkeyup = function (e) {

//         info.innerHTML = e.which;
//         //var wpisanyZnak = e.which;

//         // if (isNumber(this.value)) {
//         //     this.style.backgroundColor = "green";
//         //     info.innerHTML = "";
//         //     isEverythingOK = true;
//         // }
//         // else {
//         //     e.preventDefault();
//         //     this.style.backgroundColor = "red";
//         //     info.innerHTML = "Niepoprawny format - pole przyjmuje tylko liczby";
//         //     isEverythingOK = false;
//         // }
//     };

//     // submitMyForm.onclick = function (e) {
//     //     if (!isEverythingOK)
//     //         e.preventDefault();
//     // };
// };

// var timeOutStoper;

// function stopwatch(uchwytStopera, liczba) {
//     uchwytStopera.innerHTML = liczba--;

//     if (liczba < 0)
//         return;
//     timeOutStoper = setTimeout(function () {
//         stopwatch(uchwytStopera, liczba);
//     }, 1000);
// }
// function stopwatchInterval(uchwytStopera, liczba) {
//     var timeIntervalRef = setInterval(function () {
//         if (--liczba < 0) {
//             clearInterval(timeIntervalRef);
//             return;
//         }

//         uchwytStopera.innerHTML = liczba; //liczba = 0
//     }, 1000);

//     return timeIntervalRef;
// }
// window.onload = function () {
//     var przyciskOdpalStoper = document.getElementById("przyciskOdpalStoper");
//     var przyciskZatrzymajStoper = document.getElementById("przyciskZatrzymajStoper");

//     var uchwytStopera = document.getElementById("uchwytStopera");

//     var timeIntervalRef;

//     przyciskOdpalStoper.onclick = function () {
//         var poczatkowaWartosc = document.getElementById("poczatkowaWartosc").value;
//         uchwytStopera.innerHTML = poczatkowaWartosc;
//         timeIntervalRef = stopwatchInterval(uchwytStopera, poczatkowaWartosc);
//     };
//     przyciskZatrzymajStoper.onclick = function () {
//         clearInterval(timeIntervalRef);
//     };
// };
// window.onload = function () {
//     var ToTopButton = document.getElementById("ToTopButton");

//     window.onscroll = function () {
//         var test = document.getElementById("test");

//         var ySrollAxis = window.pageYOffset;
//         if (ySrollAxis > 300) {
//             ToTopButton.style.display = "block";
//         } else {
//             ToTopButton.style.display = "none";
//         }
//         test.innerHTML = ySrollAxis;
//     }
//     ToTopButton.onclick = function () {
//         window.scrollBy(0, -1 * window.pageYOffset);
//     }

// }
// window.onload = function () {
//     var email = document.getElementById("email");
//     var submitFormButton = document.querySelector("#newsletter input[type='submit']");

//     submitFormButton.onclick = function (e) {
//         var e = e || window.event;
//         var tmp = document.getElementById("tmp");
//         e.preventDefault();
//         tmp.innerHTML = email.Value;

//         this.parentNode.submit();
//     };
// }

// var produkty = [
//     " PHP",
//     " Mysql",
//     " Javascript",
//     " PDO",
//     " Grunt.js",
//     " SASS"
// ];

// person = {
//     imię: "Arek",
//     nazwisko: "Bla",
//     age: 24,
// };

// function wykonaj(event, eventObj) {
//     //poniżej wsparcie dla eventu w każdej przeglądarce
//     var e = event || window.event;
//     //poniżej wsparcie dla dostępu do źródła evntu w każdej przeglądarce
//     var srcElement = e.target || e.srcElement;

//     var tmp = document.getElementById("tmp");
//     tmp.innerHTML = "źródło eventu: " + srcElement.tagName + "<br> event przypisany do tagu: " + eventObj.tagName;

//     // var tooltip = document.getElementById("tooltip");
//     // tooltip.style.display = "block";
//     // tooltip.style.left = e.clientX + 10 + "px";
//     // tooltip.style.top = e.clienty + 10 + "px";
// };

// window.onload = function () {
//     var test = document.getElementById("test");
//     var pogrubion = document.getElementById("pogrubion");
//     var przycisk = document.getElementById("przycisk");
//     test.onclick = function (event) {
//         alert("test");
//         wykonaj(event, this);
//     };
//     pogrubiony.onclick = function (event) {
//         alert("pogrubiony");
//     };
//     //przycisk.onclick = function(event)

//     przycisk.onclick = function (event) {
//         var e = event || window.event;
//         if (e.stopPropagation)
//             e.stopPropagation();
//         else
//             e.cancelBubble = true;
//         alert("przycisk");
//     }
// }

// var test = document.getElementById("test");
// var stop = document.getElementById("stop");

// function zmienKolor() {
//     test.className = "zmienKolor";
// }
// function zmienKolor2() {
//     this.removeAttribute("class")
//     //test.className = "fontMinus";
// }
// function powiekszCzcionke() {
//     var fontSize = parseInt(window.getComputedStyle(this).fontSize);
//     this.style.fontSize = (++fontSize) + "px";
// }
// // test.onmouseover = zmienKolor;
// // test.onmouseout = zmienKolor2;
// test.addEventListener("mouseover", zmienKolor);
// test.addEventListener("mouseover", powiekszCzcionke);
// test.addEventListener("mouseout", zmienKolor2);

// stop.addEventListener("click", function () {
//     test.removeEventListener("mouseover", powiekszCzcionke);
//});

// function fontPlus() {
//     test.className = "fontPlus";
// }

// function fontMinus() {
//     //this.removeAttribute("class")
//     test.className = "fontMinus";
// }
// var test = document.getElementById("test");

// function wypiszTekst(tekst) {
//     alert(tekst + "!!!!!!!!!!!!!!!!!!");
// }

// test.onmouseover = zmienKolor;
// test.onmouseout = zmienKolor2;

// test.onmouseover = function () {
//     alert("Kliknięty");
//     // wypiszTekst("asl;djg'g'as;dlgj");
// }

// /// tworzymy tabliczkę mnożenia
// var tabliczkaMnożenia = "<table>";

// for (var i = 1; i <= 10; i++) { //ilość wierszy w tabliczce mnożenia
//     tabliczkaMnożenia += "<tr>";
//     for (var j = 1; j <= 10; j++) {//ilość kolumn w tabliczce
//         tabliczkaMnożenia += "<td>" + i * j + "</td>";
//     }
//     tabliczkaMnożenia += "</tr>";
// }
// tabliczkaMnożenia += "</table>";

// var rezultat = document.getElementById("rezultat");

// rezultat.innerHTML = tabliczkaMnożenia;

// var x = document.createElement("p");
// x.style.color = "red";
// x.className = "testowa";
// x.innerHTML = "nowy tekst";

// var body = document.querySelector("body");
// var newChildNode = body.appendChild(x);
// var kursy = document.querySelectorAll("#kursyProgramowania li");
// for (var i = 0; i < kursy.length; i++) {
//     kursy[i].style.color = "red";
// }

// var kursy = document.querySelectorAll("#kursyProgramowania li");
// for (var index in kursy) {
//     kursy[index].style.color = "red";
// }
//alert(kursy[2].innerHTML);

// var suma = addNumbers(3, 0, 5, 99);

// function addNumbers() {
//     var suma = 0;
//     for (i = 0; i < arguments.length; i++) {
//         suma += arguments[i];
//     }
//     return suma;
// }
// alert(suma);
// var rezultat = document.getElementById("rezultat");

// var kursy = document.getElementById("kursyProgramowania").getElementsByTagName("li");

// for (let key in kursy) {
//     if (typeof (kursy[key]) !== "object")
//         break;
//     alert(kursy[key]);
// }

// //Pętla For
// for (let i = 0; i < kursy.length; i++) {

//     if (i % 2 !== 0) {
//         kursy[i].innerHTML = "Parzysty: " + kursy[i].innerHTML;
//     }else
//     continue;
//     //rezultat.innerHTML += produkty[i] + "<br>";
// }

// Petla while

// var i = 0;
// while (i < produkty.length) {
//     rezultat.innerHTML += produkty[i] + "<br>";
//     i++;
// }

//var kursy = document.getElementById("kursyProgramowania").getElementsByTagName("li");

//var i = 0;
// while (0 < kursy.length) {
//     kursy[i].innerHTML += " Ulubion";
//     rezultat.innerHTML += kursy[i].innerHTML + "<br>";
//     i++
// }

// Pętla Do While
// wykonuje się chociaż raz pomimo nieprawidłowego warunku
/*
var i=125;
do{
    alert(i)
    i++

}while (i<6)
*/

//Tablica liczb do sortowania
// var liczby = [
//     4, 5, -2, -7, 99, 15
// ];

/*Użyteczne metody na tablicach
*cocncat - łączy ze sobą dwie tablice
*join - łączy elementy tablicy w  określony przez nas sposób (--x--) zamiast "php", "ajax" mamy "php"--x--"ajax"
*pop usuwa ostatni element z tablicy i zwraca go do dalszych operacji
*push popchnąć element na koniec tablicy i zwróci jej długość
*shift - usuwa pierwszy element z tablicy i zraca go
*unshift - przesuwa wszystko o jeden i dodaje na początku nowy element
* sort  - sortuje elementy tablicy tylko stringi
    Liczby trzeba posortować po przez przesłanie funkcji anonimowej
    liczby.sort(function (a, b) { return a - b; });
    a-b  sortuje rosnąco, gdy b-a malejąco
 *reverse - odwróć kolejność tablicy
 * slice (1,3) - oznacza wycięcie od 1 ale bez niego do 3 włącznie
 * splice (1,3) - oznacza wycięcie od 1, a drugi oznacza ile elementów do wycięcia
  */

// var tmp = ["ajax"];
// //document.getElementById("rezultat").innerHTML = produkty.length;
// //document.getElementById("rezultat").innerHTML = produkty.unshift("ajax");
// document.getElementById("rezultat").innerHTML = produkty.sort();

// document.getElementById("rezultat").innerHTML = liczby.sort(function (a, b) { return a - b; });

// document.getElementById("rezultat").innerHTML += "<br>---------------------------------<br>";
// //document.getElementById("rezultat").innerHTML = produkty.push("gulp");

// document.getElementById("rezultat").innerHTML += produkty;
// document.getElementById("rezultat").innerHTML += "<br>---------------------------------<br>";
// document.getElementById("rezultat").innerHTML = produkty.unshift("Less");
// document.getElementById("rezultat").innerHTML += produkty;
//produkty[3] = "PDO";

// var element = document.getElementById("kursyProgramowania");

// element.innerHTML = produkty;

//produkty.push("PDO");

//var produkty = new Array();

//alert(produkty);

//  tablice asocjacyjne to rodzaj tablic gdzie zamiast indeksu jest string
//ASSOCIATIVE ARRAYS

// var osoba = [];
// osoba["imie"] = "Arek";
// osoba["nazwisko"] = "Nazwisko";
// //alert(osoba); //lub
// //alert(osoba.imie);

// var ul = document.getElementById("kursyTworzeniaStronWWW");
// var liArray = document.getElementsByTagName("li");
// //alert(liArray[2].innerHTML);

// var kursyProgramowania = document.getElementsByTagName("li");
// alert(kursyProgramowania[6].innerHTML);

// div.innerHTML = "nowa treść";

// var osoba = {
//     imie: "Bartek",
//     nazwisko: "Kurek",
//     wiek: "42",
//     pobinfo: function () {
//         return this.imie + " " + this.nazwisko + " Twój wiek to " + this.wiek;
//     }

// };
