function showThanks() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('thanks').style.display = 'block';
}

function moveButton(button) {
    button.style.position = 'absolute';
    button.style.top = Math.random() * window.innerHeight + 'px';
    button.style.left = Math.random() * window.innerWidth + 'px';
}
