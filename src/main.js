import './style.css';
import polaRuang from "./assets/pola-ruang-street.json";

console.log("main js masuk");

mapboxgl.accessToken = 'pk.eyJ1IjoibWFuYWY5MyIsImEiOiJjazJhNXhzeHYxN25tM2JucDBmNjZlYjNmIn0.eXfSDYhY77yd0mfJmR3b9A';
    const map = new mapboxgl.Map({
        container: 'map',
        zoom: 9.4,
        center: [119.8309,-8.5952],
        pitch: 0,
        bearing: 0,
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: polaRuang
    });

    map.on('style.load', () => {
        map.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512,
            'maxzoom': 14
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
    });
  