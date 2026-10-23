const datos = [
  { nombre: "Capuchino ", categoria: "Bebida Caliente", precio: 67, ventas: 100 },
  { nombre: "Frappe", categoria: "Bebida Fría", precio: 80, ventas: 50 },
  { nombre: "Cheesecake", categoria: "Postre", precio: 45, ventas: 30 },
  { nombre: "Brownie", categoria: "Postre", precio: 20, ventas: 80 },
  { nombre: "chispitas", categoria: "Adicional", precio: 10, ventas: 120 }
];                                                                                                                                                          
const filtrados = datos.filter(({categoria}) => categoria === "Postre");

const total = datos.reduce((totalVentas, producto) => totalVentas + (producto?.ventas ?? 0), 0);

const promedio = total / datos.length;

const ordenados = [...datos].sort((a, b) => b.precio - a.precio);

function imprimirOriginal(){
  console.log(datos)
}

function imprimir(){
  console.log("filtrados (postres):", filtrados, " total (ventas):", total, " promedio:", promedio, " ordenados (mayor a menor precio):", ordenados );
}
