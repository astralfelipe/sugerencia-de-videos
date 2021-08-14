let iifeGlobal = (() => {

    function inyectarUrl(url, id) {
        var iframe = document.getElementById(id);
        iframe.setAttribute('src', `${url}`);
    }

    return {
        iframe: function(url, id) {
            inyectarUrl(url, id)
        }
    }
})();

// iifeGlobal.iframe();

//Clase Multimedia
class Multimedia {
    constructor(url) {
        this._url = () => url;
    }

    get url() {
        return this._url();
    }

    setInicio() {
        return 'Este método es para realizar el cambio en la url del video';
    }

}



//Clase Reproductor
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        this._id = () => id;
    }

    get id() {
        return this._id();
    }

    playMultimedia() {
        iifeGlobal.iframe(this.url, this.id);
    }

    setInicio(tiempo) {
        var urlTiempo = `${this.url}?start=${tiempo}`;
        iifeGlobal.iframe(urlTiempo, this.id);
    }

}


//Creando variables para inyectar en html
var reproduce1 = new Reproductor('https://www.youtube.com/embed/4mKXJqWHy9o', 'frameMusica');
var reproduce2 = new Reproductor('https://www.youtube.com/embed/NZg3EzO5Av4', 'framePelicula');
var reproduce3 = new Reproductor('https://www.youtube.com/embed/L7iWXfZzEMc', 'frameSerie');



//Instanciando métodos para reproducir y manipular el tiempo de inicio
reproduce1.playMultimedia();
reproduce1.setInicio(20);
// 20 = 20 segundos (no milisegundos en YouTube)

reproduce2.playMultimedia();
reproduce2.setInicio(30);

reproduce3.playMultimedia();
reproduce3.setInicio(40);