// const para = document.querySelector('div.error');

// console.log(para);

// const paras = document.querySelectorAll('p');

// console.log(paras[2]);

// const title = document.getElementById('page-title');
// console.log(title);

// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

// const para = document.querySelector('p')
//console.log(para.innerText)
// para.innerText += ' Developers are awesome';

// const paras = document.querySelectorAll('p');

// paras.forEach(para =>{
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML = '<h2> This is a new sub-heading</>'

// const people = ['yoko', 'zochi', 'pakiao'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`
// })

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href','creativeMinds.com');
// link.innerText = 'The creative website';

// const title = document.querySelector('h1');
// title.setAttribute('style', 'margin:50px;');
// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '80px';
// title.style.color ='green';

// console.log(title.style.color);

// const content = document.querySelector('p');
// console.log(content.classList);

// const paras = document.querySelectorAll('p');

// paras.forEach(p =>{
//     if(p.textContent.includes('error')){
//         p.classList.add('error');
//     }
//     if(p.innerText.includes('success')){
//         p.classList.add('success');
//     }
// });

// const title = document.querySelector('.title');
// title.classList.toggle('test');
// title.classList.toggle('test');

// const article = document.querySelector('article')
// console.log(article.children);
// console.log(Array.from(article.children));
// console.log(article.children);

// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
// });

// const title = document.querySelector('h2');
// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);
//chaining
// console.log(title.nextElementSibling.parentElement.children);

// const button = document.querySelector('button');
// button.addEventListener('click', ()=>{
//     console.log('you clicked the hell out of me!')
// }) 

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', () =>{
//         console.log('item clicked');
//     })
    
// });


// const button = document. querySelector('button');

// button.addEventListener('click', () =>{
//     console.log('you cliked me')
// });

// const link = document.querySelector('li');

// link.addEventListener('click',  () => {
//     console.log('it is working');
// });

// const items = document.querySelectorAll('li');

// items.forEach(item =>{
//     item.addEventListener('click', () =>{
//         console.log('it is working')
//     });
// });

// const items = document.querySelectorAll('li');

// items.forEach(item =>{
//     item.addEventListener('click', e =>{
//         // console.log(e);
//         // console.log(e.target);
//         e.target.style.textDecoration = 'line-through';
//     });
// });
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
// button.addEventListener('click', () =>{
//     const li = document.createElement('li');
//     li.textContent = 'somethin new todo';
//     // ul.append(li);
//     ul.prepend(li);
// });

// const items = document. querySelectorAll('li');
// items.forEach(item =>{
//     item.addEventListener('click', e =>{
//         console.log('event in LI');
//         e.stopPropagation();
//         e.target.remove();
//     })
// })

// ul.addEventListener('click', e =>{
//     // console.log('event in ul tag');
//     if(e.target.tagName === 'LI'){
//         e.target.remove();
//     }
// });

// const copy = document.querySelector('.copy-me');

// copy.addEventListener('copy', () =>{
//     console.log("this is my content and copyright")
// });

// const box = document.querySelector('.box');

// box.addEventListener('mousemove', e =>{
//     // console.log(e);
//     // console.log(e.offsetX, e.offsetY);
//     box.textContent = `x pos - ${e.offsetX} y pos- ${e.offsetY}`;
// });

// document.addEventListener('wheel', e => {
//     // console.log(e);
//     console.log(e.pageX, e.pageY);
// })

const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button.addEventListener('click', () =>{
    popup.style.display ='block';
});

close.addEventListener('click', ()=>{
    popup.style.display = 'none';
})

popup.addEventListener('click', ()=>{
    popup.style.display = 'none';
})