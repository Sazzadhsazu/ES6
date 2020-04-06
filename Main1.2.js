const users =[
    {
        id: 1,
        name: "Leanne Graham",
        address: {
        street: "Kulas Light",
        },
        phone: "1-770-736-8031 x56442",
        comments:"asddaskfjkjasdkjkasdjfkjklasdjlkajjdsklajkljasdfjsdfaaljhasdfjhsdfhjkasdfjgwerbwegugweg",
        },
        
        {
        id: 1,
        name: "Leanne Graham",
        address: {
        street: "Victor Plains",
        },
        phone: "010-692-6593 x09125",
        comments:"immutable object is once it loads it cant be change later internally or externally. 1st step: turn of set option in property.2nd step: use constructor and 3rd step: use readonly in property.",

        },
];
const Id=1;
const findUser = users.find(user=>user.id==Id);
console.log(findUser);

const findUserComments = users.filter(user=>user.name==findUser.name).map(comment=>`<p>${comment.comments}</p>`).join(", ").replace(/,/, " ");
document.body.innerHTML=findUserComments;
console.log(findUserComments);

// spread operator

const grocaries=["Bread","Banana"];
 //grocaries.push("milk");
 const updatedGrocaries =[...grocaries,"milk"];
 const anotherupdatedGrocaries=[...updatedGrocaries,"butter"];
 console.log(anotherupdatedGrocaries);

 //rest operator

 function myBio(firstName,lastName, ...values){
     return{     
     firstName:firstName,
     lastName: lastName,
     rest:[...values,"age"]
 };
 }  
 console.log(myBio("sazzad","Hossain","student","jobless"));


 //Destructuring 

 const grocaries1=["Bread","Banana","sazzad","Hossain",26];

// const [fruit]=grocaries1;
//const [,,name]=grocaries1;  //this is called array destructuring
const [,,,,age]=grocaries1;
 console.log(age);

 const post ={
    firstName:"sazzad",
    lastName: "hossin",
    rest:{
        values:true,
        standard:"higher"
 }
 }

 //const {lastName}=post;
 //console.log(lastName);
 const {standard} = post.rest; //this is called object destructuring
 console.log(standard);
