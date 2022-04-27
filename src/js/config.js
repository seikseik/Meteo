export let config = {
    style: 'mapbox://styles/matteosacchi/cl1aoej5q004314pkuhnw6gxm',
    accessToken: 'pk.eyJ1IjoibWF0dGVvc2FjY2hpIiwiYSI6ImNrazFrdG5hNzBzM2oycW1manJvbDl6ZGoifQ.FOB7LTrZU3E4nF270xUyxA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    theme: 'light',
    use3dTerrain: false,
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Riviera ligure davanti a tutti',
            image: '',
            description: 'Ai primi due posti della classifica dove sotto il profilo climatico nello scorso anno è stato più piacevole trascorrere le giornate, ci sono le città di <strong>Imperia</strong> e <strong>Savona</strong>. Solo cinque i capoluoghi di provincia che hanno superato quota 700 dell’indice di vivibilità climatica riferito al 2021, stilato dagli esperti di IlMeteo.it. Dopo Imperia e Savona, rispettivamente con indici 723 e 719, medaglia di bronzo per la toscana <strong>Massa</strong> (717) e quarto posto a pari merito per <strong>Catanzaro</strong> e <strong>Ancona</strong>, entrambe a quota 700. Nel 2021 quali sono state le sorprese in positivo e in negativo? «Di positivo sicuramente L’Aquila che, come tutte le città sopra i 500-600 metri, beneficia del riscaldamento globale con un clima più mite», concordano gli esperti di IlMeteo.it Mattia Gussoni e Lorenzo Tedici. <strong>«Napoli</strong>, invece, al 93mo posto, ha avuto un clima peggiore di quanto ci aspettavamo, forse dovuto all’alta umidità»',
            header_title: 'Quale città nel 2021 è stata la migliore dal punto di vista climatico?',
            location: {
                center: [10.989990, 42.616398],
                zoom: 5.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'La Pianura padana penalizzata',
            image: '',
            description: 'Degli ultimi 15 posti, undici sono occupati da città situate nella Pianura Padana. Maglia nera a <strong>Cremona</strong>, che ha sommato solo 366 punti nell’indice di vivibilità climatica, penultimo posto per <strong>Salerno</strong> (387), preceduta da <strong>Parma</strong> (393), Reggio Emilia<strong></strong> e <strong>Oristano</strong> (entrambe con 395). <strong>Milano</strong>, con il suo clima continentale si trova all’89mo posto. Peggio hanno fatto altre città di pianura come <strong>Lodi, Modena, Mantova, Piacenza, Pavia, Novara, Ferrara e Padova,</strong> a conferma che la parte centrale della grande pianura del Nord, soprattutto lungo il corso del Po tra Emilia e Lombardia, a causa delle particolari condizioni geografiche che influenzano anche il clima (scarsa circolazione dell’aria, temperature rigide d’inverno e calde d’estate con altissima umidità relativa, frequenti gelate e giornate nebbiose) non sono certo le migliori d’Italia sotto l’aspetto bioclimatico.',
            header_title: 'Le città meno favorite dal clima',
            location: {
              center: [12.979990, 40.416398],
              zoom: 7.6,
              pitch: 0,
              bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Roma «escursionista» a sorpresa',
            image: '',
            description: 'In una nazione che si estende per quasi 1.300 chilometri in linea d’aria tra il punto più a Nord  e quello più a Sud, la variabilità climatica è molto elevata. Alla quale si aggiunge la catena montuosa più alta d’Europa e una dorsale appenninica lungo tutta la penisola, bagnata su tre lati dal mare. Una situazione complessa sotto il profilo meteorologico, forse la più variegata del continente, che da aree con clima glaciale passa a quelle con clima pre-desertico. Andando a guardare in profondità nei vari indici, si scoprono dati inaspettati. Per esempio, <strong>Roma</strong> è in ultima posizione per quanto riguarda l’escursione termica media giornaliera annua con oltre 12 gradi, mentre la città dove le temperature sono più costanti è <strong>Ancona</strong>. <strong>Lecce</strong> è invece la località dove d’estate è più difficile dormire a causa delle «notti tropicali», che sono quelle caratterizzate da elevate temperature notturne e alto tasso di umidità',
            header_title: 'Escursione termica',
            location: {
              center: [9.889990, 45.516398],
              zoom: 5.6,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Ombrelli aperti in Friuli-Venezia Giulia',
            image: '',
            description: '<strong>Udine</strong> e <strong>Pordenone</strong> sono le città più piovose (ai primi due posti anche per le classifiche riguardanti le piogge estreme e quelle intense), con <strong>Como</strong> al terzo posto. <strong>Belluno</strong> è la città con la maggiore nuvolosità diurna, <strong>Caserta</strong> la più soggetta alle ondate di calore.',
            header_title: 'Piovosità, nuvole e ondate di calore',
            location: {
              center: [10.989990, 42.616398],
              zoom: 5.6,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Il meridione e la rosa dei venti',
            image: '',
            description: 'La più asciutta è la siciliana <strong>Ragusa</strong>, con <strong>Potenza</strong> e <strong>Nuoro</strong> nelle posizione di rincalzo. <strong>Crotone</strong>, <strong>Trapani</strong> e <strong>Brindisi</strong> sono le più soggette alle raffiche di vento',
            header_title: 'Vento e siccità',
            location: {
              center: [10.989990, 42.616398],
              zoom: 5.6,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            header_title: 'ESPLORA LA MAPPA',
            location: {
              center: [10.989990, 42.616398],
              zoom: 5.6,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'classifica-custom',
                  opacity: 1,
                  duration: 100
              },
              {
                  layer: 'posizione-text',
                  opacity: 1,
                  duration: 100
              }

            ],
            onChapterExit: [
              {
                  layer: 'classifica-custom',
                  opacity: 0,
                  duration: 1000
              },
              {
                  layer: 'posizione-text',
                  opacity: 0,
                  duration: 100
              }
            ]
        }
    ]
};
