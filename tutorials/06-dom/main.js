//console.log('Hello, DOM!');

const header = document.querySelector('#header');
const togglebtn = document.querySelector('#toggle-btn');
const changeColorBtn = document.querySelector('#toggle-color');
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');

togglebtn.addEventListener('click', () =>{

    header.innerHTML = 'You clicked the button!';
}) 

function changetextBtn(){
    if (document.body.classList.contains('dark')) {
        changeColorBtn.textContent = 'switch to light mode';
    } else {
        changeColorBtn.textContent = 'switch to dark mode';
    } 
}

changeColorBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    changetextBtn();
})

img1.addEventListener('click', () => {
    img2.classlist.remove('hidden');
})
