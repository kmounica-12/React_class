import React from "react"
import Button from"./components/button/button.js"
import ListComponent from "./components/list/list.js";
import Image from "./components/image/image.js";

function Hello(){
  return(
    <div>
      <h1>Hello World!</h1>
      <Button/>
      <ListComponent/>
      <h1>Hello World welcome!</h1>
      <Button/>
      <h1>I am Login</h1>
      <Button/>
      <h1>I am signup</h1>
      <Button/>
      <Image/>
    </div>
  )
}
export default Hello;
