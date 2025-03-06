
//Listado de animes

const animes = [
    { id: 1, nombre: "Attack on Titan", tipo: "Serie de TV", temporadas: 4, capitulos: 87, lanzamiento: 2013, ultimaTemporada: 2023, imagen: "images/attackOnTitan.jpg" },
    { id: 2, nombre: "Death Note", tipo: "Serie de TV", temporadas: 1, capitulos: 37, lanzamiento: 2006, ultimaTemporada: 2007, imagen: "images/deathNote.jpg" },
    { id: 3, nombre: "Sword Art Online", tipo: "Serie de TV", temporadas: 4, capitulos: 96, lanzamiento: 2012, ultimaTemporada: 2020, imagen: "images/swordArtOnline.jpg" },
    { id: 4, nombre: "My Hero Academia", tipo: "Serie de TV", temporadas: 6, capitulos: 113, lanzamiento: 2016, ultimaTemporada: 2022, imagen: "images/myHeroAcademia.jpg" },
    { id: 5, nombre: "Demon Slayer", tipo: "Serie de TV", temporadas: 2, capitulos: 44, lanzamiento: 2019, ultimaTemporada: 2021, imagen: "images/demonSlayer.jpg" },
    { id: 6, nombre: "One Piece", tipo: "Serie de TV", temporadas: 20, capitulos: 1000, lanzamiento: 1999, ultimaTemporada: "En emisión", imagen: "images/onePiece.jpg" },
    { id: 7, nombre: "Naruto", tipo: "Serie de TV", temporadas: 2, capitulos: 720, lanzamiento: 2002, ultimaTemporada: 2017, imagen: "images/Naruto.jpg" },
    { id: 8, nombre: "Fullmetal Alchemist: Brotherhood", tipo: "Serie de TV", temporadas: 1, capitulos: 64, lanzamiento: 2009, ultimaTemporada: 2010, imagen: "images/fullmetalAlchemistBrotherhood.jpg" },
    { id: 9, nombre: "Cowboy Bebop", tipo: "Serie de TV", temporadas: 1, capitulos: 26, lanzamiento: 1998, ultimaTemporada: 1999, imagen: "images/cowboyBebop.jpg" },
    { id: 10, nombre: "Neon Genesis Evangelion", tipo: "Serie de TV", temporadas: 1, capitulos: 26, lanzamiento: 1995, ultimaTemporada: 1996, imagen: "images/neonGenesisEvangelion.jpg" },
    { id: 11, nombre: "Steins Gate", tipo: "Serie de TV", temporadas: 1, capitulos: 24, lanzamiento: 2011, ultimaTemporada: 2011, imagen: "images/steinsGate.jpg" },
    { id: 12, nombre: "Tokyo Ghoul", tipo: "Serie de TV", temporadas: 2, capitulos: 24, lanzamiento: 2014, ultimaTemporada: 2015, imagen: "images/tokyoGhoul.jpg" },
    { id: 13, nombre: "Hunter x Hunter", tipo: "Serie de TV", temporadas: 1, capitulos: 148, lanzamiento: 2011, ultimaTemporada: 2014, imagen: "images/hunterXHunter.jpg" },
    { id: 14, nombre: "One Punch Man", tipo: "Serie de TV", temporadas: 2, capitulos: 24, lanzamiento: 2015, ultimaTemporada: 2019, imagen: "images/onePunchMan.jpg" },
    { id: 15, nombre: "Bleach", tipo: "Serie de TV", temporadas: 16, capitulos: 366, lanzamiento: 2004, ultimaTemporada: 2012, imagen: "images/bleach.png" },
    { id: 16, nombre: "Fairy Tail", tipo: "Serie de TV", temporadas: 9, capitulos: 328, lanzamiento: 2009, ultimaTemporada: 2019, imagen: "images/fairyTail.jpg" },
    { id: 17, nombre: "Dragon Ball Z", tipo: "Serie de TV", temporadas: 1, capitulos: 291, lanzamiento: 1989, ultimaTemporada: 1996, imagen: "images/dragonBallZ.png" },
    { id: 18, nombre: "Code Geass", tipo: "Serie de TV", temporadas: 2, capitulos: 50, lanzamiento: 2006, ultimaTemporada: 2008, imagen: "images/codeGeass.png" },
    { id: 19, nombre: "Black Clover", tipo: "Serie de TV", temporadas: 1, capitulos: 170, lanzamiento: 2017, ultimaTemporada: 2021, imagen: "images/blackClover.png" },
    { id: 20, nombre: "JoJo's Bizarre Adventure", tipo: "Serie de TV", temporadas: 5, capitulos: 152, lanzamiento: 2012, ultimaTemporada: 2021, imagen: "images/joJo'sBizarreAdventure.jpg" }
];


//Reconocer en que pagina esta el usuario 
const isHomePage = document.getElementById("animeCard") !== null;
const isFavoritesPage = document.getElementById("favoriteList") !== null;


// Crear las cards
const animeCard = document.getElementById("animeCard")

if (isHomePage) {
    crearCards();
}

function crearCards() {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    animes.forEach(anime => {
        const item = document.createElement('div');
        item.classList.add('animeCard');

        // Si el anime ya está en favoritos, le agregamos la clase "favorito"
        if (favoritos.some(fav => fav.id === anime.id)) {
            item.classList.add("favorito");
        }

        item.innerHTML = `
            <h3>${anime.nombre}</h3>
            <img src="${anime.imagen}" alt="Imagen de ${anime.nombre} "class="card-img-top""
            <p>Es una ${anime.tipo} que tiene ${anime.temporadas} temporadas con un total de ${anime.capitulos} capítulos, se estrenó en el año ${anime.lanzamiento}</p>
            <button class="marcarAnime"> Marcar anime </button>    
        `;

        item.querySelector(".marcarAnime").addEventListener("click", () => {
            agregarAFAvoritos(anime.id);
            item.classList.add("favorito");
        });

        document.getElementById("animeCard").appendChild(item);
    });
}





// Crear el evento para marcar el anime y sumarlo a la lista de favoritos 
const favoritos = document.getElementById('favoriteList');
const botonAgregar = document.getElementById('marcarAnime');

function agregarAFAvoritos(id) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    let anime = animes.find(a => a.id === id);

    if (!favoritos.some(fav => fav.id === id)) {
        favoritos.push(anime);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        Swal.fire({
            position: "top-end",
            icon: "success",
            theme: "dark",
            title: "Anime agregado a favoritos",
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        Swal.fire({
            position: "top-end",
            icon: "info",
            title: "Este anime ya se encuentra en favoritos",
            theme: "dark",
            showConfirmButton: false,
            timer: 1500
        });
    }
}



if (isFavoritesPage) {
    mostrarAnimesFavoritos();
}

function mostrarAnimesFavoritos() {
    let lista = document.getElementById("favoriteList");
    lista.innerHTML = "";
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (favoritos.length === 0) {
        lista.innerHTML = "<h2>No tienes animes en favoritos</h2>";
        return;
    }

    favoritos.forEach(anime => {
        let item = document.createElement("div");
        item.classList.add("animeCard");

        item.innerHTML = `
            <h3>${anime.nombre}</h3>
            <img src="../${anime.imagen}" alt="Imagen de ${anime.nombre}" "class="card-img-top"">
            <p>${anime.tipo} - ${anime.temporadas} temporadas - ${anime.capitulos} capítulos</p>
            <button class="eliminarAnime">Eliminar</button>
        `;

        item.querySelector(".eliminarAnime").addEventListener("click", () => {
            eliminarDeFavoritos(anime.id);
        });

        lista.appendChild(item);
    });
}

//Crear funcion para eliminar anime de favoritos 
function eliminarDeFavoritos(id) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos = favoritos.filter(anime => anime.id !== id);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "El anime fue eliminado de favoritos",
        theme: "dark",
        showConfirmButton: false,
        timer: 1500
    });
    mostrarAnimesFavoritos();
}







