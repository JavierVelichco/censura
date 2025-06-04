const todosLosTerminos = [
    { titulo: "Winnie the Pooh", chino: "小熊维尼", descripcion: "Los internautas chinos utilizan imágenes de Winnie Pooh para representar al presidente Xi Jinping." },
    { titulo: "Baozi", chino: "包子", descripcion: "“Dumpling”, que significa “empanada de masa hervida”, es uno de los apodos de Xi Jinping en línea." },
    { titulo: "Dalai Lama", chino: "达赖喇嘛", descripcion: "El líder tibetano en el exilio. Un símbolo de la independencia tibetana." },
    { titulo: "Independencia de Tíbet", chino: "西藏独立", descripcion: "Está prohibido hablar sobre la independencia de Tíbet." },
    { titulo: "Chistes sobre los soviéticos", chino: "苏联笑话", descripcion: "Reírse de la Unión Soviética se considera reírse del comunismo." },
    { titulo: "Ánimo, Hong Kong", chino: "香港加油", descripcion: "Apoyar las protestas en favor de la democracia en Hong Kong está prohibido." },
    { titulo: "709", chino: "709律师", descripcion: "Un grupo de activistas de derechos humanos y abogados arrestados el 9 de julio (9/7) de 2015." },
    { titulo: "Liu Xiaobo", chino: "刘晓波", descripcion: "Activista de derechos humanos encarcelado por China, galardonado con el premio Nobel de la Paz." },
    { titulo: "Gran Muralla de Internet de China", chino: "伟大的防火墙", descripcion: "Hablar sobre la censura china está censurado en sí mismo." },
    { titulo: "Dictadura", chino: "专政", descripcion: "Está prohibido insinuar que China es una dictadura." },
    { titulo: "Tiananmen", chino: "天安门", descripcion: "Cualquier referencia a las manifestaciones de 1989 por la democracia que terminaron en un baño de sangre." },
    { titulo: "4 de junio", chino: "六四", descripcion: "La fecha de las protestas de 1989 en la plaza de Tiananmen." },
    { titulo: "Zhao Ziyang", chino: "赵紫阳", descripcion: "Exsecretario general del Partido Comunista Chino que apoyó las manifestaciones de 1989 en la plaza de Tiananmen." },
    { titulo: "El hombre del tanque", chino: "坦克人", descripcion: "La famosa imagen de un hombre chino no identificado que se paró frente a una columna de tanques en la plaza de Tiananmen en 1989." }
];

// Links disponibles para asignar (9)
const linksDisponibles = [
    '../censuras/lindotormenta.html',
    '../censuras/ysiestasemana.html',
    '../censuras/libertdexpresion.html',
    '../censuras/imagenescensuradas.html',
    '../censuras/videocensura.html',
    '../censuras/carousel.html',
    '../censuras/denunciavideo.html',
    '../censuras/llueve.html'
];

// Función para mezclar un array
function mezclarArray(arr) {
    const copia = [...arr];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

// Obtener 9 términos aleatorios
function obtenerTerminosAleatorios(cantidad) {
    const copia = [...todosLosTerminos];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia.slice(0, cantidad);
}

const contenedor = document.getElementById('contenedor-terminos');
const seleccion = obtenerTerminosAleatorios(7);

// Mezclamos links para asignar aleatoriamente
const linksMezclados = mezclarArray(linksDisponibles);

// Creamos los contenedores sin link inicialmente
seleccion.forEach((termino, index) => {
    const div = document.createElement('div');
    div.className = 'term';
    div.setAttribute('data-link', linksMezclados[index]); // guardamos link para usar luego
    div.innerHTML = `
        <h2>${termino.titulo} <span class="chino">(${termino.chino})</span></h2>
        <p>${termino.descripcion}</p>
        <div class="overlaychina">Contenido censurado</div>
    `;
    contenedor.appendChild(div);
});

// Tras 5 segundos “se nubla” y activamos los links (click)
setTimeout(() => {
    const terms = document.querySelectorAll('.term');
    terms.forEach(term => {
        term.classList.add('censurado');
        const link = term.getAttribute('data-link');
        if (link) {
            term.style.cursor = 'pointer';
            term.addEventListener('click', () => {
                window.location.href = link;
            });
        }
    });
}, 2000);
