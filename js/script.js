function goToNode(nodeId) {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Limpiar contenido anterior
  
    switch (nodeId) {
      case 'silencio':
        content.innerHTML = `
          <h2>🕳️ El Silencio Visible</h2>
    <div class="video-container">
      <video width="100%" muted autoplay loop>
        <source src="Kalush.mp4" type="video/mp4">
        Tu navegador no soporta el elemento de video HTML5.
      </video>
    </div>
          <p><i>El video no tiene sonido. ¿Qué no se está diciendo?</i></p>
        `;
        break;
        case 'diario':
            content.innerHTML = `
              <h2>🧠 Lo Que No Dije</h2>
              <p>Escribe lo que piensas. Algunas palabras serán censuradas aleatoriamente.</p>
              <textarea id="userInput" rows="6" cols="60" placeholder="Escribe aquí..."></textarea>
              <p><strong>Vista censurada:</strong></p>
              <div id="filteredOutput" style="margin-top:1em; white-space:pre-wrap; background:#222; padding:1em;"></div>
            `;
          
            setTimeout(() => {
              const textarea = document.getElementById('userInput');
              const output = document.getElementById('filteredOutput');
          
              // Lista de palabras que podrían ser censuradas
              const bannedWords = ['gobierno', 'revolución', 'libertad', 'censura', 'derechos', 'poder', 'justicia', 'opresión'];
          
              // Función para censurar una de cada dos palabras
              function censorText(text) {
                // Separa el texto en palabras
                let words = text.split(/\s+/);
          
                // Recorre las palabras y censura una de cada dos
                let censoredWords = words.map((word, index) => {
                  // Censura en cada palabra con índice par (0, 2, 4, 6, …)
                  if (index % 2 === 0) {
                    return '█████';  // Censura
                  }
                  return word;  // No censura
                });
          
                // Une las palabras censuradas de nuevo en una cadena
                return censoredWords.join(' ');
              }
          
              // Añadir evento de escucha al input del usuario
              textarea.addEventListener('input', function () {
                let text = this.value;
                // Censurar el texto con la función censorText
                text = censorText(text);
                // Mostrar el texto censurado en el div
                output.innerText = text;
              });
            }, 0);
            break;

            case 'lluvia':
  content.innerHTML = `
    <h2>🌧️ La Lluvia de Censura</h2>
    <p>Los símbolos de censura caen desde arriba y se acumulan en la pantalla.</p>
    <div id="rainContainer" style="position:relative; width:100%; height: 60vh; overflow:hidden; background-color: black;">
      <!-- Aquí caerán los símbolos -->
    </div>
  `;

  setTimeout(() => {
    const rainContainer = document.getElementById('rainContainer');
    const symbols = ['█████', '❌', '✖', '🚫', '🔒', '⛔'];

    // Función para crear los símbolos de censura
    function createSymbol() {
      const symbol = document.createElement('div');
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      
      symbol.textContent = randomSymbol;
      symbol.style.position = 'absolute';
      symbol.style.fontSize = '24px';
      symbol.style.color = 'white';
      symbol.style.left = `${Math.random() * 100}%`; // Posición aleatoria en el eje X
      symbol.style.top = '-30px'; // Empieza por encima de la pantalla
      symbol.style.animation = 'fall 4s linear infinite'; // Animación de caída que se repite

      rainContainer.appendChild(symbol);

      // El símbolo no se elimina, se queda en la pantalla
    }

    // Crear un símbolo cada 100ms
    setInterval(createSymbol, 100);

    // Definir la animación de caída en CSS
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fall {
        0% {
          top: -30px;
        }
        100% {
          top: 60vh; /* Hacia abajo del 60% de la altura de la pantalla */
        }
      }
    `;
    document.head.appendChild(style);
  }, 0);
  break;


          

      case 'lenguaje':
        const poem = [
          "El lenguaje se retuerce",
          "Las sílabas se ocultan ████",
          "No hay forma de decir",
          "Lo que nunca se permitió pensar"
        ];
        const distorted = poem.map(line => {
          return line.replace(/[aeiou]/gi, char => {
            return Math.random() > 0.5 ? '_' : char;
          });
        });
        content.innerHTML = `
          <h2>🔤 Lenguaje en Ruinas</h2>
          <pre>${distorted.join('\n')}</pre>
        `;
        break;
  
      default:
        content.innerHTML = '<p>Error: nodo no encontrado.</p>';
    }
  }
  