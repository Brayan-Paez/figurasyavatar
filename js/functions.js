function circulo(){
    var figura = document.getElementById("figura");
    /*CREAMOS LA VARIABLE FIGURA PARA CAPTURAR EL ELEMENTO CON LA FUNCION "getElementById" */
    figura.classList.toggle("circulo") /*Toggle sirve para alterar o trasformar un clase en este caso figura*/

}

function rombo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("rombo")
}

function rectanguloh(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("rectanguloh")
}

function rectangulov(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("rectangulov")
}

function arriba(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("arriba")
}

function abajo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("abajo")
}

function izquierda(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("izquierda")
}

function derecha(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("derecha")
}

function diagonal(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("diagonal")
}

function triangulo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("triangulo")
}

function imagen(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("imagen")
}
function circulo1(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("circulo1")
}
function semicirculo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("semicirculo")
}
function paralelogramo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("paralelogramo")
}
function sombreado(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("sombreado")
}
function trapecio(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("trapecio")
}





//Capturar Datos

function capturarDatos(){

    //capturamos los valores de cada campo del formulario
    var nombres = document.getElementById("nombres").value;
    var edad = document.getElementById("edad").value;
    var fecha = document.getElementById("fecha").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var descripcion = document.getElementById("descripcion").value;
    var color = document.getElementById("color").value;

    //capturamos los elementos a los cuales les asignamos los valores

    var mFoto = document.getElementById("mFoto");
    var mNombres = document.getElementById("mNombres");
    var mEdad = document.getElementById("mEdad");
    var mFecha = document.getElementById("mFecha");
    var mGenero = document.getElementById("mGenero");
    var mEmail = document.getElementById("mEmail");
    var mDescripcion = document.getElementById("mDescripcion");

    var contAvatar = document.getElementById("contAvatar");

    mNombres.textContent = nombres;
    mEdad.textContent = edad;
    mFecha.textContent = fecha;
    mGenero.textContent = genero;
    mEmail.textContent = email;
    mDescripcion.textContent = descripcion;

    if (genero == "masculino"){
        mFoto.src="img/man.png";
    }else if(genero == "femenino"){
        mFoto.src="img/woman.png";
    }else{
        mFoto.src="img/plant.png";
    }



switch (color){
    case "Morado":
        var contenedor = document.getElementById("contAvatar");
        contenedor.classList.add("Morado");
        break;
    case "Amarillo":
        var contenedor = document.getElementById("contAvatar");
        contenedor.classList.add("Amarillo");
        break;
    case "Azul":
        var contenedor = document.getElementById("contAvatar");
        contenedor.classList.add("Azul");
        break;
    case "Verde":
        var contenedor = document.getElementById("contAvatar");
        contenedor.classList.add("Verde");
    break;
    case "Rojo":
        var contenedor = document.getElementById("contAvatar");
        contenedor.classList.add("Rojo");
        break;
  
    }


}

/*5 EJERCICIOS EN JAVASCRIPT*/ 
function myFunction() {
    var w = window.open();
    w.document.open();
    w.document.write("<h2>HOLA MUNDO SOY BRAYAN</h2>");
    w.document.close();
  }