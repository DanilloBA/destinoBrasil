function cambiarImagen() {
    const imagen = document.getElementById('miRio');
    imagen.src = 'asset/amazonia.png';
};

function cambiarImagen2() {
    const imagen= document.getElementById('miRio');
    imagen.src = 'asset/logo rio de janeiro.png';
}; 

function cambiarImagen3() {
    const imagen = document.getElementById('miRio');
    imagen.src = 'asset/alagoas-logo.png';
};

function cambiarImagen4() {
    const imagen = document.getElementById('miRio');
    imagen.src = 'asset/ceara logo.png';
};




function cambiarFondo(nuevaImagen) {
    document.body.style.backgroundImage = `url('${nuevaImagen}')`;
 
   
};



function cambiarFondo1(nuevaImagen1) {
    document.body.style.backgroundImage = `url('${nuevaImagen1}')`;

       
       
       
       
};
   



function cambiarFondo2(nuevaImagen2) {
    document.body.style.backgroundImage = `url('${nuevaImagen2}')`;
};

function cambiarFondo3(nuevaImagen3) {
    document.body.style.backgroundImage = `url('${nuevaImagen3}')`;
};


//aparecer la imagen de lo card
function CargaFoto() {
    const Imagen = document.getElementById('miImagen');
    Imagen.style.display = 'block';

    const ocultar = document.getElementById('ocultar');
    ocultar.style.display = 'none';
}



function CargaFoto1() {
    const Imagen = document.getElementById('miImagen1');
    Imagen.style.display = 'block';

    const ocultar = document.getElementById('ocultar1');
    ocultar.style.display = 'none';
}



function CargaFoto2() {
    const Imagen = document.getElementById('miImagen2');
    Imagen.style.display = 'block';

    const ocultar = document.getElementById('ocultar2');
    ocultar.style.display = 'none';
}



