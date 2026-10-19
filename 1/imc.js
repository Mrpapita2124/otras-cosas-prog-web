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

