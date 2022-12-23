// mainheader=document.getElementById('main-header') 
// mainheader.style.border='2px solid black' 
 
// titlechange=document.querySelector('.title') 
// console.log(titlechange); 
// titlechange.style.color='green' 
// titlechange.style.fontWeight='bold'


// liList=document.getElementsByClassName('list-group-item')
// liList[2].style.backgroundColor='green'

// for(i=0;i<liList.length;i++)
// {
//     liList[i].style.fontWeight='bold'
// }
// console.log(liList);

// newli=document.getElementById('myid')
// console.log(newli);
// newli.textContent='added li'

// newliclass=document.getElementsByClassName('mylist-group-item')
// for(i=0;i<newliclass.length;i++){
// newliclass[i].style.color='red'
// }

// queryli=document.querySelectorAll('.list-group-item')
// console.log(queryli);



// secondItem=document.querySelector('.list-group-item:nth-child(2)')

// secondItem.style.color='red'

// thirdItem=document.querySelector('.list-group-item:nth-child(2)')
// thirdItem.style='display:none'



console.log("------------------------------------------------------");






itemsList=document.querySelector('#items')
// a=itemsList.parentNode
// console.log(a);

// a=itemsList.childNodes
// console.log(a);

// a=itemsList.children

// console.log(a);
// a[2].style.backgroundColor='blue'
// console.log(a.firstChild); 
// console.log(itemsList.firstElementChild.style.color='red');
// itemsList.lastElementChild.style.color='red'
// console.log(itemsList.nextSibling); 
// console.log(itemsList.nextElementSibling); 

// console.log(itemsList.previousSibling); 
// console.log(itemsList.previousElementSibling.style.color='red');  

// var newDiv=document.createElement('div')

// newDiv.className="myclass"
// newDiv.id="myid"

// newDiv.setAttribute('title',"first title")

// textNode=document.createTextNode('hello world')

// newDiv.appendChild(textNode)
// console.log(newDiv);

// container=document.querySelector('header .container')
// console.log(container);    //selecting class container inside header tag

// var h1=document.querySelector('header h1 ')
// console.log(h1);
// container.insertBefore(newDiv,h1)

// console.log(newDiv);



var newDiv=document.createElement('div')

newDiv.className="myclass"
newDiv.id="myid"

newDiv.setAttribute('title',"first title")

textNode=document.createTextNode('hello world')

newDiv.appendChild(textNode)
console.log(newDiv);

container=document.querySelector('ul')
// var li_first=document.querySelectorAll('')



li_first=container.firstElementChild

container.insertBefore(newDiv,li_first)
console.log(li_first); 
