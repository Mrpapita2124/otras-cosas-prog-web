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
  if(isNaN(imc)||imc<=0){
    console.log("Introduce un numero valido")
  }else{
    if (imc<18.5){
      return "Bajo peso";
    }else if (imc<25){
      return "Peso normal";
    }else if (imc<30){
      return "Sobrepeso";
    }else if (imc>=30){
      return "Obesidad";
    }
  }

}

