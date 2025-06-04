const clouds = document.getElementById("clouds");
const rain = document.getElementById("rain");
const lightning = document.getElementById("lightning");
const sky = document.getElementById("sky");

const lluviaSound = document.getElementById("lluvia");
const truenoSound = document.getElementById("trueno");
const truenoExtra = document.getElementById("truenoExtra");


// Función para iniciar la tormenta cuando el usuario mueve el mouse
function iniciarTormenta() {
  document.removeEventListener("mousemove", iniciarTormenta);

  const zonaFalsa = document.getElementById("zona-falsa");
  if (zonaFalsa) {
    zonaFalsa.style.display = "none"; // Desaparece la zona falsa al iniciar tormenta
  }


  // Retrasar el inicio completo 1 segundo
  setTimeout(() => {
    // Reproducir video
    clouds.play().catch(error => {
      console.error('Error al intentar reproducir el video:', error);
    });

    // Aparece el video 
    clouds.style.opacity = 1;



    // Empieza la lluvia después de 6 segundos desde el inicio (total 7s)
    setTimeout(() => {
      rain.style.opacity = 0.5;
      lluviaSound.play();
    }, 4100);

    // Relámpagos y truenos desde 10 segundos del inicio (total 11s)
    setTimeout(() => {
      setInterval(() => {
        // Relámpago visual
        lightning.style.opacity = 1;
        setTimeout(() => {
          lightning.style.opacity = 0;
        }, 100);

        // Sonido principal de trueno
        truenoExtra.play();

        // Trueno extra aleatorio (30% de probabilidad)
        if (Math.random() < 0.3) {
          truenoSound.play();
        }

      }, 5000);
    }, 5000);

    // Mostrar objetos interactivos tras la tormenta
    setTimeout(() => {
      document.querySelectorAll('.objeto-interactivo').forEach(obj => {
        obj.style.opacity = 1;
        obj.style.pointerEvents = "auto"; // ✅ Ahora sí pueden recibir clics
      });
    }, 6000); // aparecen 6 segundos después del inicio


  }, 1000); // ⏱️ Espera 1 segundo tras el movimiento del mouse
}


// Esperar movimiento del mouse como "interacción del usuario"
document.addEventListener("click", iniciarTormenta);
