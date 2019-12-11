

var produkty = [
    " PHP",
    " Mysql",
    " Javascript",
    " PDO",
    " Grunt.js",
    " SASS"
];

var liczby = [
    4, 5, -2, -7, 99, 15
];

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

var tmp = ["ajax"];
//document.getElementById("rezultat").innerHTML = produkty.length;
//document.getElementById("rezultat").innerHTML = produkty.unshift("ajax");
document.getElementById("rezultat").innerHTML = produkty.sort();

document.getElementById("rezultat").innerHTML = liczby.sort(function (a, b) { return a - b; });

document.getElementById("rezultat").innerHTML += "<br>---------------------------------<br>";
//document.getElementById("rezultat").innerHTML = produkty.push("gulp");

document.getElementById("rezultat").innerHTML += produkty;
document.getElementById("rezultat").innerHTML += "<br>---------------------------------<br>";
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
