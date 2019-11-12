var a = prompt('podaj zmienna a: ');

function test(f) {
    f();
}

test(
    function () {
        alert('asdfasdf1 ' + a)
    }
);