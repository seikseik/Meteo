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
            title: '',
            image: '',
            description: 'Tra record di temperature e bombe d’acqua, identificare le città italiane dove il meteo nel 2021 è stato più favorevole non è stato facile. Ci sono però alcuni punti fermi, località e zone dove spesso il clima è più clemente. Tra queste, la Riviera ligure di Ponente. Ai primi due posti della classifica dove sotto il profilo climatico nello scorso anno è stato più piacevole trascorrere le giornate, stilata dagli esperti di IlMeteo.it, ci sono infatti le città di Imperia e Savona (con le vicine Sanremo, Alassio e Varazze, solo per citare alcuni nomi di note località turistiche liguri). Solo cinque sono stati i capoluoghi di provincia che hanno superato quota 700 dell’indice di vivibilità climatica riferito al solo 2021. ',
            header_title: '1.Quale è la città in Italia dove si vive meglio dal punto di vista climatico?',
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
            title: '',
            image: '',
            description: 'Dopo Imperia e Savona, rispettivamente con indici 723 e 719, medaglia di bronzo per la toscana Massa (717) e quarto posto a pari merito per Catanzaro e Ancona, entrambe a quota 700. Poi c’è il fondo della classifica, cioè i posti dove nello scorso anno il clima è stato meno piacevole: degli ultimi 15 posti, undici sono occupati da città situate nella Pianura Padana. Maglia nera a Cremona, che ha sommato solo 366 punti nell’indice di vivibilità climatica, penultimo posto per Salerno (387), preceduta da Parma (393), Reggio Emilia e Oristano (entrambe con 395). ',
            header_title: '2.Quale è la città in Italia dove si vive meglio dal punto di vista climatico?',
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
            title: '',
            image: '',
            description: '«Per compilare la classifica complessiva abbiamo assegnato un “peso” diverso ai vari fattori», illustra Lorenzo Tedici, meteorologo di IlMeteo.it «Abbiamo quindi dato valore doppio ai tre parametri biometeorologici più comuni, che sono temperatura media,  umidità e vento. Agli altri, come piovosità,  giorni di pioggia e di gelo, ondate di calore, escursione termica, nebbie, notti tropicali, bombe d’acqua, siccità e soleggiamento, è stato assegnato valore 1. Sommando tutti i valori il risultato è stata la classifica generale». Milano, con il suo clima continentale, non si piazza molto bene, si trova all’89mo posto. Peggio hanno fatto altre città di pianura come Lodi, Modena, Mantova, Piacenza, Pavia, Novara, Ferrara e Padova,  che compaiono nelle ultime posizioni a conferma che la parte centrale della grande pianura del Nord, soprattutto lungo il corso del Po tra Emilia e Lombardia, a causa delle particolari condizioni geografiche che influenzano anche il clima (scarsa circolazione dell’aria, temperature rigide d’inverno e calde d’estate con altissima umidità relativa, frequenti gelate e giornate nebbiose) non sono certo le migliori d’Italia sotto l’aspetto bioclimatico. ',
            header_title: '3.Quale è la città in Italia dove si vive meglio dal punto di vista climatico?',
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
            title: '',
            image: '',
            description: 'In una nazione che si estende per quasi 1.300 chilometri in linea d’aria tra il punto più settentrionale (che si trova praticamente in Europa centrale) e quello più meridionale (escludendo Lampedusa  è Capo Passero in Sicilia, alla stessa latitudine di Tunisi) la variabilità climatica è molto elevata. Alla quale si aggiunge la catena montuosa più alta d’Europa e una dorsale appenninica lungo tutta la penisola, bagnata su tre lati dal mare. Insomma, una situazione complessa sotto il profilo meteorologico, forse la più variegata del continente, che da aree con clima glaciale passa a quelle con clima pre-desertico. Ricavare quindi una tabella significativa ha comportato un grande lavoro di analisi e bilanciamento tra tutti i vari indici con compongono l’insieme che va sotto il nome di clima.',
            header_title: '4.Quale è la città in Italia dove si vive meglio dal punto di vista climatico?',
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
            title: '',
            image: '',
            description: ' «Siamo partiti da dati ora per ora della banca dati del Centro meteo europeo (Ecmwf) lungo un periodo di 11 anni, moltiplicati per 108 città. In totale sono oltre 10 milioni di dati», spiega Mattia Gussoni, meteorologo di IlMeteo.it. Andando a guardare in profondità nei vari indici, si scoprono dati inaspettati. Per esempio, Roma è in ultima posizione per quanto riguarda l’escursione termica media giornaliera annua con oltre 12 gradi, mentre la città dove le temperature sono più costanti è Ancona. Lecce è invece la località dove d’estate è più difficile dormire a causa delle «notti tropicali», che sono quelle caratterizzate da elevate temperature notturne e alto tasso di umidità.',
            header_title: '4.Quale è la città in Italia dove si vive meglio dal punto di vista climatico?',
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
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Belluno è la città con la maggiore nuvolosità diurna, Caserta la più soggetta alle ondate di calore. Udine e Pordenone sono le città più piovose (ai primi due posti anche per le piogge estreme e quelle intense), con Como al terzo posto. La più asciutta è la siciliana Ragusa, con Potenza e Nuoro nelle posizione di rincalzo. Crotone, Trapani e Brindisi sono le più soggette alle raffiche di vento. Nel 2021 quali sono state le sorprese in positivo e in negativo, secondo i due esperti meteo? «Di positivo sicuramente L’Aquila che, come tutte le città sopra i 500-600 metri, beneficia del riscaldamento globale con un clima più mite», concordano Gussoni e Tredici. «Napoli, invece, al 93mo posto, ha avuto un clima peggiore di quanto ci aspettavamo, forse dovuto all’alta umidità».',
            header_title: '4.Quale è la città in Italia dove si vive meglio dal punto di vista climatico?',
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
              // {
              //     layer: 'class',
              //     opacity: 1,
              //     duration: 100
              // }
            ],
            onChapterExit: [
              // {
              //     layer: 'class',
              //     opacity: 0,
              //     duration: 1000
              // }
            ]
        }
    ]
};
