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

const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML = '<h2> This is a new sub-heading</>'

const people = ['yoko', 'zochi', 'pakiao'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
})