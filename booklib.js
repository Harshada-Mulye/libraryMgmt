// var titles=document.getElementsByClassName('title');
// //convert titles into array

// Array.from(titles).forEach((item)=>{
//     console.log(item);
// })

//  const wmf=document.querySelector('#book-list li:nth-child(2) .name');
//  console.log(wmf);
// var books=document.querySelectorAll('#book-list li .name');
// books.forEach((book)=>{
//     book.innerHTML='<h2>Hello</h2>'
// })

// const banner=document.querySelector("#page-banner")
// console.log('#page-banner node type is',banner.nodeType);
// console.log('#page-banner node name is',banner.nodeName);
// console.log('#page-banner node has name is',banner.hasChildNodes());
// const bookList=document.querySelector('#book-list')
// console.log("next element sibling is",bookList.nextElementSibling);
// console.log("next  sibling is",bookList.nextSibling);
// const h2=document.querySelector('#book-list h2');
// h2.addEventListener('click',(e)=>{
//     console.log(e.target);
//  if(e.ctrlKey)
//  {
//      console.log('hello');
//  }
//  else{
// console.log('bye');
//  }
//     console.log(e);

// })

// var btns=document.querySelectorAll('#book-list .delete');
// btns.forEach((btn)=>{
//     btn.addEventListener('click',(e)=>{
//         const li=e.target.parentElement;
//         console.log(li);
//         li.parentElement.removeChild(li);
//     })

// })

const list=document.querySelector("#book-list ul")
console.log(list);
list.addEventListener('click',(e)=>{
    if(e.target.className=='delete'){
        const li=e.target.parentElement;
        list.removeChild(li);
    }
})

const addForm=document.forms['add-book'];
console.log(addForm);
addForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const value1=addForm.querySelector('input').value;
    console.log(value1)

    const li=document.createElement("li");
    const bookName=document.createElement('span');
    const deleteBtn=document.createElement('span');
    deleteBtn.textContent='Delete';
    bookName.textContent=value1;
    deleteBtn.classList.add('delete');
    li.appendChild(bookName);
    li.appendChild(deleteBtn)
    list.appendChild(li);
})

const searchForm=document.forms['search-books']

const searchBar=searchForm.querySelector('input');
searchBar.addEventListener('keyup',(e)=>{
    console.log("hi");
 const term=e.target.value.toLowerCase();
 const books=document.getElementsByTagName("li")
 Array.from(books).forEach((book)=>{
     const title=book.firstElementChild.textContent
     
     if(title.toLowerCase().indexOf(term)!=-1)
     {
         book.style.display='block';
     }else{
        book.style.display='none';
     }
 })
})

const hideBox=addForm.querySelector("#hide");
//console.log(hideBox);
hideBox.addEventListener("change",(e)=>{
    if(hideBox.checked){
        list.style.display="none"
    }
    else{
        list.style.display="initial"
    }
})

const tabs=document.querySelector('.tabs')
//console.log(tabs);
const panels=document.querySelectorAll('.panel')
//console.log(panels);
tabs.addEventListener('click',(e)=>{
if(e.target.tagName=="LI")
{
    //console.log("hi");
    const targetPanel=document.querySelector(e.target.dataset.target)
   console.log(targetPanel);
   panels.forEach((panel)=>{
       if(panel==targetPanel)
       {
          
           panel.style.display='block';
           panel.classList.add('active')
       }else{
           panel.classList.remove('active')
       }
   })

   
}
})

