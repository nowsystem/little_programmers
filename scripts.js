// Funciones matemáticas
function realizarOperaciones() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    
    const resultados = document.getElementById('resultados-matematicos');
    resultados.innerHTML = `
        <div class="resultado">Suma: ${num1 + num2}</div>
        <div class="resultado">Resta: ${num1 - num2}</div>
        <div class="resultado">Multiplicación: ${num1 * num2}</div>
        <div class="resultado">División: ${(num2 !== 0 ? num1 / num2 : 'Error')}</div>
    `;
}

function manipularCadena() {
    const texto = document.getElementById('texto').value;
    
    // Eliminar espacios en blanco y contar caracteres válidos
    const textoLimpio = texto.replace(/ /g, '');
    const palabras = texto.split(' ').filter(word => word !== '');
    
    const resultados = document.getElementById('resultados-cadenas');
    resultados.innerHTML = `
        <div class="resultado">Mayúsculas: ${texto.toUpperCase()}</div>
        <div class="resultado">Longitud (sin espacios): ${textoLimpio.length}</div>
        <div class="resultado">Invertido: ${texto.split('').reverse().join('')}</div>
        <div class="resultado">Palabras: ${palabras.length}</div>
    `;
}

// Quiz interactivo
function verificarRespuesta(respuestaUsuario) {
    const respuestaCorrecta = true;
    const resultadoQuiz = document.getElementById('resultado-quiz');
    
    if(respuestaUsuario === respuestaCorrecta) {
        resultadoQuiz.textContent = "✅ ¡Correcto! JavaScript es un lenguaje de programación";
        resultadoQuiz.style.color = "green";
    } else {
        resultadoQuiz.textContent = "❌ Incorrecto, JavaScript es un lenguaje de programación";
        resultadoQuiz.style.color = "red";
    }
}

// Modo oscuro opcional
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    // Aquí podrías agregar más lógica para cambiar colores
}