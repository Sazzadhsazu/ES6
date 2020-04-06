//discuss about let and const


 /*
let firstName="sazzad";
 firstName="hossain";

const SecondName ="Sazu";
 SecondName="sazu"
 console.log(firstName);
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


*/
// Template string  //template 
/*
const firstName="sazzad";
const lastName="Hossain";
const age=15;
const profession ="student";


function sayBio(){
    return 'my name is '+ firstName+ " " + lastName + " and i am "+ age+ " i am a"+ profession;
};
console.log(sayBio());

function showBio(){
    return `my name is ${firstName} ${lastName} and i am ${age+3} i am a ${profession}`;
}
console.log(showBio());

const html=`
<h1>header</h1>
<p>i am a student</p>
<p>my name is ${firstName.toUpperCase()} ${lastName} and i am ${age+3} i am a ${profession}
</p>
`;
document.body.innerHTML=html;


// Template tagging

const firstName="sazzad";
const lastName="Hossain";
const age=15;
const profession ="student";

const html=modify`
<h1>Header</h1>

<p> my name is ${firstName} ${lastName} and i am ${age} and I am a ${profession}</p>`;
document.body.innerHTML=html;

function modify(strings,...values){
    //console.log(arguments);
   // console.log(strings,values);
   let str =""
   strings.foreach(function(string,i ){
      str+=`${string}${values[i]}`
   })
   return str;
}
*/

/*
//function arguments
function add(num1,num2){
    return num1 +num2;
}
console.log( add(1,2));

function add1(num1,num2=3){
    return num1 +num2;
}
console.log( add1(1));
//function expression
const add2= function(num1=5,num2){
    return num1 +num2;
}
console.log( add2(undefined,2));

//arrow function || used only for single expression

//const add4=(nam1=2)=>nam1+3;
//console.log(add4(undefined))

const add5=nam1=>nam1+3;
console.log(add5(1))

const self ={
    FN:"sazzad",
    ages:26,
    BiO:function(){
        return ` i am ${this.FN} and my age is ${this.ages}`;

    }
}
console.log(self.BiO())

*/

// Array Helper  ||Map ||ForEach

const marks=[70,80,92,95,100]

//const doubleMarks=marks.map(mark=>{
   // return mark*2});
    console.log(marks);
    //console.log(doubleMarks);
 
    // foreach Helper
 
    let dblMark=[];
    marks.forEach(mark=>{
       dblMark.push(mark *2);
    });
    console.log(dblMark)

 // find Helper

  const result= marks.find(mark=>mark>=90);
    console.log(result);

    //findIndex Helper
    const result1= marks.findIndex(mark=>mark>=90);
    console.log(result1);  
    
    // every Helper
    const result2= marks.every(mark=>mark>=90);
    console.log(result2);

    // some Helper
    const result3= marks.some(mark=>mark>=90);
    console.log(result3);
  // filter Helper

  const result4= marks.filter(mark=>mark>=90);
    console.log(result4);

    //reduce helper

    const total =marks.reduce((sum,number)=>{
        return sum+=number;
    },0);
    console.log(total);

    //rest and Spread

    Myprople=['firstName','lastName',25,"webDveloper"];
   // Myprople.push("jobless");
   //spread operator
   //const updateMyProle=[...Myprople,"jobless"]
   const againupdateMyProle=["unmarried"];
   const updateMyProle=[...Myprople,"jobless",...againupdateMyProle]
    console.log(updateMyProle);

    const FirstName ="sazzad";
    const updatedName=[...FirstName];
    console.log(updatedName);

    







