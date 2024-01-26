function moveNoButton() {
    var noButton = document.getElementById('noButton');
    
    // Obtén el ancho y alto del botón
    var buttonWidth = noButton.clientWidth;
    var buttonHeight = noButton.clientHeight;
    
    // Calcula una posición aleatoria dentro de los márgenes de la pantalla
    var maxX = window.innerWidth - buttonWidth;
    var maxY = window.innerHeight - buttonHeight;
    
    var randomX = Math.random() * maxX;
    var randomY = Math.random() * maxY;
    
    // Establece la posición del botón
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}
function nextPage() {
    window.location.href = "yes.html";
}

