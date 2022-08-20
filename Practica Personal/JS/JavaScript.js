let img1 = getElementById("img1");
let img2 = getElementById("img2");
let cambioImagen = getElementById("cambio");
let pequeño = true;



function expandir1(){
    if (pequeño == true) {
        cambioImagen.textContent = "Expandir Imagen";        
        img1.style.width = "700px";
        img1.style.height ="500px";
        img1.style.display = "center";
        pequeño = false;
        
    } else {
        cambioImagen.textContent = "Minimizar Imagen";
        img1.style.width = "400px";
        img1.style.height = "200px";
        img1.style.float = "right";
        pequeño = true;
        
    }
}

function expandir2(){
    if (pequeño == true) {
        img2.style.width = "700px";
        img2.style.height = "500px";
        pequeño = false;
    } else {
        img2.style.width = "400px";
        img2.style.height = "200px";
        img2.style.float = "left";
        pequeño = true;
   }
    
}