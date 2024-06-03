
import React from "react";
import "./heading.css";
import ListComponent from "../list/list";
import styles from "./heading.module.css";



// const Heading1=()=>{
//     return(
//         <div>
//         <h1> H1 Heading.</h1>
//         </div>
//     )
// }
// export default Heading1

//  export const Heading2=() => {
//     return(
//         <div>
//         <h2> H1 Heading..</h2>
//         </div>
//     )
// }

// export const Heading3=() => {
//     return(
//         <div>
//         <h3> H1 Heading...</h3>
//         </div>
//     )
// }

// export const Heading4=() => {
//     return(
//         <div>
//         <h4> H1 Heading....</h4>
//         </div>
//     )
// }

// export const Heading5=() => {
//     return(
//         <div>
//         <h5> H1 Heading.....</h5>
//         </div>
//     )
// }

// 28-5
// inline style 


// first type inline style

// const Heading1= () =>{
//     return(
//         <div>
//             <h1 style={{
//                 color:"red",
//                 backgroundColor:"black",
//             }}>
//                 H1 Heading..

//             </h1>
//         </div>
//     )
// }

// second type inline style

// const Heading1 = () => {
//     const headingStyle = {
//         color:"red",
//         backgroundColor:"black",
//     };
//     return(
//         <div>
//             <h1 style={headingStyle}> H1 heading..</h1>
//             <h2 style={headingStyle}> H2 heading..</h2>
//             <h3 style={headingStyle}> H3 heading..</h3>
//         </div>
//     )
// }

// external file 

// const Heading1 = () => {
//         const headingStyle = {
//             color:"red",
//             backgroundColor:"black",
//         };
//         return(
//             <div>
//                 <h1 className="head-text"> H1 heading..</h1>
//                 {/* <h1 className={StyleSheet.heading}> hi heading</h1> */}
//                 <h2 className="head-text"> H2 heading..</h2>
//                 <h3 style={headingStyle}> H3 heading..</h3>
//                 {/* <h3 className="head-text"> H3 heading..</h3> */}
//                 <ListComponent/>
//             </div>
//         );
//     };


const Heading1 = () => {
    const headingStyle = {
        color:"red",
        backgroundColor:"black",
    };
    return(
        <div>
            <h1 className= {styles.heading}> H1 heading..</h1>
            {/* <h1 className={StyleSheet.heading}> hi heading</h1> */}
            <h2 className="head-text"> H2 heading..</h2>
            <h3 style={headingStyle}> H3 heading..</h3>
            {/* <h3 className="head-text"> H3 heading..</h3> */}
            <ListComponent/>
        </div>
    );
};



    
export default Heading1;
