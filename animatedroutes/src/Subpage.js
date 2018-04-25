import React, { Component } from "react";
import AnimatedWrapper from "./Wrapper/Animated";
class SubpageComponent extends Component {
 render() {
  return (
   <div className="page">
    <h1>Subpage</h1>
    <p>Hello from a sub page!</p>
   </div>
  )
 }
}
const Subpage = AnimatedWrapper(SubpageComponent);
export default Subpage;