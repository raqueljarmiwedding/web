// ===== SISTEMA DE LOGIN =====
const CONTRASEÑA_CORRECTA = 'boda2026'; // Cambiar esta contraseña según necesites

// Contador boda
const weddingDate = new Date('2026-09-12T12:00:00');

function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;
    if (diff <= 0) {
        document.getElementById('cdTotal').innerHTML = '¡Hoy es el gran día! 🥂';
        return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    document.getElementById('cdDays').textContent = String(days).padStart(2, '0');
    document.getElementById('cdHours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cdMinutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('cdSeconds').textContent = String(seconds).padStart(2, '0');
    document.getElementById('cdTotal').innerHTML =
        `Faltan <span>${days}</span> días para el momento más bonito`;
}

// Verificar si el usuario ya ha ingresado la contraseña
window.addEventListener('load', function() {
    const accesoOtorgado = sessionStorage.getItem('accesoOtorgado');
    if (accesoOtorgado === 'true') {
        mostrarContenidoPrincipal();
    }
});

// Manejar el envío del formulario de login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const passwordInput = document.getElementById('password').value;
    const loginError = document.getElementById('loginError');
    
    if (passwordInput === CONTRASEÑA_CORRECTA) {
        // Guardar que el usuario ha accedido correctamente
        sessionStorage.setItem('accesoOtorgado', 'true');
        loginError.style.display = 'none';
        mostrarContenidoPrincipal();
    } else {
        // Mostrar error
        loginError.style.display = 'block';
        document.getElementById('password').value = '';
        document.getElementById('password').focus();
    }
});

function mostrarContenidoPrincipal() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ===== CONFIGURACIÓN DE GOOGLE FORMS =====
// Form ID obtenido del enlace del formulario
const GOOGLE_FORM_ID = '1FAIpQLScoOEXsAhMu_zmmbBm-fc_lzsRYDrcNnFZgBwoxPJO7Q66d3g';

// Mapeo de nombres de campos de Google Forms
// IDs obtenidos del payload del formulario
const FORM_FIELDS = {
    asistencia: '1291076552',
    nombres: '2086544460',
    alergias: '203052907',
    bus: '1751349236',
    cancion: '1983345768',
};

// ===== FUNCIONALIDAD ORIGINAL =====
// Mostrar/ocultar campos de asistentes según respuesta
function toggleAsistentesCampos() {
    const asistencia = document.getElementById('asistencia').value;
    const asistentesSection = document.getElementById('asistentesSection');
    
    if (asistencia === 'Sí, confirmo mi asistencia') {
        asistentesSection.style.display = 'block';
    } else {
        asistentesSection.style.display = 'none';
    }
}

// Manejo del formulario RSVP con Google Forms
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    console.log('📋 FORMULARIO RSVP ENVIADO');
    
    // Obtener valores del formulario
    const asistencia = document.getElementById('asistencia').value;
    const nombres = document.getElementById('nombres').value || '';
    const alergias = document.getElementById('alergias').value || '';
    const bus = document.getElementById('bus').value || '';
    const cancion = document.getElementById('cancion').value || '';
    
    console.log('📊 Datos recopilados del formulario:');
    console.log({asistencia, nombres, alergias, bus, cancion});
    
    // Crear objeto con los datos
    const confirmacion = {
        asistencia,
        nombres,
        alergias,
        bus,
        cancion,
        fecha: new Date().toLocaleString('es-ES')
    };
    
    // Guardar en localStorage también
    console.log('💾 Guardando en localStorage...');
    let confirmaciones = JSON.parse(localStorage.getItem('bodaConfirmaciones')) || [];
    confirmaciones.push(confirmacion);
    localStorage.setItem('bodaConfirmaciones', JSON.stringify(confirmaciones));
    console.log('✓ Confirmación guardada en localStorage');
    
    // Enviar a Google Forms
    console.log('🌐 Enviando a Google Forms...');
    enviarAGoogleForms(confirmacion);
    
    // Mostrar mensaje de éxito brevemente (2 segundos)
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    console.log('✅ Mensaje de éxito mostrado');
    
    // Resetear formulario
    document.getElementById('rsvpForm').reset();
    document.getElementById('asistentesSection').style.display = 'none';
    
    // El mensaje desaparece automáticamente cuando la página redirige a Google Forms
    // Mantener el timeout por si acaso, pero será rápido
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
    
    console.log('✨ PROCESO COMPLETADO');
});

// Función para enviar datos a Google Forms usando formulario oculto
function enviarAGoogleForms(datos) {
    console.log('🚀 INICIANDO ENVÍO A GOOGLE FORMS');
    console.log('Form ID:', GOOGLE_FORM_ID);
    
    console.log('📝 Rellenando formulario oculto con datos:');
    
    // Rellenar el formulario oculto con los valores
    document.getElementById('hiddenAsistencia').value = datos.asistencia;
    console.log(`  ✓ asistencia: "${datos.asistencia}"`);
    
    document.getElementById('hiddenNombres').value = datos.nombres;
    console.log(`  ✓ nombres: "${datos.nombres}"`);
    
    document.getElementById('hiddenAlergias').value = datos.alergias;
    console.log(`  ✓ alergias: "${datos.alergias}"`);
    
    document.getElementById('hiddenBus').value = datos.bus;
    console.log(`  ✓ bus: "${datos.bus}"`);
    
    document.getElementById('hiddenCancion').value = datos.cancion;
    console.log(`  ✓ cancion: "${datos.cancion}"`);
    
    // Log de envío
    console.log('🔗 URL de destino:', 'https://docs.google.com/forms/d/e/' + GOOGLE_FORM_ID + '/formResponse');
    console.log('📤 Enviando formulario oculto...');
    
    // Enviar el formulario oculto (método POST directo a Google Forms)
    document.getElementById('hiddenGoogleForm').submit();
    
    console.log('✅ Formulario enviado a Google Forms');
    console.log('✨ ¡LOS DATOS DEBERÍAN ESTAR GUARDADOS EN GOOGLE FORMS!');
    console.log('💡 La respuesta debería aparecer inmediatamente en tu Google Forms');
}

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Agregar efectos de carga
window.addEventListener('load', function() {
    console.log('🎉 Bienvenido a nuestra página de boda');
});

// Función para expandir galería (futura implementación)
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function() {
        console.log('Imagen clickeada:', this.alt);
        // Aquí se puede agregar un lightbox o modal
    });
});
