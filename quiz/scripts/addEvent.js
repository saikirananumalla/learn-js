window.onload = function() {
    let x = document.getElementById('myBtn');
    x.addEventListener('mouseover', myFunction('Moused over!'));
    x.addEventListener('click', () => {
        mySecFunction("Clicked!");
    });
    x.addEventListener('mouseout', myFunction('Moused out!'));
}

function myFunction(msg) {
    return () => document.getElementById('demo').textContent = msg;
}

function mySecFunction(msg) {
    document.getElementById('demo').textContent = msg;
}
