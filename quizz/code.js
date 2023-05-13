var apf = document.getElementById('apf')
var apv = document.getElementById('apv')
var avt = document.getElementById('avt')
var bt1 = document.getElementById('bt1')
var Q = document.getElementById("Q")
var resultat = document.getElementById('resultat')
var textef = document.getElementById('textef')
console.log(bt1)
console.log(bt1.style)
bt1.style.backgroundColor = "black" ;
document.getElementById("avt").style.cursor="default"

bt1.addEventListener("mouseenter", mouseEnter1);
bt1.addEventListener("mouseleave", mouseLeave1);
function mouseEnter1() {
    bt1.style.backgroundColor = "grey";
}
function mouseLeave1() {
    bt1.style.backgroundColor = "black";
}

bt1.style.cursor = "pointer"



var bt2 = document.getElementById('bt2')
console.log(bt2)
console.log(bt2.style)
bt2.style.backgroundColor = "black" ;

document.getElementById("bt2").addEventListener("mouseenter", mouseEnter2);
document.getElementById("bt2").addEventListener("mouseleave", mouseLeave2);
function mouseEnter2() {
    document.getElementById("bt2").style.backgroundColor = "grey";
}
function mouseLeave2() {
    document.getElementById("bt2").style.backgroundColor = "black";
}
bt2.style.cursor = "pointer"



var bt3 = document.getElementById('bt3')
console.log(bt3)
console.log(bt3.style)
bt3.style.backgroundColor = "black" ;

document.getElementById("bt3").addEventListener("mouseenter", mouseEnter3);
document.getElementById("bt3").addEventListener("mouseleave", mouseLeave3);
function mouseEnter3() {
    document.getElementById("bt3").style.backgroundColor = "grey";
}
function mouseLeave3() {
    document.getElementById("bt3").style.backgroundColor = "black";
}
bt3.style.cursor = "pointer"



var bt0 = document.getElementById('bt0')
console.log(bt0)
console.log(bt0.style)
bt0.style.backgroundColor = "black" ;

document.getElementById("bt0").addEventListener("mouseenter", mouseEnter0);
document.getElementById("bt0").addEventListener("mouseleave", mouseLeave0);
function mouseEnter0() {
    document.getElementById("bt0").style.backgroundColor = "grey";
}
function mouseLeave0() {
    document.getElementById("bt0").style.backgroundColor = "black";
}
bt0.style.cursor = "pointer"



var bt0 = document.getElementById('bt0')
console.log(bt0)
console.log(bt0.style)
bt0.style.backgroundColor = "black" ;

bt0.addEventListener("click",choix0);
bt1.addEventListener("click",choix1);
bt2.addEventListener("click",choix2);
bt3.addEventListener("click",choix3);

let list0 = ["10 heures","5 milliards d'euros","Le manque d'infrastructures routières","En construisant plus de routes","Elle augmente car les voitures consomment plus d'essence en ralentissant et en accélérant","ils peuvent réduire les pathologies respiratoires","En élargissant les voies","Ils augmentent les coûts de transport des marchandises","Augmente le risque d'accidents de la route"]
let list1 = ["20 heures","12 milliards d’euros","Le nombre croissant de voitures sur les routes","En imposant des taxes supplémentaires sur les voitures","Elle diminue car les voitures avancent plus lentement","ils affectent uniquement santé les personnes ayant des pathologies respiratoires","En instaurant des péages urbains pour décourager l'utilisation de la voiture","Aucun","Augmente le risque d'accidents de la route"]
let list2 = ["30 heures","17 milliards d'euros","Les accidents de la route","En encourageant l'utilisation des transports en commun","Elle reste inchangée car la distance parcourue reste la même","En augmentant la pollution de l'air, ce qui peut causer des problèmes respiratoires","En augmentant le nombre de zones piétonnes","Ils font augmenter le coût du carburant","Augmente le stress"]
let list3 = ["50 heures","40 milliards d'euros","Les travaux de construction","En limitant le nombre de voitures sur les routes","Elle impacte seulement les véhicules qui n’ont pas le start and stop","Ils réduisent la pollution sonore donc le sommeil","En interdisant les véhicules","Ils augmentent les coûts d'exploitation des entreprises","Provoque une fatigue oculaire"]
let list4 = [1,2,1,2,0,2,1,0,2]
let Quest = ["Combien de temps en moyenne passe un conducteur français dans les embouteillages par an ?","Quel est le coût total des embouteillages en France chaque année ?","Quelle est la cause principale des embouteillages selon les experts en transport ?","Quel est la solution la plus efficace pour limiter les embouteillages sur les routes ?","Quel est l'impact des embouteillages sur la consommation de carburant des voitures ?","Comment les embouteillages en ville peuvent-ils affecter la santé des habitants ?","Comment les villes peuvent-elles réduire les embouteillages ?","Quel est l'effet des embouteillages sur l'économie locale ?","Que provoquent les embouteillages sur la santé des conducteurs et des passagers ?"]

var v
var point = 0
var p = 1
var n = 1

resultat.style.zIndex = 0

    bt0.textContent = list0[0];
    bt1.textContent = list1[0];
    bt2.textContent = list2[0];
    bt3.textContent = list3[0];
    Q.textContent = Quest[0] ;
    Q.style.cursor="default"
function choix0(){
test(0)
}
function choix1(){
test(1)
}
function choix2(){
test(2)
}
function choix3(){
test(3)
}

function text(){
    bt0.textContent = list0[p];
    bt1.textContent = list1[p];
    bt2.textContent = list2[p];
    bt3.textContent = list3[p];
    Q.textContent = Quest[p]
    avt.textContent = "Question : "+ (p + 1) + '/9' ;
}

function apv1(){
    apv.textContent = "Vrai" ;
}
function apv2(){
    apv.textContent = ""
}
function apf1(){
    apf.textContent = "Faux" ;
}
function apf2(){
    apf.textContent = ""
}

function color(v,c){
    if (v == 0) {bt0.style.backgroundColor = c;
        setTimeout(mouseLeave0,2000)}
    if (v == 1) {bt1.style.backgroundColor = c;
        setTimeout(mouseLeave1,2000)}
    if (v == 2) {bt2.style.backgroundColor = c;
        setTimeout(mouseLeave2,2000)}
    if (v == 3) {bt3.style.backgroundColor = c;
        setTimeout(mouseLeave3,2000)}

}
function cursor(d){
bt0.style.cursor=d
bt1.style.cursor=d
bt2.style.cursor=d
bt3.style.cursor=d
}

function wait(){
    cursor("pointer")
    
    document.getElementById("bt0").addEventListener("mouseenter", mouseEnter0);
    document.getElementById("bt0").addEventListener("mouseleave", mouseLeave0);

    document.getElementById("bt1").addEventListener("mouseenter", mouseEnter1);
    document.getElementById("bt1").addEventListener("mouseleave", mouseLeave1);

    document.getElementById("bt2").addEventListener("mouseenter", mouseEnter2);
    document.getElementById("bt2").addEventListener("mouseleave", mouseLeave2);

    document.getElementById("bt3").addEventListener("mouseenter", mouseEnter3);
    document.getElementById("bt3").addEventListener("mouseleave", mouseLeave3);

    bt0.addEventListener("click",choix0);
    bt1.addEventListener("click",choix1);
    bt2.addEventListener("click",choix2);
    bt3.addEventListener("click",choix3);}

function fin1(){ resultat.style.zIndex = 4
    textef.style.zIndex = 5
    textef.textContent = "Votre score est de : " + point + '/9'
}
function fin2(){bt0.removeEventListener("mouseenter", mouseEnter0);
bt0.removeEventListener("mouseleave", mouseLeave0);

bt1.removeEventListener("mouseenter", mouseEnter1);
bt1.removeEventListener("mouseleave", mouseLeave1);

bt2.removeEventListener("mouseenter", mouseEnter2);

bt3.removeEventListener("mouseenter", mouseEnter3);
bt3.removeEventListener("mouseleave", mouseLeave3);

bt0.removeEventListener("click",choix0);
bt1.removeEventListener("click",choix1);
bt2.removeEventListener("click",choix2);
bt3.removeEventListener("click",choix3);}
function fin(p){
    if (p == 9){ 
    fin2()
    setTimeout(fin1,2000)}
}

function test(v){
    if(v == list4[p]){ 
        point = point + 1
        
        apv1()
        setTimeout(apv2,2000)
        bt0.removeEventListener("mouseenter", mouseEnter0);
        bt0.removeEventListener("mouseleave", mouseLeave0);

        bt1.removeEventListener("mouseenter", mouseEnter1);
        bt1.removeEventListener("mouseleave", mouseLeave1);

        bt2.removeEventListener("mouseenter", mouseEnter2);
        bt2.removeEventListener("mouseleave", mouseLeave2);

        bt3.removeEventListener("mouseenter", mouseEnter3);
        bt3.removeEventListener("mouseleave", mouseLeave3);

        bt0.removeEventListener("click",choix0);
        bt1.removeEventListener("click",choix1);
        bt2.removeEventListener("click",choix2);
        bt3.removeEventListener("click",choix3);

        cursor("default")

        color(v,"green")

        setTimeout(wait,2000)
        p = p + 1
        setTimeout(text,2000)
        setTimeout(fin(p),3000)
        }
    
    else {
        apf1()
        setTimeout(apf2,2000)
        bt0.removeEventListener("mouseenter", mouseEnter0);
        bt0.removeEventListener("mouseleave", mouseLeave0);

        bt1.removeEventListener("mouseenter", mouseEnter1);
        bt1.removeEventListener("mouseleave", mouseLeave1);

        bt2.removeEventListener("mouseenter", mouseEnter2);

        bt3.removeEventListener("mouseenter", mouseEnter3);
        bt3.removeEventListener("mouseleave", mouseLeave3);

        bt0.removeEventListener("click",choix0);
        bt1.removeEventListener("click",choix1);
        bt2.removeEventListener("click",choix2);
        bt3.removeEventListener("click",choix3);

        cursor("default")

        color(v,"red")

        setTimeout(wait,2000)
        p = p + 1
        setTimeout(text,2000)
        setTimeout(fin(p),3000)
        
    }
    }
