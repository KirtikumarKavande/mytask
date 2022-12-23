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