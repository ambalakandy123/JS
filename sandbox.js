// let radius = 10;
// let pi = 3.14;

// let result = pi * radius**2;

// console.log(result);

// let likes = 10; 

// likes += 10;

// console.log(likes);

// const title = " Best reads of 2019";
// const author = " Mario";
// const likes = 30;

// // let result = ' the blog has ' + likes + 'likes';
// // console.log(result);

// let html = ' <h2>${title}</h2>';

// console.log(html);

// let ninjas =['shaun', 'ruy', 'Duck'];

// let result = ninjas.push('ken');
// result = ninjas.pop();
// console.log(ninjas);

// console.log(true, false, "true", "false");

// let email = 'ranjith_ak81@yahoo.com';
// let result = email.includes('@');
// console.log(result);

// let age = 25;

// console.log(age == 25);
// console.log(age <= 39);
// console.log(age > 20);
// console.log(age<20);
// console.log(age != 50);

// let name = 'ranji'

// console.log(name == 'Ranji');
// console.log(name > 'Ranji');
// console.log(name > 'Cristy');


//For loops

// for (let i = 0; i<5; i++){
//     console.log('in loop:', i)
// }

// console.log('loop finished');

// const names =['kris', 'manio', 'julit', 'marko'];

// for(let i=0; i<names.length; i++){
//     // console.log(names[i]);
//     let html = '<div>${names[i]}</div>';
//     console.log(html);
// }

// while loops

// let i =0;

// while (i<6){
//     console.log('in loop:', i);
// }


// const names =['kris', 'manio', 'julit', 'marko']

// let i = 0;

// while(i <names.length){
//     console.log(names[i]);
//     i++;
// }

// let i = 0;
// while(i<5){
//     console.log("in loop:", i);
//     i++;
// }

// let i = 1; 

// do{
//     console.log('Value of i is:', i);
//     i++;
// }while (i<5)



// const age = 23;

// if (age< 40){
//     console.log('you are still young and you can still make it')
// }

// const password = 'p@ss';

// if(password.length <= 2){
//     console.log('that password is not long enough!');
// }

// else if(password.length >=8){
//     console.log('that password is dope!')
// }
// else{
//  console.log('the password is perfect');
// }

// const password = 'pasword';

// if (password.length >= 12 && password.includes('@')){
//     console.log('that password is mighty strong');
// }
// else if (password.length >=8 || password.includes('@') && password.length >=5){
//     console.log('the password is ok')
// }
// else{
//     console.log('passoword failed')
// }

// let user = false;
// if(!user){
// console.log("you must log in for the data!")
// }

// console.log(!true);
// console.log(!false);

// const scores =[50, 25, 0, 30, 100, 20, 10]

// for(let i = 0; i<scores.length; i++){

//     if(scores[i] === 0 ){
//         continue; 
//     }

//     console.log('your score: ', scores[i]);

//     if (scores[i] === 100){
//         console.log('congrats you scored well')
//         break;
//     }
// }

// const grade = 'A';

// switch(grade){
//     case 'A':
//         console.log('you got an A!');
//         break; 
//     case 'B':
//         console.log('you got an B!');
//         break;
//     case 'C':
//         console.log('you got an C!');
//         break;
//     case 'D':
//         console.log('you got an D!');
//         break;
//     default:
//         console.log('not a valid grade');
// }

// let age=30;
// if(true){
//     let age = 40;
//     let name = 'ranjith'
//     console.log('inside code block: ', age, name);

//     if(true){
//         const age = 50;
//         console.log('inside 2nd block: ', age);
//     }
// }
// console.log('outside code block: ', age, name);

//function declaration

// function greet(){
//     console.log('hello there');
// }
// function expression

// const speak = function(name, time){
//     console.log(`good ${time} ${name}`);
// };

// // greet();
// speak('tommy', 'morning');

// const calcArea = function(radius){
//      return 3.14 * radius ** 2; 
    
// }

// arrow funtion

// const calcArea = (radius) => 3.14 * radius ** 2

// const a = calcArea(5);
// console.log(a);

//arrow function practice
// const greet = () => 'hello world'

// const b = greet();
// console.log(b)

// const bill = function(product, tax){
//     let total = 0;
//     for(let i=0; i < product.length; i++){
//         total += product[i] + product[i] * tax;
//     }
//     return total; 
// }

// console.log(bill([10, 15, 30], 0.2));