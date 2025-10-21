console.log("I am printing");
let x =Math.floor(Math.random()*1000);
if (x%7&&9==0){
    console.log(x);
    console.log("Success");
} else{
    console.log(x);
    console.log("Failure");
}
let t= Math.floor(Math.random()*150);
console.log("temp="+t);
let temp= (t<60) ? "too cold" : (t>90 ? "too hot" : "just right");
console.log(temp);

function add(a,b){
    return a+b;
}
let result= add(Math.floor(Math.random()*10),Math.floor(Math.random()*10));
console.log("Result= "+result);

let myFunction= (a,b)=> a+b;
let arrresult= myFunction(Math.floor(Math.random()*50),Math.floor(Math.random()*50));
console.log("ArrResult= "+arrresult);

const pplITalkedToToday= ["Remy", "Panshul", "Crystal", "Matt", "Aru", "Ime", "Mr.Goodman", "Ines", "Mr. Fuller", "Rhys", "Mx. Bradford", "Rowan", "Isa", "Lisa", "Ezra" ];
let randomElement= pplITalkedToToday[Math.floor(Math.random()*15)];
console.log("Array: "+pplITalkedToToday.length+", "+ pplITalkedToToday[0]+", "+pplITalkedToToday[14]+", "+randomElement+", "+pplITalkedToToday.sort()+", "+pplITalkedToToday.push("Katie")+", "+pplITalkedToToday.push(35));

const numbers= [];
for(let i=0; i<10; i++){
    let myMinMax= (min, max)=> Math.floor(Math.random()*(max-min+1))+min;
    let randomNum= myMinMax(29, 87);
    numbers.push(randomNum);
}
console.log(numbers);
for(let j=0; j<numbers.length; j++){
    
}