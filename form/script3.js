function getValue(event)
{
//   console.log(event)
    event.preventDefault()

    // localStorage.setItem('name',event.target.username.value)
    // localStorage.setItem('email',event.target.email.value)
    // localStorage.setItem('phone',event.target.phone.value)
    // localStorage.setItem('time',event.target.time.value)


    myobj={
        name:event.target.username.value,
        email:event.target.email.value,
        phone:event.target.phone.value,
        time:event.target.time.value
    }
    
    axios.post("https://crudcrud.com/api/56d6b523494341ac9c057ccde2988b79/appoinment",myobj)
   .then((res)=>{
console.log(res)
   })
   .catch((err)=>{
    console.log(err)
   })
    // localStorage.setItem(myobj.email,JSON.stringify(myobj))
    
// console.log(event.target.username.value)

// console.log(event.target.email.value)

// console.log(event.target.phone.value)
// console.log(event.target.date.value)
// console.log(event.target.time.value)

// userList=document.getElementById('userList')
// console.log(userList);

// eachUser=localStorage.getItem(myobj.email)
// detailDisplay=document.createTextNode(eachUser.name)
// console.log(detailDisplay);

// userList.appendChild(detailDisplay)
showNewUserOnScreen(myobj)





}
function showNewUserOnScreen(user)
{
    parentNode=document.getElementById( 'listOfUsers' )
   
    const childHTML=`<li>${user.name} -${user.email} </li>`
    parentNode.innerHTML=parentNode.innerHTML +childHTML
}

axios.get("https://crudcrud.com/api/56d6b523494341ac9c057ccde2988b79/appoinment")
.then((res)=>{
   res.data.map((a)=>{
    parentNode=document.getElementById( 'listOfUsers' )

    const childHTML=`<li>${a.name} -${a.email} </li>`
    parentNode.innerHTML=parentNode.innerHTML +childHTML

  

   })
})

