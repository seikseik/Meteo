import mapboxgl from '!mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import  { config } from './config.js'
import * as data from './db_classifiche_anni.json';
import scrollama from "scrollama"; // or...


// map
var initLoad = true;
var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully'
}

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function(prop) {
        var options = {};
        if (layer.duration) {
            var transitionProp = prop + "-transition";
            options = { "duration": layer.duration };
            map.setPaintProperty(layer.layer, transitionProp, options);
        }
        map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
}

var story = document.getElementById('story');
var map = document.getElementById('map');
var features = document.createElement('div');
features.setAttribute('id', 'features');

var header = document.createElement('div');
header.classList.add("heading_map");

let header_title = document.createElement('h2');
header_title.classList.add("header_title");
header_title.innerText = config.chapters[0].header_title;

map.appendChild(header);
header.appendChild(header_title);


if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}

if (config.subtitle) {
    var subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}

if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
}

config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    var chapter = document.createElement('div');


    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }

    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }

    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }

    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }

    chapter.classList.add(config.theme);

    container.appendChild(chapter);

    container.classList.add(alignments[record.alignment] || 'centered');
    if (record.hidden) {
        container.classList.add('hidden');
    }

    features.appendChild(container);
});
story.appendChild(features);


var footer = document.createElement('div');

if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

mapboxgl.accessToken = config.accessToken;


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/lucagorini/cl2iyqrtw001814rjhh32bsvg',
    accessToken: 'pk.eyJ1IjoibHVjYWdvcmluaSIsImEiOiJja28yd2tzdjQxM3NqMnFwZ3BremZ2Y3hrIn0.TOK_D8r2LULbVb-3ULVf8Q',
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    // interactive: false,
});
map.scrollZoom.disable();


var scroller = scrollama();

let filterYear = ['==', ['number', ['get', 'YEAR']], 2021];
let filterCategory = ['==', ['number', ['get', 'YEAR']], 2021];

let category = 'POS_INDICE_VIVIBILITA';


let firstSymbolId;

map.on("load", function() {
  map.addSource('classifica', {
    type: 'geojson',
    data: data,
  });

  const layers = map.getStyle().layers;
    for (const layer of layers) {
      if (layer.type === 'symbol') {
      firstSymbolId = layer.id;
      break;
    }
  }

  map.addLayer({
        'id': "classifica-custom",
        'type': 'circle',
        'source': 'classifica',
        'layout': {
            'visibility': 'visible',
        },
        'paint': {
            'circle-radius': {
                'base': 5,
                'stops': [[12, 12], [22, 12]]
            },

            'circle-color': {
              'property': category,
              'type': 'exponential',
              'stops': [
                  [0, 'rgb(236,222,239)'],
                  [10, 'rgb(236,222,239)'],
                  [20, 'rgb(208,209,230)'],
                  [30, 'rgb(166,189,219)'],
                  [40, 'rgb(103,169,207)'],
                  [50, 'rgb(28,144,153)'],
                  [108, 'rgb(1,108,89)']
                ]
              },
            'circle-stroke-color': 'white',
            'circle-stroke-width': 1,
            'circle-opacity': 0,
            'circle-stroke-opacity': 0,
        },
        'filter': ['all', filterYear, filterCategory]
    });

  map.addLayer({
      id: 'posizione-text',
      type: 'symbol',
      source: 'classifica',
      filter: ['has', category],
      paint: {
        "text-color": "rgba(255,255,255,255)",
        'text-opacity': 0
      },
      layout: {
      'text-field': `{${category}}`,
      'text-font': ['Arial Unicode MS Bold'],
      'text-size': 11,
      'text-allow-overlap': true,
       'text-ignore-placement': true,
       'icon-allow-overlap': true,
       'icon-ignore-placement': true,
    },
    'filter': ['all', filterYear, filterCategory]
    });


  map.on('click', function(e) {
      console.log(e.properties)

      var features = map.queryRenderedFeatures([e.point.x, e.point.y + 50], {
          layers: ["classifica-custom"]
      });

      if(features != null){

          var feature = features[0];
          var popup = new mapboxgl.Popup({ offset: [0, -15] })
            .setLngLat(feature.geometry.coordinates)
            .setHTML('<div id=\'popup\' class=\'popup\' style=\'z-index: 10;\'>' +
                      '<ul>' +
                      '<li> <h4>' + feature.properties['CITY'] + '</h4> </li>' +
                      '<li> Ondate di calore: ' + feature.properties['POS_NOTTI_TROPICALI'] + ' </li>' +
                      '<li> Soleggiamento: ' + feature.properties['POS_SOLEGGIAMENTO'] + ' </li>' +
                      '<li> Comfort per umidità: ' + feature.properties['POS_COMFORT_PER_UMIDITA'] + ' </li>' +
                      '<li> Giorni freddi: ' + feature.properties['POS_GIORNI_FREDDI'] + ' </li>' +
                      '<li> Piogge: ' + feature.properties['POS_PIOGGE'] + ' </li>' +
                      '</ul></div>')
            .setLngLat(feature.geometry.coordinates)
            .addTo(map);
        }
    });

    scroller.setup({
        step: '.step',
        offset: 0.5,
        progress: true
    })
    .onStepEnter(async response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.add('active');
        map[chapter.mapAnimation || 'flyTo'](chapter.location);

        // header title on change
        header_title.innerHTML = chapter.header_title;

        if (config.inset) {
          if (chapter.location.zoom < 5) {
            insetMap.flyTo({center: chapter.location.center, zoom: 0});
          }
          else {
            insetMap.flyTo({center: chapter.location.center, zoom: 3});
          }
        }
        if (config.showMarkers) {
            marker.setLngLat(chapter.location.center);
        }
        if (chapter.onChapterEnter.length > 0) {
            chapter.onChapterEnter.forEach(setLayerOpacity);
        }
        if (chapter.callback) {
            window[chapter.callback]();
        }
        if (chapter.rotateAnimation) {
            map.once('moveend', () => {
                const rotateNumber = map.getBearing();
                map.rotateTo(rotateNumber + 180, {
                    duration: 30000, easing: function (t) {
                        return t;
                    }
                });
            });
        }
    })
    .onStepExit(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.remove('active');
        if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(setLayerOpacity);
        }

    });
});


// setup resize event
window.addEventListener('resize', scroller.resize);


//  dropdown
var select = document.getElementById("year-selector");
var options = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"];

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}

select.addEventListener("change", function(e){
  let value =  parseInt(this.value, 10);
  map.setFilter('classifica-custom', ['==', ['number', ['get', 'YEAR']], value]);
  map.setFilter('posizione-text', ['==', ['number', ['get', 'YEAR']], value]);
});


var selectCategory = document.getElementById("category-selector");
var optionsCategory = ["Ondate di Calore", "Soleggiamento", "Indice generale", "Piogge", "Comfort per umidità", "Giorni freddi"];

for(var j = 0; j < optionsCategory.length; j++) {
    var opt = optionsCategory[j];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectCategory.appendChild(el);
}


// function addCategoryLayer(input){
//   let firstLayer = 'posizione-text'
//
//     map.addLayer({
//       id: "category-text",
//       type: 'symbol',
//       source: 'classifica',
//       filter: ['has', input],
//       paint: {
//         "text-color": "rgba(255,255,255,255)",
//         'text-opacity': 0
//       },
//       layout: {
//       'text-field': `ciaone`,
//       'text-font': ['Arial Unicode MS Bold'],
//       'text-size': 11,
//       'text-allow-overlap': true,
//        'text-ignore-placement': true,
//        'icon-allow-overlap': true,
//        'icon-ignore-placement': true,
//     },
//     'filter': ['all', filterYear]
//   }, firstSymbolId);
//
//   if (map.getLayer('posizione-text')) {
//     map.removeLayer('posizione-text');
//   }
// }

selectCategory.addEventListener("change", function(e){
  let a = map.getLayer("posizione-text")
  let value =  this.value.toLowerCase();
  if(value == "comfort per umidità"){
    category = 'POS_COMFORT_PER_UMIDITA';
  }
  if(value == "ondate di calore"){
    category = 'POS_ONDATE_DI_CALORE';
  }
  if(value == "soleggiamento"){
    category = 'POS_SOLEGGIAMENTO';
  }
  if(value == "indice generale"){
    category = 'POS_INDICE_VIVIBILITA';
  }
  if(value == "piogge"){
    category = 'POS_PIOGGE';
  }
  if(value == "giorni freddi"){
      map.setFilter('posizione-text', ['==', ['number', ['get', 'YEAR']], value]);
  }
});
