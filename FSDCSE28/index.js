//console.log("hello js");
// function summ(a,b)
// {
//     return a+b;
// }

// summ(23,30);


/*let a=34;
if(a>20){
   console.log("a inside a="+a);
    
}

console.log(" a outside a="+a);
*/


// function sum(a,b)
// {
//    return a+b;
// }

// console.log(sum(23,30))




// //call back
// function sum(a,b)
// {
//    return a+b;
// }


// function sumWithMsg(clbk,msg)
// {
//    const result=clbk(12,40);
//    console.log("hii"+msg+""+result)
// }

//  sumWithMsg(sum,"ram");



//  function login(msg,error)
//  {
// if{}
// else{
//    console.log(msg)
// }
//  }

//  function loginHandler(username,password,clbk){
//    //username="yash40";
//    //password="12345"

//    if(username=="yash40"&& password="12345"){
//       clbk("success")
//    }
//  }
 





//call back hell


 //  setTimeout(()=>console.log("one")
   //   setTimeout(()=>console.log("two"),1000)



   //js synchronous
//first line-->freeze 
//second line
//third line


   //promise

   const myPromise = new Promise((resolve,reject)=>{
      let username="yash40";
      let password="12345";

      if(username=="yash40" && password=="12345"){
         resolve("success")
      }
      else{
         reject("error")
      }
   })

 //  console.log(myPromise);

//  myPromise.then((msg)=>console.log(msg))
//  .catch((msg)=>console.log(msg))
//  .finally(()=>console.log("resource closed"))

async function ordeRecieved(){
   return await new Promise((resolve)=>{
      setTimeout(()=>{
         resolve("order recieved")
      },1000)
   })
}

async function orderPrepared(){
  return await new Promise((resolve)=>{
   setTimeout(()=>{
      resolve("order prepared")
   },1000)
   }) }

  async function orderhandover(){
      return await new Promise((resolve)=>{
         setTimeout(()=>{
            resolve("order handover")
         },1000)
      })
   }


function ordercompleted(){
   console.log("order completed")
}

function otp(){
   votp= Math.floor(Math.random()*10000);
   return votp;
}


async function handleLogin()
{
   const status= await myPromise;
   console.log(status);
   if(status=="success"){
      console.log("hii inside success")
      const order = await ordeRecieved();
      console.log(order);
      const orderprepared = await orderPrepared();
      console.log(orderprepared);
     const orderHandover = await orderhandover();
      console.log(orderHandover);
      ordercompleted();
      const otpValue = await otp();
      console.log("OTP:", otpValue);
   }

}
handleLogin();