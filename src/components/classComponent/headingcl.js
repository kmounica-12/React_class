import React, { Component } from "react";
// import { Component } from "react"


// // with empty fragnment  
// class HeadingComponent extends Component{
//     render(){
//         return(
//             <div>
//                 <h2> Heading 2 class component ..</h2>
//             </div>
//         )
//     }
// }


// with react.fragnment 
class HeadingComponent extends Component{
    render(){
        return(
        <React.Fragment>
            <h1>
                heading 1 class component .. </h1>
        </React.Fragment>
        )
    }
}
export default HeadingComponent;