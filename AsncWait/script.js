// console.log('person1:shows ticket')
// console.log('person2:shows ticket')

// promiseWifeBringingTickets = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("ticket");
//   }, 3000);
// });

// const getPopcorn = promiseWifeBringingTickets.then(function (value) {
//   console.log("husband:we should go in");
//   console.log("wife:no i am hungery");

//   return new Promise((resolve, reject) => {
//     resolve(`${value} popcorn`);
//   });
// });

// getbutter = getPopcorn.then((value) => {
//   console.log("husband:take this popcorn");
//   console.log("wife:i want butter on my popcorn");

//   return new Promise((resolve, reject) => {
//     resolve(`${value} butter`);
//   });
// });

// getColdrinks=getbutter.then((value)=>{

//     console.log("wife:I want cold drinks");

//     return new Promise((resolve, reject) => {
//         resolve(`${value} coldrinks`);

//     })
// })

// getColdrinks.then((value) => {
//   console.log(value);
// });
// console.log("person4:shows ticket");
// console.log("person5:shows ticket");

// console.log("person1:shows ticket");
// console.log("person2:shows ticket");

// async function preMovie() {
//   let promiseWifeBringingTickets = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("ticket");
//     }, 3000);
//   });
//   let getPopcorn = new Promise((resolve, reject) => {
//     resolve("popcorn");
//   });
//   let getButter = new Promise((resolve, reject) => {
//     resolve("butter");
//   });
//   let getColdrinks = new Promise((resolve, reject) => {
//     resolve("cold drinks");
//   });

//   let getDrinks = new Promise((resolve, reject) => {
//     reject("no Drinks");
//   });
//

//   let ticket = await promiseWifeBringingTickets;

//   console.log("husband:we should go in");
//   console.log("wife:no i am hungery");
//   let popcorn = await getPopcorn;
//   console.log(`hudband:take this ${popcorn}`);
//   console.log("i want butter on popcorn");
//   butter = await getButter;
//   console.log(`take this ${butter} on popcorn`);
//   coldrinks = await getColdrinks;
//   console.log("i want coldrinks");
//   console.log(`take this ${coldrinks} `);

//   return ticket;
// }
// preMovie().then((value) => {
//   console.log(`person 3: shows ${value}`);
// });

// console.log("person4:shows ticket");
// console.log("person5:shows ticket");

async function preMovie() {
  task1 = new Promise((resolve, reject) => {
    resolve("cold drinks");
  });
  task2 = new Promise((resolve, reject) => {
    resolve("chinease");
  });
  task3 = new Promise((resolve, reject) => {
    resolve("popcorn");
  });

  const mytask1 = await task1;
  const mytask2 = await task2;
  const mytask3 = await task3;
  //    [coldDrinks,chinease,popcorn]=await Promise.all([mytask1,mytask2,mytask3])
  //     console.log(coldDrinks);

  return Promise.all([mytask1, mytask2, mytask3]);
}

preMovie().then((value) => {
  console.log(value);
});
