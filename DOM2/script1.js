myform=document.querySelector('#addForm')

myform.addEventListener('submit',handleSubmit)
itemsList=document.getElementById('items')
//delete
itemsList.addEventListener('click',removeItem)







function handleSubmit(e)
{
    usertext=document.getElementById('item').value
    e.preventDefault()
 
    li=document.createElement('li')
    li.className='list-group-item'

    
  
  
  
  

   btn=document.createElement('button')
   btn.className='btn btn-danger btn-sm float-right delete'
   btn.appendChild(document.createTextNode('X'))


   z=document.createTextNode(usertext)
   li.appendChild(z)

 
  li.appendChild(btn)
  itemsList.appendChild(li)



//adding discription 
  input2=document.getElementById('item2').value
  mytextNode=document.createTextNode(" "+input2)
  li.appendChild(mytextNode)

  itemsList.appendChild(li)

   
}
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
      if(confirm('are you sure'))
      {
        var li=e.target.parentElement
      itemsList.removeChild( li)
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
  // console.log(mycontent);
  secondContent=item.childNodes[1].textContent
  console.log(secondContent);
  // mycontent=item.secondChild.textContent

  if(mycontent.toLowerCase().indexOf(inputText)!= -1 || secondContent.toLowerCase().indexOf(inputText) != -1)
  {
    item.style.display='block'
  }else{
    item.style.display='none'
  }
})
// console.log(xx ); 
}


// console.log(input2);

