function korKeruletTerulet() {
    r = document.querySelector('#sugar').value;
    K = 2 * r * Math.PI;
    T = r * r * Math.PI;

    document.querySelector('#terulet').innerText = T + ' cm';
    document.querySelector('#kerulet').innerHTML = '<b>' + K + '</b>';
}

function terulet() {

}