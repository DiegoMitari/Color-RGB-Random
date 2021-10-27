// esta funcion sirve para obtener un valor aleatorio para el color RGB
function rgbRandom() {
    const rgb1 = (Math.random()*255).toFixed(0);
    const rgb2 = (Math.random()*255).toFixed(0);
    const rgb3 = (Math.random()*255).toFixed(0);

    const rgb = `rgb(${rgb1},${rgb2},${rgb3})`;
    return rgb;
    console.log(rgb);
}

// usamos Jquery para acceder al evento click y modificar propiedades CSS y  el texto HTML

$('button').click(function () {
    $('body').css('background-color', rgbRandom());
    $('.color').html(rgbRandom());
});