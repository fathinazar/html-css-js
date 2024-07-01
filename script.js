console.log("WELCOME TO JAVASCRIPT");
a=28;
let g=23;
let b="name"
let d="True"
{
    var a=23;
    let g=34;
    console.log(g)
}
console.log(a)
console.log(g)

console.log(typeof(g))
console.log(typeof(d))
console.log(typeof(b))
console.log(typeof(a))
//Jacascript Objects
let person={
    name:"LOUIS",
    age:25,
    gender:"Male",
    location:"TVM"
}
console.log(person.name);
let arr=["Louis",25,"Male","TVM"]
console.log(arr[3])
console.log(arr.length)
//let arr_obj=[(name:"Ram",age:20),(name:"rani",age:25)]
//console.log(arr_obj[1].location)
function add(a,b){
    var sum=a+b;
    return sum;
}
let result=add(20,30)
console.log(result)
var ac=1;
var bc=ac++
console.log(ac)
console.log(bc)
var a1=2
var b1="3"
if (a1>b1){
    console.log("a1 is greater")
}else if(a1==b1){
    console.log("a1 is same as b1")
}else{
    console.log("b1 is greater and the value is"+b1)
}
var arr2=[10,20,30,40]
for (let i=0;i<arr2.length;i++){
    console.log(arr2[i])
}
for (const i in arr2){
    console.log(arr2[i])
}
for (const i of arr2){
    console.log(i)
}

