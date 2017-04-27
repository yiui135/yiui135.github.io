var html = document.documentElement;

var letters = {
    KeyA: {
    	flower: 'Angelica',
    	definition: 'inspiration',
    	url: 'assets/media/angelica1.jpg'
    },

    KeyB: {
    	flower: 'Buttercup',
    	definition: 'ingratitude',
    	url: 'assets/media/buttercup1.jpg'
    },

    KeyC: {
    	flower: 'Chamomile',
    	definition: 'energy in adversity',
    	url: 'assets/media/chamomile1.jpg'
    },

    KeyD: {
    	flower: 'Dahlia',
    	definition: 'dignity',
    	url: 'assets/media/dahlia1.jpg'
    },

    KeyE: {
    	flower: 'Edelweiss',
    	definition: 'noble courage',
    	url: 'assets/media/edelweiss1.jpg'
    },

    KeyF: {
    	flower: 'Forsythia',
    	definition: 'anticipation',
    	url: 'assets/media/forsythia1.jpg'
    },

    KeyG: {
    	flower: 'Gardenia',
    	definition: 'refinement',
    	url: 'assets/media/gardenia1.jpg'
    },

    KeyH: {
    	flower: 'Hydrangea',
    	definition: 'dispassion',
    	url: 'assets/media/hydrangea1.jpg'
    },

    KeyI: {
    	flower: 'Iris',
    	definition: 'message',
    	url: 'assets/media/iris1.jpg'
    },

    KeyJ: {
    	flower: "Jacob's Ladder",
    	definition: 'come down',
    	url: 'assets/media/jacobsladder1.jpg'
    },

    KeyK: {
    	flower: 'Kaffir Lily',
    	definition: 'majesty',
    	url: 'assets/media/kaffirlily1.jpg'
    },

    KeyL: {
    	flower: 'Liatris',
    	definition: 'i will try again',
    	url: 'assets/media/liatris1.jpg'
    },

    KeyM: {
    	flower: 'Marigold',
    	definition: 'grief',
    	url: 'assets/media/marigold1.jpg'
    },

    KeyN: {
    	flower: 'Nasturtium',
    	definition: 'impulsive love',
    	url: 'assets/media/nasturtium1.jpg'
    },

    KeyO: {
    	flower: 'Orange Blossom',
    	definition: 'your purity equals your loveliness',
    	url: 'assets/media/orangeblossom1.jpg'
    },

    KeyP: {
    	flower: 'Peony',
    	definition: 'anger',
    	url: 'assets/media/peony1.jpg'
    },

    KeyQ: {
    	flower: "Queen Anne's Lace",
    	definition: 'fantasy',
    	url: 'assets/media/queenanne1.jpg'
    },

    KeyR: {
    	flower: 'Ranunculus',
    	definition: 'you are radiant with charms',
    	url: 'assets/media/ranunculus1.jpg'
    },

    KeyS: {
    	flower: 'Sunflower',
    	definition: 'false riches',
    	url: 'assets/media/sunflower1.jpg'
    },

    KeyT: {
    	flower: 'Trillium',
    	definition: 'modest beauty',
    	url: 'assets/media/trillium1.jpg'
    },

    KeyU: {
    	flower: 'Ursinia',
    	definition: 'share your feelings',
    	url: 'assets/media/ursinia1.jpg'
    },

    KeyV: {
    	flower: 'Vetch',
    	definition: 'i cling to thee',
    	url: 'assets/media/vetch1.jpg'
    },

    KeyW: {
    	flower: 'Water Lily',
    	definition: 'purity of heart',
    	url: 'assets/media/waterlily1.jpg'
    },

    KeyX: {
    	flower: 'Xeranthemum',
    	definition: 'unfading rememberance',
    	url: 'assets/media/xeranthemum1.jpg'
    },

    KeyY: {
    	flower: 'Yarrow',
    	definition: 'cure for a broken heart',
    	url: 'assets/media/yarrow1.jpg'
    },

    KeyZ: {
    	flower: 'Zinnia',
    	definition: 'i mourn your absence',
    	url: 'assets/media/zinnia1.jpg'
    }
};

var container = document.getElementById("container");

var content = document.getElementById("content");
var glossarycontent = document.getElementById("glossarycontent");

var glossary = document.getElementById("glossary");


document.addEventListener('keydown',function(event){

    var img = document.createElement('img');
        img.src = letters[event.code].url;

    // var imga = document.createElement('img');
    //     imga.src = letters[KeyA].url;

    var txt = document.createElement('div');
        txt.innerHTML += letters[event.code].flower+"<br>"+"<h3>"+letters[event.code].definition+"</h3>";
        txt.classList.add("flower");

    // var txta = document.createElement('div');
    //     txta.innerHTML += letters[KeyA].flower+"<br>"+"<h3>"+letters[KeyA].definition+"</h3>";
    //     txta.classList.add("flower");

        if (event.keyCode >= 65 && event.keyCode <= 90){

            console.log(letters[event.code].flower);

            content.prepend(img);
            content.prepend(txt);

            glossarycontent.appendChild(txt);

            // content.removeChild(img);

        };


});


glossarybutton.addEventListener("click", function(event) {
    glossary.style.visibility = "visible";
    glossary.animation= "fadein 4s";
});

glossarybutton2.addEventListener("click", function(event) {
    glossary.style.visibility = "hidden";
});



        // if (event.keyCode == 32){
            
        //     console.log(letters[KeyA].flower);
        //     content.appendChild(txta);
        //     content.appendChild(imga);

        // } else if (event.keyCode >= 65 && event.keyCode <= 90){

        //     console.log(letters[event.code].flower);
        //     content.appendChild(txt);
        //     content.appendChild(img);
        //     console.log(click);
        //     container.removeChild(container.lastChild);
        //     // content.removeChild(img);

        // };
    // };




