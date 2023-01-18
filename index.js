function sumar(n1, n2){
    let resultado = n1 + n2;
    return resultado;
}

function getClick(){
    let sumando1 = new Number (document.getElementById('valor1').value);
    let sumando2 = new Number (document.getElementById('valor2').value);
    let suma = sumar(sumando1, sumando2);
    console.log(suma);
    alert('El resultado de la suma es: ' + suma);
}