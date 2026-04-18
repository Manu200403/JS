const name="Manu"
const usn=63
console.log(name+usn);//not used dat regularly
console.log(`My name is ${name} and my usn is ${usn}`);//use this frequently

//Other way of declaring string
const subject=new String('Java_Script')
console.log(subject[3]);
console.log(subject.length);
console.log(subject.charAt(3));
console.log(subject.toUpperCase());
console.log(subject.toLowerCase());
console.log(subject.indexOf('a'));
 const newstring=subject.substring(0,3);//ignores '-'values only starts with 0 
 console.log(newstring);

 const anotherstring=subject.slice(0,4);
 console.log(anotherstring);

const otherstring=subject.slice(-11,4);//11-11=0->start and end=4 output wull be printed from 0-4
 console.log(otherstring);

const space="   No Sapce  "
 console.log(space.trim());

 const url="https://google.com/youtubefree"
 console.log(url.replace('free','Premium'));//free replaced to premium

 
console.log(subject.split('_'));
