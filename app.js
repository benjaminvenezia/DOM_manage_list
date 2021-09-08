const btns = document.querySelectorAll('#book-list ul li .delete');
//méthode trop coûtese, on attache
//un événement par bouton. 
// btns.forEach(btn => {
//    btn.addEventListener('click', (e) => {
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li);
//    })
// });

//On préférera compter sur l'event Bubbling. 
//On attache l'évenement sur le parent 
//c'est uniquement lorsque l'élément enfant
//sera cliqué, qu'on fera remonter l'évenement.

//delete book
const list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        //on trouve la parent du bouton
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})

//add books 
const addForm = document.forms['add-book'];
addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);

    //create element
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    //append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
})

//hide books

const hideBox = document.getElementById('hide');

hide.addEventListener('change', ()=> {
    if(hideBox.checked) {
        list.style.display = "none";
    } else {
        list.style.display = "initial";
    }
})

//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase(); // texte
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach((book)=>{
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })
})

//tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e)=>{
    if(e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active');
            }else {
                panel.classList.remove('active');
            }
        })
    }
}) 
