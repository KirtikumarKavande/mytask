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

queryli=document.querySelectorAll('.list-group-item')
console.log(queryli);



secondItem=document.querySelector('.list-group-item:nth-child(2)')

secondItem.style.color='red'

thirdItem=document.querySelector('.list-group-item:nth-child(2)')
thirdItem.style='display:none'
