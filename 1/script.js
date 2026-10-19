function calcularIMC(peso,estatura){
  if(isNaN(estatura)||estatura<=0){
    console.log("Ingresa una estatura valida");
  }else if(isNaN(peso)||peso<=0){
    console.log("Ingrese un peso valido");
  }else{
    const imc=peso/(estatura*estatura);
    console.log("IMC: " + imc + " Clasificación: " + clasificarIMC(imc));
  }
}

function clasificarIMC(imc){
  if (imc<18.5){
    return "Bajo peso";
  }else if (imc<=24.9){
    return "Peso normal";
  }else if (imc<=29.9){
    return "Sobrepeso";
  }else if (imc<=34.9){
    return "Obesidad 1";
  }else if (imc<=39.9){
    return "Obesidad 2";
  }else{
    return "Obesidad 3";
  }
}

function fizzBuzz(n){
  let multiplo3 = 0;
  let multiplo5 = 0;
  if(n==null){
    console.log("Ingrese un numero valido");
  }else if(!Number.isInteger(n)){
    console.log("Introduce un numero entero");
  }else if(n<0){
    console.log("Introduce un entero positivo");
  }else{
    for(let i=1 ; i <= n ; i++){
      multiplo3 = i%3;
      multiplo5 = i%5;
      if(multiplo3==0 && multiplo5==0){
        console.log(i+"-FizzBuzz");
      }else if(multiplo3==0){
        console.log(i+"-Fizz");
      }else if(multiplo5==0){
        console.log(i+"-Buzz");
      }
    }
  }
}