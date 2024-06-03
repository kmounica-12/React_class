import React from "react"
import Button from"./components/button/button.js"
import ListComponent from "./components/list/list.js";
import Image from "./components/image/image.js";
import Heading1,{Heading2 as SecondaryHeading, Heading3,Heading4,Heading5} from "./components/headings/headings.js";
import HeadingComponent from "./components/classComponent/headingcl.js";
import NavBar from "./components/navbar/navBar.js";
import AccordionComponent from "./components/accordion/accordion.js";

// w first day
// function Hello(){
//     return(
//       <div>
//         <h1>Hello World!</h1>
//         <Button/>
//         <ListComponent/>
//         <h1>Hello World welcome!</h1>
//         <Button/>
//         <h1>I am Login</h1>
//         <Button/>
//         <h1>I am signup</h1>
//         <Button/>
//         <Image/>
//       </div>
//     )
//   }
 
  

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


// function Hello(){
//     const isSubscribed=false
//     return(
//       <>
//          <Heading1/>
//          <SecondaryHeading/>
//          <Heading3/>
//          <Heading4> </Heading4>
//          <Heading5> </Heading5>
//       </>
//     )
//   }

// date 28-05024
  


function Hello(){
return(
  <>
  <NavBar/>
  <AccordionComponent/>
  {/* <HeadingComponent/>
 <Heading1/>  */}
  
  </>
)
}

// function Hello(){
// return(
//   <>
//   <NavBar/>
// )



// }




export default Hello;


