const datos = [
  { nombre: "Capuchino ", categoria: "Bebida Caliente", precio: 67, ventas: 100 },
  { nombre: "Frappe", categoria: "Bebida Fría", precio: 60, ventas: 50 },
  { nombre: "Cheesecake", categoria: "Postre", precio: 33, ventas: 30 },
  { nombre: "Brownie", categoria: "Postre", precio: 50, ventas: 80 },
  { nombre: "chispitas", categoria: "Adicional", precio: 15, ventas: 120 }
];                                                                                                                                                          
const filtrados = datos.filter(item => item.categoria === "Postre");

const total = datos.reduce((totalVentas, item) => totalVentas + item.ventas, 0);

const promedio = total / datos.length;

const ordenados = datos.sort((a, b) => b.precio - a.precio);

function imprimir(){
  console.log("filtrados (postres):", filtrados, " total (ventas):", total, " promedio:", promedio, " ordenados (mayor a menor):", ordenados );
}
