var contador = 0
while(contador < 10) {
    console.log("contador:" + contador)
    contador = contador + 1
}

while(contador < 10) {
    console.log(contador + '' + contador + contador)
    contador = contador + contador
}

for (var contador = 0; contador < 10; contador++) {
    console.log(contador)
}