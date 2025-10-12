document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});


//Texto a escribir
const textToType = "Soy Ingeniero de Sistemas...";
const typedTextElement = document.getElementById('typed-text');
const cursor = document.getElementById('cursor');

const typingSpeed = 100; //Velocidad de escritura
const deletingSpeed = 50;  //Velocidad de borrado
const delayBeforeDelete = 2000; //Segundos de pausa antes de borrar

let charIndex = 0;

//Gestiona el ciclo
function loopWriter() {
    // Asegura que el cursor parpadee
    if (cursor) {
        cursor.classList.remove('hidden');
    }
    typeWriter();
}

//Escribir letra por letra
function typeWriter() {
    if (charIndex < textToType.length) {
        typedTextElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        //Borra
        setTimeout(deleteWriter, delayBeforeDelete);
    }
}

//Para borrar el texto letra por letra
function deleteWriter() {
    if (charIndex > 0) {
        //Borra la ultima letra
        typedTextElement.textContent = textToType.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteWriter, deletingSpeed);
    } else {
        //Repite
        setTimeout(typeWriter, typingSpeed);
    }
}

//Inicia el ciclo cuando la página carga
document.addEventListener('DOMContentLoaded', loopWriter);

//Año para footer
document.getElementById('current-year').textContent = new Date().getFullYear();