var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);


var numsArr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string1 = "";
for (var i = 0; i < 11; i++) {
    if(i === numsArr1.length-1){
        new_string1 += numsArr1[i]
    }else{
 new_string1 += numsArr1[i] + ","}
}
console.log(new_string1);


var numsArr2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string2 = "";
for (var i = numsArr2.length-1; i >= 0; i -- ) {
    if(i === 0){
        new_string2 += numsArr[i] + " "
    }else{
        new_string2 += numsArr[i] + " "
} 
}
console.log(new_string2);


var numsArr3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr3[i] %2 == 0 )
 {
 numsArr3[i] = "even"
 }
}
console.log(numsArr3);


var numsArr4 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(i %2 == 0 )
 {
 numsArr4[i] = "even"
 }
}
console.log(numsArr4);


var numsArr4 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <=10; i++) {
 sum += numsArr4[i]
}
console.log(sum);


var numsArr5 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum1=0;
for (var i = 0; i <10; i++) {
 if(numsArr5[i]%2==0){
 sum1 += numsArr5[i]}
}
console.log(sum1);


var numsArr6 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum2=100;
for (var i = 0; i <=10; i++) {
 if(numsArr6[i]%2==0)
 {
 sum2 += numsArr6[i]
 }
else{
 sum2 -= numsArr6[i]
 }
}
console.log(sum2);


var numsArr7 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr7.length; i++){
    console.log( numsArr7[i])
}


var numsArr8 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr8.length; i++) {
 var inner_array = numsArr8[i]
 for(var j = 0 ; j < inner_array.length;j++ ){
     str_all +=inner_array[j]
 }
}
console.log(str_all);


var numsArr9 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr9.length; i++) {
 var inner_array = numsArr9[i];
 for(var j = 0 ; j < inner_array.length; j++ ){
      if(j %2 == 0 )
      {
         inner_array[j] = "even"
       }
    }
}
console.log(numsArr9);


var numsArr10 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all1="";
for (var i = numsArr10.length-1; i >= 0 ; i--) {
 var inner_array = numsArr10[i];
 for(var j = inner_array.length-1; j >= 0 ;j-- ){
    if(j===0 ){
        str_all1 +=inner_array[j] 
    } else if(i === 0 && j === inner_array.length-1){
        str_all1 +=" " + inner_array[j] +" "
    }
    else{
         str_all1 +=inner_array[j] +" "
     }
}
}
console.log(str_all1);


var numsArr11 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr11.length; i++) {
 var inner_array = numsArr11[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(inner_array[j]%2!=0)
 {
 sum_odd += inner_array[j]
 }
 else
 {
 sum_even += inner_array[j]
 }
}
}
console.log(sum_odd);
console.log(sum_even);