// mainheader=document.getElementById('main-header') 
// mainheader.style.border='2px solid black' 
 
// titlechange=document.querySelector('.title') 
// console.log(titlechange); 
// titlechange.style.color='green' 
// titlechange.style.fontWeight='bold'


liList=document.getElementsByClassName('list-group-item')
liList[2].style.backgroundColor='green'

for(i=0;i<liList.length;i++)
{
    liList[i].style.fontWeight='bold'
}
console.log(liList);