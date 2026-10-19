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