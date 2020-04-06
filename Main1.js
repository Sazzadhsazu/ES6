/*let firstName="sazzad";
 firstName="hossain";
 console.log(firstName);
const SecondName ="Sazu";
 SecondName="sazu"

 console.log(SecondName);

const age=18;
if(age>17){
    const canVote ="people can vote";
    console.log(canVote);
}
console.log(canVot);

{
    let name="Hossain";
    console.log(name);
}


const firstName ="sazu";
const LastName ="anoy";
const age =26;
let HomeTown="Chattagram";

function sayBio(){
    return `my firstName is ${firstName} and my lastName is ${LastName} and my age is ${age} and i born in ${HomeTown}`;
}

console.log(sayBio());


const showCase =`

<p> my firstName is ${firstName.toUpperCase()} and my lastName is ${LastName} and my age is ${age
+1} and i born in ${HomeTown}</p>
`

document.body.innerHTML=showCase;
*/


const firstName ="sazu";
const LastName ="anoy";
const age =26;
let HomeTown="Chattagram";
function modifyy(strings,...values){

   // console.log(strings,values);
   let str="";
   strings.forEach(function(strings,i) {
       str += `${strings} ${values[i]|| ""}`
   });
   return str;
}
const html = modifyy`
<p> my firstName is ${firstName.toUpperCase()} and my lastName is ${LastName} and my age is ${age
    +1} and i born in ${HomeTown}</p>
`
document.body.innerHTML=html;

function Add(num1,num2=7){
    return num1 + num2;
}
  document.write(Add(1)); 
  
  function Add1(num1=5,num2){
    return num1 + num2;
}
  document.write(Add1(undefined,1));

  //Arrow function

  let multi =(num3)=>num3*3;

 console.log( multi(5));

 const self={
     famlyName:"Hossain",
     personAge:25,
     Bio:function(){
         return` my family name ${this.famlyName} and average age of this family members are ${this.personAge}`;
     }

 }
console.log(self.Bio());


// this keyword will not work in arrow function neither using bind and call function
/*
const self1={
    famlyName:"Hossain",
    personAge:25,
    Bio1:()=>{
        return` my family name ${this.famlyName} and average age of this family members are ${this.personAge}`;
    }

}
console.log(self1.Bio1());
*/

//for using map u have to use return keyword unless there is a single parameter
const marks =[49,68,78,56];
console.log(marks);
const dblMarks=marks.map(mark=>{
    return mark *4
})
console.log(dblMarks);
/*
const marks2 =[49,68,78,56];
console.log(marks2);
const dblMarks2=marks2.map(mark=>{
    return mark *4
})
console.log(dblMarks2);
/// foreach 
const mark1 =[149,268,378,456];
let dbl=[];
const dblMark1=marks.forEach(book => {
    dbl.push[book*2];
});
console.log(dblMark1);
*/

const mark5 =[49,68,78,56];

const dblMark5=mark5.findIndex(mark=>mark >=78);
const dblMark6=mark5.every(mark=>mark >=78);
const dblMark7=mark5.some(mark=>mark >=78);
const dblMark8=mark5.filter(mark=>mark >=78);
console.log(dblMark5);
console.log(dblMark6);
console.log(dblMark7);
console.log(dblMark8);

const result =marks.reduce((sum,number) => {
    return sum+=number;
},0);

console.log(result);



