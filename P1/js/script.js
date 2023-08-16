//Boton Calcular y Menu Desplegable
function calcular(){
    let x = parseFloat(document.getElementById("num1").value);
    let y = parseFloat(document.getElementById("num2").value);
    let menu = document.getElementById("menu").value; 
    let resultado;

    //Resoluciones del Menu
    switch(menu){
        case "Suma":
            resultado = document.getElementById("result").innerHTML = x+y;
            break;
        case "Resta":
            resultado = document.getElementById("result").innerHTML = x-y;
            break;
        case "Multiplicacion":
            resultado = document.getElementById("result").innerHTML = x*y;
            break;
        case "Division":
            resultado = document.getElementById("result").innerHTML = Math.floor(x/y);
            if (y == 0){
                alert("La operación que se desea realizar no es válida, ingrese otro valor para realizar la división a continuación");
                document.getElementById("result").innerHTML = "ERROR";
            }
            break;
        default:
            alert("No es posible proseguir, elija una operación a continuación");
            break;
    }
    
    

    //Validacion de Datos
    let numPatron = /^\d+$/;
    if(!numPatron.test(x)&& !numPatron.test(y)){
        alert("Se ha detectado un caracter inválido o casillas sin completar, intente nuevamente colocando valores únicamente numéricos");
        document.getElementById("result").innerHTML = "ERROR";
    } if (!numPatron.test(x) || !numPatron.test(y)){
        alert("Se ha detectado un caracter inválido o casillas sin completar, intente nuevamente colocando valores únicamente numéricos");
        document.getElementById("result").innerHTML = "ERROR";
    }

    //Tamaño Resultados
    if (resultado <1){
        alert("Lo lamentamos, debido a lo extenso del resultado, no puede ser mostrado en la interfaz");
        document.getElementById("result").innerHTML = "";
    } if (resultado > 100000){
        alert("Lo lamentamos, debido a lo extenso del resultado, no puede ser mostrado en la interfaz");
        document.getElementById("result").innerHTML = "";
    } 

}

//Boton Reset
function borrar(){
    let borrar = document.getElementById("campos").reset();
}
