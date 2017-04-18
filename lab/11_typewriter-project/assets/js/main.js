var html = document.documentElement;

var container = document.getElementById("container");

var letters = {
    KeyA: {
    	flower: 'Angelica',
    	definition: 'inspiration',
    	url: '../media/angelica1.jpg'
    },

    KeyB: {
    	flower: 'Buttercup',
    	definition: 'ingratitude',
    	url: '../media/buttercup1.jpg'
    },

    KeyC: {
    	flower: 'Chamomile',
    	definition: 'inspiration',
    	url: '../media/chamomile1.jpg'
    },

    KeyD: {
    	flower: 'Dahlia',
    	definition: 'dignity',
    	url: '../media/dahlia1.jpg'
    },

    KeyE: {
    	flower: 'Edelweiss',
    	definition: 'noble courage',
    	url: '../media/edelweiss1.jpg'
    },

    KeyF: {
    	flower: 'Forsythia',
    	definition: 'anticipation',
    	url: '../media/forsythia1.jpg'
    },

    KeyG: {
    	flower: 'Gardenia',
    	definition: 'refinement',
    	url: '../media/gardenia1.jpg'
    },

    KeyH: {
    	flower: 'Hydrangea',
    	definition: 'dispassion',
    	url: '../media/hydrangea1.jpg'
    },

    KeyI: {
    	flower: 'Iris',
    	definition: 'message',
    	url: '../media/iris1.jpg'
    },

    KeyJ: {
    	flower: "Jacob's Ladder",
    	definition: 'come down',
    	url: '../media/jacobsladder1.jpg'
    },

    KeyK: {
    	flower: 'Kaffir Lily',
    	definition: 'majesty',
    	url: '../media/kaffirlily1.jpg'
    },

    KeyL: {
    	flower: 'Liatris',
    	definition: 'i will try again',
    	url: '../media/liatris1.jpg'
    },

    KeyM: {
    	flower: 'Marigold',
    	definition: 'grief',
    	url: '../media/marigold1.jpg'
    },

    KeyN: {
    	flower: 'Nasturtium',
    	definition: 'impulsive love',
    	url: '../media/nasturtium1.jpg'
    },

    KeyO: {
    	flower: 'Orange Blossom',
    	definition: 'your purity equals your loveliness',
    	url: '../media/orangeblossom1.jpg'
    },

    KeyP: {
    	flower: 'Peony',
    	definition: 'anger',
    	url: '../media/peony1.jpg'
    },

    KeyQ: {
    	flower: "Queen Anne's Lace",
    	definition: 'fantasy',
    	url: '../media/queenanne1.jpg'
    },

    KeyR: {
    	flower: 'Ranunculus',
    	definition: 'you are radiant with charms',
    	url: '../media/ranunculus1.jpg'
    },

    KeyS: {
    	flower: 'Sunflower',
    	definition: 'false riches',
    	url: '../media/sunflower1.jpg'
    },

    KeyT: {
    	flower: 'Trillium',
    	definition: 'modest beauty',
    	url: '../media/trillium1.jpg'
    },

    KeyU: {
    	flower: 'Ursinia',
    	definition: 'share your feelings',
    	url: '../media/ursinia1.jpg'
    },

    KeyV: {
    	flower: 'Vetch',
    	definition: 'i cling to thee',
    	url: '../media/vetch1.jpg'
    },

    KeyW: {
    	flower: 'Water Lily',
    	definition: 'purity of heart',
    	url: '../media/waterlily1.jpg'
    },

    KeyX: {
    	flower: 'Xeranthemum',
    	definition: 'unfading rememberance',
    	url: '../media/xeranthemum1.jpg'
    },

    KeyY: {
    	flower: 'Yarrow',
    	definition: 'cure for a broken heart',
    	url: '../media/yarrow1.jpg'
    },

    KeyZ: {
    	flower: 'Zinnia',
    	definition: 'i mourn your absence',
    	url: '../media/zinnia1.jpg'
    }
};

document.addEventListener('keydown',function(event){

	if(event.keyCode >= 65 && event.keyCode <= 90){
		
		console.log(letters[event.code].flower);
		document.createTextNode(letters[event.code].flower);



	};
});