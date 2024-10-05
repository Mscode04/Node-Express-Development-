// var dt=new Date()
// console.log('hello');
// for(let i=0;i<10;i++) {
//   console.log('looping');
  
// }
// console.log('end of code');
// var diff= new Date()-dt
// console.log(diff);


function long(mil){
    dt=new Date()
    while((new Date()-dt)<=mil){
        console.log('While loop working')
    }
}

long(10)
