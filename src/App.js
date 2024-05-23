import React from "react"
import Button from"./components/button/button.js"
import ListComponent from "./components/list/list.js";
import Image from "./components/image/image.js";
import Heading1,{Heading2 as SecondaryHeading, Heading3,Heading4,Heading5} from "./components/headings/headings.js";

// w

// date 22

// function Hello(){
//   const employee={
//     name:"rahul",
//     secondName:"skandha"
//   }


  // destructuring
  // const {name,secondName}=employee
  // return(
  //   <div>
  //     <h1>Hello World! {name}</h1>
  //     <h1>Hello World! {secondName}</h1>
  //   </div>
  // )



  // className conversion   
  //  <div className="new"></div>   not just class you need to give as classsName


//   return(
//     <div> 
//       <h1>Hello World!{employee.name} </h1>
//       <h1>Hello World!{employee.secondName} </h1>
//     </div>
//   )
// }

// if else 
// function Hello(){
//   const isSubscribed=true
//   if(isSubscribed){
//     // return <h1> Thanks for subscribing..</h1>
//     return <ListComponent/>

//   }else{
//     return <h1>Please subscribe..</h1>
//   }
// }

// // ternary operator
// function Hello(){
//   const isSubscribed=true
//   return(
//     <div>
//       {
//         isSubscribed
//         ?
//         <h1>Thanks for subscribing</h1>
//         // <ListComponent/>
//         :
//         <h1>Please Subscribe</h1>
//       }
//     </div>
//   )

// }


// with null
// function Hello(){
//     const isSubscribed=true
//     return(
//       <div>
//         {
//           isSubscribed
//           ?
//           <h1>Thanks for subscribing</h1>
//           // <ListComponent/>
//           :
//           null
//         }
//       </div>
//     )
  
//   }

// // logical operator
// function Hello(){
//   const isSubscribed=false
//   return(
//     <div>
//       {
//         isSubscribed && <ListComponent/>
//       }
//     </div>
//   )
// }


function Hello(){
    const isSubscribed=false
    return(
      <>
         <Heading1/>
         <SecondaryHeading/>
         <Heading3/>
         <Heading4> </Heading4>
         <Heading5> </Heading5>
      </>
    )
  }



export default Hello;
