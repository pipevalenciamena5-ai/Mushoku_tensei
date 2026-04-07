// Función para manejar la selección de productos y mostrar opciones
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los botones de selección de productos
    const botonesSeleccionar = document.querySelectorAll('.seleccionar');
    
    botonesSeleccionar.forEach(boton => {
        boton.addEventListener('click', function() {
            // Mostrar la sección de opciones
            document.getElementById('opciones').style.display = 'block';
            // Ocultar otras secciones si es necesario
            document.getElementById('formulario').style.display = 'none';
        });
    });

    // Función para el botón continuar al formulario
    document.getElementById('continuar').addEventListener('click', function() {
        // Mostrar el formulario
        document.getElementById('formulario').style.display = 'block';
        // Ocultar opciones
        document.getElementById('opciones').style.display = 'none';
    });

    // Función para actualizar precio en formulario
    const tipoDijeForm = document.getElementById('tipo-dije-form');
    const precioInput = document.getElementById('precio');
    
    tipoDijeForm.addEventListener('change', function() {
        if (this.value === 'estandar') {
            precioInput.value = '$10.00';
        } else if (this.value === 'personalizado') {
            precioInput.value = '$15.00';
        }
    });

    // Función para manejar el envío del formulario
    document.getElementById('form-envio').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir envío real
        alert('Pedido enviado exitosamente!'); // Simular envío
        // Resetear formulario y ocultar secciones
        this.reset();
        precioInput.value = '$10.00'; // Reset precio
        document.getElementById('formulario').style.display = 'none';
    });
});

// Preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
});