function teglalapKeruletTerulet() {
    a = parseInt (document.querySelector('#oldal1').value);
    b = parseInt (document.querySelector('#oldal2').value);
    K = (a + b) * 2;
    T = a * b;

    document.querySelector('#terulet').innerText = T;
    document.querySelector('#kerulet').innerHTML = '<span style="color:red">' + K + '</span>';
}

function terulet() {

}