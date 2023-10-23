const date= 2000
const age= 2023-date

console.log(age)

if(age!=23){
    console.log("hello")
}
else{
    console.log('bye')
}

let monstre={
    nom:'rat geant',
    PV:30,
    att:5,
    def:1,
    faiblesse:['feu', 'foudre']
};

let monstre2={
    nom:'crocodile geant',
    PV:50,
    att:10,
    def:3
};

console.log(monstre.faiblesse)
console.log(monstre2)

monstre.faiblesse=['eau', 'boule']
console.log(monstre.faiblesse)


//Les boucles 
for(let i=0;i<10; i++){
    console.log("hello"+i);
}

let j=25;

do{
    console.log(j)
    j=j+1;
   

}while(j<20)

while(j<20){
    console.log(j)

}

let school= "ceci est un test"
console.log(school);
console.log(school.length);
console.log(school.indexOf('n'));
console.log(school.lastIndexOf('s')); //Dernier s dans la phrase
console.log(school.search('e'));
