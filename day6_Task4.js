aa = (f,s,t) => {
 if(f>s &&f>t){
 console.log(f)}
 else if(s>f && s>t){
 console.log(s)}
 else{
 console.log(t)}
}
aa(1,2,3);


let n = "123";
console.log(add(n));
function add(n)
{
let sum = 0;
for(var i=0;i<n.length;i++){
 sum+=+n[i]
 }
 return sum;
}


const arr = [9,8,5,6,4,3,2,1];
(function(arr) {
 let sum2 = 0;
 for (var i = 0; i < arr.length; i++){
 sum2 += arr[i];
 }
 console.log(sum2);
})(arr);


var arr1 = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i < arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano(arr1);


const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<num;i++){
 if(num%i===0)
 {
 return false;
 }
 }
 return num >1;
});
console.log(myPrime);


const num1 = [10, 20, 30, 40,50,60,70,80,90,100] 
let sum1 = num1.reduce((a,b) => a+b)
console.log(sum1);


var arr3 = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
(function(arr) {
    let a;
 for (var i = 0; i < k; i++) {
     a = arr[arr.length-1]
     arr.pop()
     arr.unshift(a)
 }
 console.log(arr)})(arr3);


 var arr4 = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i < arr4.length; i++) {
 console.log(arr4[i][0].toUpperCase() + arr4[i].substr(1));
 }
})();


var arr5 = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function(arr) {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) {
 console.log(arr[i]);
 }}
})(arr5);


(function(str){
str1 = str.split("").reverse().join("");
console.log(str1); 
})("abcd")


var res = function(arr){
let newArr = [];
for(var i=0; i < arr.length; i++){
if(arr.indexOf(arr[i]) === i) {
newArr.push(arr[i]);
} }
console.log(newArr)
}
res(["guvi","geek","guvi","duplicate","geeK"])


var array =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
var final=[]
let new_object = {};
let new_object1 = {};
while(array.length!=0)
{
    var outer_remove = array.shift();
 
 while(outer_remove.length!=0)
 {if(array.length===1){
     var inner_remove = outer_remove.shift()
     var key = inner_remove[0]
     var value =inner_remove[1]
     new_object[key]=value
    }
    else{
    var inner_remove = outer_remove.shift()
     var key = inner_remove[0]
     var value =inner_remove[1]
     new_object1[key]=value
    }
    }
 if(array.length === 1){
     final.push(new_object)
 }else{
     final.push(new_object1)
 }   
}
console.log(final);


var as=[12,34,5,6,2,56,6,2,1];
let d = 0;
var s=as.reduce(function(a,c){
 if(a%2!=0 && c%2!=0)
 {
     d = a+c
 return a+c;
 }else if(a%2!=0){
 return a 
 }else if(c%2!=0){
   return d!=0 ? d+c:c}
else if(d != 0){
       return d
   }else{
       return 0
   }
 });
console.log(s);


aa = data=>{
    var a=data;
    var l='';
   for(i=0;i<a.length-1;i++){
    var s=a[i+1]
    var b=a[i]
    l+=s
    l+=b
    i=i+1
   }
   if((a.length%2)!=0){
    l+=a[a.length-1]
   }
   console.log(l);
   }
   aa("1234");