let nombre = prompt('Ingrese su nombre ');
alert('Hola ' + nombre.toUpperCase() + ' bienvenido a Ginebra muebles');



function silla(){
    let cantidad = parseInt(prompt('Ingrese la cantidad de sillas '));
    let total = cantidad * 1500; //
    return total; 
}
function sillon(){
    let cantidad = parseInt(prompt('Ingrese la cantidad de sillones '));
    let total = cantidad * 7000; //
    return total; 
}
function mesa(){
    let cantidad = parseInt(prompt('Ingrese la cantidad de mesas '));
    let total = cantidad * 8000; //
    return total; 
}
function armario(){
    let cantidad = parseInt(prompt('Ingrese la cantidad de armarios '));
    let total = cantidad * 10000; //
    return total; 
}

//----------------------------------------------------------------
function mostrarPrecio(total){ //muestra el total de precio
    alert(nombre + ' el total de tu cuenta es : $'+ total);
}

function mostrarMenu(menu){ // muestra el menú
    let opcion = prompt('Que mueble deseas comprar. (ESC) para salir \n 1. Silla \n 2. Sillon \n 3. Mesa \n 4. Armario');
    return opcion;
}
//----------------------------------------------------------------

function muebles(){
    let selecionaOpcion = mostrarMenu();
    while(selecionaOpcion !== 'ESC'){
        if(!isNaN(selecionaOpcion !== '')){
            
            selecionaOpcion = parseInt(selecionaOpcion);
            
            switch(selecionaOpcion){
                case 1:
                    let totalSillas = silla();
                    mostrarPrecio(totalSillas);
                    break;
                case 2:
                    let totalSillon = sillon();
                    mostrarPrecio(totalSillon);
                    break;
                case 3:
                    let totalMesa = mesa();
                    mostrarPrecio(totalMesa);
                    break;
                case 4:
                    let totalArmario = armario();
                    mostrarPrecio(totalArmario);
                    break;
                default:
                    alert('Opción no válida');
                    break;
        }
    }else{
        alert('Seleccione una opción válida');
    }
    selecionaOpcion = mostrarMenu();
    }
}
muebles();