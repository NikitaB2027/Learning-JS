console.log("I am printing");
//Question 1
let x =Math.floor(Math.random()*1000);
if (x%7&&9==0){
    console.log(x);
    console.log("Success");
} else{
    console.log(x);
    console.log("Failure");
}
//Question 2
let t= Math.floor(Math.random()*150);
console.log("temp="+t);
let temp= (t<60) ? "too cold" : (t>90 ? "too hot" : "just right");
console.log(temp);
//Question 3
function add(a,b){
    return a+b;
}
let result= add(Math.floor(Math.random()*10),Math.floor(Math.random()*10));
console.log("Result= "+result);
//Question 4
let myFunction= (a,b)=> a+b;
let arrresult= myFunction(Math.floor(Math.random()*50),Math.floor(Math.random()*50));
console.log("ArrResult= "+arrresult);
//Question 5
const pplITalkedToToday= ["Remy", "Panshul", "Crystal", "Matt", "Aru", "Ime", "Mr.Goodman", "Ines", "Mr. Fuller", "Rhys", "Mx. Bradford", "Rowan", "Isa", "Lisa", "Ezra" ];
let randomElement= pplITalkedToToday[Math.floor(Math.random()*15)];
console.log("Array: "+pplITalkedToToday.length+", "+ pplITalkedToToday[0]+", "+pplITalkedToToday[14]+", "+randomElement+", "+pplITalkedToToday.sort()+", "+pplITalkedToToday.push("Katie")+", "+pplITalkedToToday.push(35));
//Question 6
const numbers= [];
for(let i=0; i<10; i++){
    let myMinMax= (min, max)=> Math.floor(Math.random()*(max-min+1))+min;
    let randomNum= myMinMax(29, 87);
    numbers.push(randomNum);
}
console.log(numbers);

//Question 8 part 1
const greatest= [];
for(let j=1; j<numbers.length; j++){
    function subtract(a,b){
        return Math.abs(a-b);
    }
    let results= subtract(numbers[j],numbers[j-1]);
    console.log(results);
    greatest.push(results);
    greatest.sort(function(a,b){
        return a-b;
    });
    //??????? I can't figure out how to get the greatest number in the array
}
console.log("Elements: "+greatest);
console.log("Greatest distance: "+greatest[8]);
//Question 7
const mapArray= greatest.map(myMapFunction);
function myMapFunction(value){
    return value*value;
}
console.log("Mapped Elements: "+mapArray);
console.log("Largest number:"+mapArray[8]);
const overHalf = mapArray.filter(myHalf);
function myHalf(value){
    return value > (mapArray[8]/2);
}
//Question 8 part 2
console.log("Filtered Elements: "+mapArray.filter(myHalf));
//Question 9
const sum = mapArray.reduce(mySum);
function mySum(value, total){
    return total+value;
}
console.log("Sum: "+mapArray.reduce(mySum));
console.log()

//question 10
let pplTXT = "";
pplITalkedToToday.forEach(myPplDisplay);
function myPplDisplay(value) {
  pplTXT += value + ", ";
}

let numberTXT = "";
numbers.forEach(myNumbDisplay);
function myNumbDisplay(value) {
  numberTXT += value + ", ";
}

let greatTXT = "";
greatest.forEach(myGreatDisplay);
function myGreatDisplay(value) {
  greatTXT += value + ", ";
}

let mapTXT = "";
mapArray.forEach(myMapDisplay);
function myMapDisplay(value) {
  mapTXT += value + ", ";
}

console.log("People Array: ["+pplTXT+"]");
console.log("Numbers Array: ["+numberTXT+"]");
console.log("GreatestArray: ["+greatTXT+"]");
console.log("Mapped Array: ["+mapTXT+"]");
//I don't know how to fix this part

//Question 11
class FamilyMembers {
    constructor(name, birth, relation){
        this.name= name;
        this.birth= birth;
        this.relation= relation;
    }

    age(yearNow=2025){
        return yearNow-this.birth;
    }
}

const myMom= new FamilyMembers("Gitika", 1977, "Mother");
const myDad= new FamilyMembers("Keshab", 1974, "Father");
const mySister= new FamilyMembers("Namrata", 2003, "Sister");
console.log("Her name is "+myMom.name+", she is my "+myMom.relation+", and she is "+myMom.age()+" years old.");
console.log("Her name is "+mySister.name+", she is my "+mySister.relation+", and she is "+mySister.age()+" years old.");
console.log("His name is "+myDad.name+", he is my "+myDad.relation+", and he is "+myDad.age()+" years old.");