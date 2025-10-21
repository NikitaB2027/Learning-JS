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

