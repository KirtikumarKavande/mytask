



function car(){
return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("buy a car")
    }, 2000);

})
}

function manali(){

return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("go to manali")
    }, 1000);

})
}
async function func(){
  car=await car();
  console.log(car)
  manali=await manali();
  console.log(manali)

}
func()


// car().then((value)=>{
// console.log(value)
// manali().then((value)=>{
//   console.log(value)
  
//   })

// })



