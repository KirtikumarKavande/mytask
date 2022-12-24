myform=document.querySelector('#addForm')

myform.addEventListener('submit',handleSubmit)
itemsList=document.getElementById('items')
//delete
itemsList.addEventListener('click',removeItem)

console.log(itemsList);

function handleSubmit(e)
{
    usertext=document.getElementById('item').value
    e.preventDefault()
    console.log('1')
    li=document.createElement('li')
    li.className='list-group-item'
  
   z=document.createTextNode(usertext)
   li.appendChild(z)
  
  

   btn=document.createElement('button')
   btn.className='btn btn-danger btn-sm float-right delete'
   btn.appendChild(document.createTextNode('X'))

 
  li.appendChild(btn)
  itemsList.appendChild(li)

   
}
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
      if(confirm('are you sure'))
      {
        var li=e.target.parentElement
      itemsList.removeChild(li)
      }
    }
}

//filter
firstElement=document.getElementsByClassName('list-group-item')
var filter=document.getElementById('filter')
filter.addEventListener('keyup',filterItems)

function filterItems(e)
{
inputText=e.target.value.toLowerCase()
items=document.getElementsByTagName('li')
xx=convertedToarray=Array.from(items)
xx.forEach((item)=>{

  mycontent =item.firstChild.textContent
  console.log(mycontent);
  if(mycontent.toLowerCase().includes(inputText))
  {
    item.style.display='block'
  }else{
    item.style.display='none'
  }
})
// console.log(xx ); 
}