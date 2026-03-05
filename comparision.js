//Normal conversion
console.log(1>=2);
console.log(1<=2);
console.log(1==2);
console.log(1>2);
console.log(1<2);


console.log("2">1);//here datatype is not compared only number is compared 
//== no datatype is compared
console.log("2"==2)
//=== strict operator datatype is also checked
console.log("2"===2)


console.log(null>0)//false is obtained as output
console.log(null<0)//false is obtained as output
console.log(null==0)//false is obtained as output
console.log(null>=0)//here null is treated as number hence output obtained will be true


console.log(undefined>0);//false is obtained as output
console.log(undefined==0);//false is obtained as output
console.log(undefined<0);//false is obtained as output
console.log(undefined>=0);//false is obtained as output

