const div = document.createElement('div');
div.classList.add('container');
const header = document.createElement('header');
const nav = document.createElement('nav');
header.append(nav);
const ul = document.createElement('ul');
nav.classList.add('navbar');
const list = [['Home', 'google.com'], ['Course', 'google.com'], ['About', 'google.com'], ['Contact', 'google.com']];
const menu = list.map(el => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    li.append(a);
    a.textContent = el[0];
    a.setAttribute('href', el[1]);
    return li;
});
for (let li of menu) {
    ul.append(li);
}
nav.append(ul);
header.append(nav);
div.append(header);
document.body.insertAdjacentElement('afterbegin', div);
console.log(div);
/* create image */
const divImg = document.createElement('div');
header.append(divImg);
divImg.classList.add('main-banner');
const img = document.createElement('img');

img.setAttribute('src', "https://media.geeksforgeeks.org/wp-content/uploads/20211022104311/coding.jpeg");
img.setAttribute('alt', "header-image");
divImg.append(img);

// img.classList.add('main-banner');
/* section servise */
const serviceContent = [{
 h2: "Web Designing",
    p: "If you are looking for a way to use your artistic side, web design is a great way to do it.In today's worldlearning how to design websites can be an incredibly useful skill.",
a:"no More"},
{h2: "Web Designing",
p: "If you are looking for a way to use your artistic side, web design is a great way to do it.In today's worldlearning how to design websites can be an incredibly useful skill.",
a:"no More"},
{h2: "Web Designing",
p: "If you are looking for a way to use your artistic side, web design is a great way to do it.In today's worldlearning how to design websites can be an incredibly useful skill.",
a:"no More"},
];

const sectionService = document.createElement('section');
    sectionService.classList.add('service');

    div.append(sectionService);
    
    for(let i = 0;i<3; i++) {
    const sectionCol = document.createElement('section');
    sectionCol.classList.add('col');
    const keyServiceContent=Object.keys(serviceContent[i]);
    const valuesServiceContent=Object.values(serviceContent[i]);
    const h2=document.createElement(keyServiceContent[0]);
    h2.innerHTML=valuesServiceContent[0];
    sectionCol.append(h2);
    const p=document.createElement(keyServiceContent[1]);
    p.innerHTML=valuesServiceContent[1];
    sectionCol.append(p);
    const a=document.createElement(keyServiceContent[2]);
    a.innerHTML=valuesServiceContent[2];
    sectionCol.append(a);
   
// seeviceContent.forEach(ob    j =>{

        
    // } )
    sectionService.append(sectionCol);
}
const h1Service=document.createElement('h1');
h1Service.innerHTML="APSIGNALS";
sectionService.insertAdjacentElement('afterbegin',h1Service);

