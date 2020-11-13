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


// For loops

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

// function declaration

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

// arrow function practice
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
// const bill =(products, tax) =>{
//     let total = 0;
//     for(let i=0; i<products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total; 
// };

// console.log(bill([10,15,30], 0.2));


// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     return area; 
// }

// const area = calcArea(5);
// console.log(area);

// function greet(){
//     console.log("hello world")
// }
// greet();

// const speak = function(){
//     console.log("blah blah");
// };
// speak();

// const speak = function(name, time){
//     console.log(`good ${time} ${name}`);

// };
// speak('ranjith', 'morning');

// const calcArea = function(radius){
//     return 3.14 * radius ** 2;
     
// }

// const area = calcArea(5);
// console.log(area);

// const calcArea = radius => 3.14 * radius **2;

// const area = calcArea(5);
// console.log('area is:', area);

// const greet = () => 'hello world';
// const result = greet();
// console.log(result);

// const bill = function (product, tax){
//     let total = 0; 
//     for (let i=0; i< product.length; i++){
//     total += product[i] + product[i] * tax; 
// }
// return total; 
// }

// console.log(bill([10,15,30],0.2))

// const bill =(product, tax)=>{
//     let total =0;
//     for(let i=0; i< product.length; i++){
//         total += product[i]+ product[i] * tax; 
//     }
//     return total 
// };
// console.log(bill([10,15,30],0.2))

// const name = 'ranjith';

// //function
// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// //methods
//  let resultTwo = name.toUpperCase();
//  console.log(resultTwo);

// callbacks & foreach
// const myFunc = (callbackFunc) => {
//     let value =50; 
//     callbackFunc(value);
// };

// myFunc(value=>{
//     console.log(value);
// });
//  let people=['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

//  const logPerson =(person, index) => {
//      console.log(`${index} - hello ${person}`);
//  }

//  people.forEach(logPerson);

// const ul = document.querySelector('.people');
// let people=['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
// let html =``;
// people.forEach((person) =>{
    
//     html += `<li style="color: purple">${person}</li>`;

// });

// console.log(html);
// ul.innerHTML = html;

// let user = {
//     name: 'johnWick',
//     age: 39,
//     email:'johnwick@comicado.co.us',
//     location:'anonymous',
//     mission:['high table politics with gun','Love the dogs']
// };

// console.log(user);
// console.log(user.name);

// console.log(user['email']);
// user['name'] = 'hauo sang';
// console.log(user['name']);

// console.log(typeof user);


// let user = {
//         name: 'johnWick',
//         age: 39,
//         email:'johnwick@comicado.co.us',
//         location:'anonymous',
//         mission:['high table politics with gun','Love the dogs'],
//         login(){
//             console.log('the user logged in');
//         },
//         logout(){
//             console.log('the user logged out')
//         },
//         logBlogs(){
//             // console.log(this.mission)
//             console.log('this user has finished the mission:');
//             this.mission.forEach(missions => {
//                 console.log(missions);
//             });
//             // console.log(this);
//         }
//     };
//     user.logBlogs();
//     console.log(this);

// const mission =[

// ];

// console.log(mission);
//     let user = {
//         name: 'johnWick',
//         age: 39,
//         email:'johnwick@comicado.co.us',
//         location:'anonymous',
//         mission:[
//             {title: 'why the rules are so important', likes:30},
//             {title: '10 things you should remember always',likes:50}
//         ],
//         login(){
//             console.log('the user logged in');
//         },
//         logout(){
//             console.log('the user logged out')
//         },
//         logBlogs(){
//             // console.log(this.mission)
//             console.log('this user has finished the mission:');
//             this.mission.forEach(missions => {
//                 console.log(missions.title, missions.likes);
//             });
//             // console.log(this);
//         }
//     };
//     user.logBlogs();
//     console.log(this);


// Math objects

//     console.log(Math);
//     console.log(Math.PI);

//     const area=7.7;

//     console.log(Math.round(area));
//     console.log(Math.exp(area));
//     console.log(Math.floor(area));
//     console.log(Math.ceil(area));

//     const random = Math.random();
//     console.log(random);
//     console.log(Math.round(random * 100));
// Premitive 
// let scoreOne = 50;
// let scoreTwo  = scoreOne;

// console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);

// scoreOne = 100; 
// console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);

// reference 

// const userOne = { name: 'ranjit', age: 30};
// const userTwo = userOne;

// console.log(userOne, userTwo);

// userTwo.age = 40;
// console.log(userOne, userTwo);

// const para = document.querySelector('.error')

// console.log(para);

// const para = document.querySelector('div.error')

// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');
// console.log(errors);
// console.log(paras[2]);

// get element by id

//     const title = document.getElementById('page-title');
//     console.log(title);

// //get element by their class 

//     const errors = document.getElementsByClassName('error');
//     console.log(errors);
//     console.log(errors[0])

// get name by their tag name

//     const paras = document.getElementsByTagName('p');
//     console.log(paras);
//     console.log(paras[0]);


// const para = document.querySelector('p');
// console.log(para.innerText);

// para.innerText = 'ninjas are awesome';
// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });


// const content = document.querySelector('.content');
// console.log(content.innerHTML);

// content.innerHTML = '<h2> this is ane H2</h2>';

// const people = ['mario', 'jack', 'Rodrigauz'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// })

// const link =document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.facebook.com');
// link.innerText = 'The place where you can advertise';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style','color:Red');

// const title = document.querySelector('h1');
// title.setAttribute('style', 'margin:50px;s');
// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'green';
// title.style.fontSize = '60px';

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');

// const paras = document.querySelectorAll('p');

// paras.forEach(p =>{
//     if(p.textContent.includes('error')){
//         p.classList.add('error')
//     }
//     if(p.innerText.includes('success')){
//         p.classList.add('success')
//     }
//     console.log(p.textContent);
// });

// const title = document.querySelector('.title')
// title.classList.toggle('test');
// title.classList.toggle('test');
// for loops
// for(let i=0; i < 5 ; i++){
// console.log('in loop: ', i);
// }
// console.log('loop finished');

// const names =['ranji', 'krish', 'priya', 'suju'];
// for(let i=0; i <names.length; i++){
//     //console.log(names[i]);
//     let html =`<div>${names[i]}</div>`;
//     console.log(html);
// }

// while loops
// let i =0;
// while(i < 5){
//     console.log('log loop: ', i);
//     i++;
// }
// const names = ['ranji', 'rando', 'anzia'];
// i=0;
// while( i< names.length){
//     console.log(names[i]);
//     i++;
// }
// do while loop
// let i=0;
// do{
//     console.log('val of i is:', i);
//     i++
// }while (i < 5);

// if statements

// const age = 23;

// if(age > 20){
//     console.log("you are over 20 years old");
// }

// const ninjas = ['shaun', 'riya', 'maho', 'luci'];

// if(ninjas.length > 3){
//     console.log("that is a lot of ninjas");
// }

// const password = 'pajgflsihhgj';
// if(password.length >= 12 ){
//     console.log('that password is mighty strong');
// }
// else if(password.length >=8){
//     console.log('the password is long enough');
// }else{ 
//     console.log('Password streangth is poor u will loose');
// }

// logical operator - OR || and AND &&

// const password = 'a@cdddd';

// if (password.length >= 12 && password.includes('@')){
//     console.log('the password is mighty strong');
// } else if(password.length >= 8 || password.includes('@') && password.length >5){
//     console.log('the password is strong');
// }else{
//     console.log('the password is too weak');
// }

// logical NOT(!)

// let user = false;
// if(user){
//     console.log('the csondition is :', user);
// }
// console.log(!true)
// console.log(!false)

// break and continue
// const scores = [50,20,30, 25, 10, 0, 100];

// for(let i = 0; i < scores.length; i++){

//     if (scores[i] === 0){
//         continue;
//     }
//     console.log('your score: ', scores[i]);

//     if (scores[i]==100){
//         console.log('congrats, you got the top score');
//         break;
//     }
// }
// switch statement

// const grade = 'C';

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
//     default:
//         console.log('The grade is not valid');
// }
// function 
// const speak = function (name = 'krishna', time= 'morning'){
//     console.log(`good ${time} ${name}`);

// };
// speak();

// const calcArea = function(radius){
//     let area = 3.14* radius ** 2;
//     return(area);
// }

// const a = calcArea(5);
// console.log(a);

// const calcArea = radius => 3.14 * radius ** 2;

// const a = calcArea(5);
// console.log(a);

// const bill = (product,tax)=>{
//     let total = 0;
//     for(let i=0; i < product.length; i++){
//         total += product[i]+product[i] * tax;
//     }
//     return total; 
// };

// console.log([10,15,30],0.2);

// const myFunc = (callbackFunc)=> {
//     let value =39;
//     callbackFunc(value);
// };
// myFunc(function(value){
//     console.log(value);
// });
// callbacks & foreach

// let people = ['kario', 'lukiyo', 'nasto', 'franko'];

// // people.forEach((person, index)=>{
// //     console.log(index, person);
// // });

// const persona = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };

// people.forEach(persona);

// const ul = document.querySelector('.people');

// const people = ['kario', 'lukiyo', 'nasto', 'franko'];
// let html =``;

// people.forEach(function(person){
//     html += `<li style="color: purple">${person}</li>`
// });

// console.log(html);
// ul.innerHTML = html;

// let user = {
//     name: 'ranjith',
//     age: 30,
//     email:'ranjith.ra28@gmail.com',
//     location:'Brisbane',
//     blogs: ['why the JS rule the web', 'benefits of react.js framework'],
//     login: function(){
//         console.log('the user logged in');
//     },
//     logout: function(){
//         console.log('the user logged out');
//     },
//     logBlogd: function(){
//         console.log('this user has written the following blogs: ')
//         this.blogs.forEach(blog => {
//             console.log(blog);
//         })
//     }
// };

// console.log(user);
// console.log(user.name);

// console.log(user.age);
// console.log(user['email']);
// user['name'] = 'chun-li';
// user.age = 28;
// console.log(typeof name);

// user.login();
// user.logout();
// user.logBlogd();
// console.log(this);

// let user = {
//     name: 'ranjith',
//     age: 28,
//     email: 'ranjith.ra28@gmail.com',
//     blogs: ['build things that can help people', 'build something cool and useful'],
//     login: function(){
//         console.log('user logged in');
//     },
//     logout: function(){
//         console.log('user logged out');
//     },
//     logBlogs: function(){
//         console.log('this user wrote all this blog');
//         this.blogs.forEach(blog =>{
//             console.log(blog);
//         })
//     }
// };

// user.logBlogs();

// let user = {
//     name: 'ranji',
//     age: 30,
//     email:'ranjith.ra28@gmail.com',
//     location:'brisbane',
//     blogs:['top 10 conding languages to learn','the top 10 frame works to learn' ],
//     login: function(){
//         console.log('the user is loged out');
//     },
//     logout: function(){
//         console.log('the user is loged out');
//     },
//     logBlogs: function(){                                //we cannot use the arrow function here because it wornt change the object value.
//         console.log('the author mentioned about:');
//         this.blogs.forEach(blog =>{
//             console.log(blog);
//         })
//     }
// };

// user.logBlogs();
// let user ={
// blogs: [
//     {title:' why the JavaScript is powerful', likes: 30},{title:'10 things to learn in javascript,',likes:50},
// ],

// logBlogs(){
// console.log('the other wrote about these topics');
// this.blogs.forEach(blog =>{
//     console.log(blog.title, blog.likes)
// })

// }
// };

// user.logBlogs();

