//////////////////////////// INITIALIZATION ///////////////////////////

/******* VARIABLES *******/
const roundCenter = [235, 218];
const tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let startSimulation = false;
let ecartAngle;
const carData = {
    car0 : {
        angle : 0,
        speed : 0.01
    },
    car1 : {
        angle : 0.6,
        speed : 0.01
    },
    car2 : {
        angle : 1.2,
        speed : 0.01
    },
    car3 : {
        angle : 1.8,
        speed : 0.01
    },
    car4 : {
        angle : 2.4,
        speed : 0.01
    },
    car5 : {
        angle : 3,
        speed : 0.01
    },
    car6 : {
        angle : 3.6,
        speed : 0.01
    },
    car7 : {
        angle : 4.2,
        speed : 0.01
    },
    car8 : {
        angle : 4.8,
        speed : 0.01
    },
    car9 : {
        angle : 5.55,
        speed : 0.01
    }
};


/******* CSS FUNCTIONS *******/
function changeCss(who) {
    return document.querySelector(who).style;
};
function getInfo(who, what) {
    return parseInt(window.getComputedStyle(document.getElementById(who)).getPropertyValue(what));
};
function change_pos(element, leftInput, topInput) {
    document.getElementById(element).style.left = String(leftInput) + 'px';
    document.getElementById(element).style.top = String(topInput) + 'px';
};


/******* SETUP *******/
// creation d'un event listener pour le bouton démarrer
document.querySelector('#startButton').addEventListener('click', () => {
    startSimulation = true;
    document.getElementById('textBox1').innerHTML = 'Un embouteillage se forme...';
    document.getElementById('textBox2').innerHTML = '';
    document.getElementById('simulationBox').removeChild(document.getElementById('startButton'));
});

// creation des voitures
for(let i=0;i<tab.length-1;i++) {
    const car = document.createElement('div');
    car.setAttribute('id', `car${i}`);
    car.setAttribute('class', 'car');
    document.querySelector('#simulationBox').appendChild(car);
};




//////////////////////////// CODE ///////////////////////////
setInterval(() => {
    for(let i=0;i<tab.length-1;i++) {

        /******* GESTION DE LA POSITION DE LA VOITURE i *******/ 
        if(carData[`car${i}`].angle >= 6.28){
            carData[`car${i}`].angle = 0;
        } else {
            carData[`car${i}`].angle = Math.round((carData[`car${i}`].angle + carData[`car${i}`].speed)*10000)/10000;
        };


        if(startSimulation) {

            /******* COMPARAISON DE L'ANGLE ENTRE LA VOITURE i ET i+1 *******/ 
            // gestion cas particulier 1
            if((Math.cos(carData[`car${tab[i]}`].angle) > 0) && (Math.sin(carData[`car${tab[i]}`].angle) > 0) && (Math.cos(carData[`car${tab[i+1]}`].angle) > 0) && (Math.sin(carData[`car${tab[i+1]}`].angle) < 0)) {
                ecartAngle = carData[`car${tab[i]}`].angle - carData[`car${tab[i+1]}`].angle + 6.28;
            } 
            // gestion cas particulier 2
            if((Math.cos(carData[`car${tab[i]}`].angle) > 0) && (Math.sin(carData[`car${tab[i]}`].angle) < 0) && (Math.cos(carData[`car${tab[i+1]}`].angle) > 0) && (Math.sin(carData[`car${tab[i+1]}`].angle) > 0)) {
                ecartAngle = carData[`car${tab[i+1]}`].angle - carData[`car${tab[i]}`].angle + 6.28;
            } 

            // gestion des autres cas
            else {
                ecartAngle = carData[`car${tab[i+1]}`].angle - carData[`car${tab[i]}`].angle;

            };
            

            /******* GESTION DE LA VITESSE DES VOITURES *******/ 
            // freinage
            if((0.5 < ecartAngle < 0.6) && (carData[`car${tab[i]}`].speed >= 0)) {
                carData[`car${tab[i]}`].speed *= 0.9;
            }
            // acceleration
            else if((0.9 < ecartAngle) && (carData[`car${tab[i]}`].speed <= 0.015)) {
                carData[`car${tab[i]}`].speed += 0.002;
            };
            
        };
    };


    /******* GESTION DE L'AFFICHAGE *******/ 
    for(let i=0;i<tab.length-1;i++) {
        // placement
        change_pos(`car${i}`, roundCenter[0] + Math.cos(carData[`car${i}`].angle)*227, roundCenter[1] - Math.sin(carData[`car${i}`].angle)*227);

        // rotation image voiture
        document.getElementById(`car${i}`).style.transform = `rotate(-${(carData[`car${i}`].angle)*180/3.14}deg)`;
    };
        
}, 10);