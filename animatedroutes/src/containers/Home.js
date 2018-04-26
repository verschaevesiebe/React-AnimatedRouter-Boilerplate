import React, { Component } from "react";
import AnimatedWrapper from "../wrapper/AnimatedWrapper";
class HomeComponent extends Component {
 render() {
  return (
   <div className="page">
    <h1>Home</h1>
    <p>Hello from the home page!</p>
   </div>
  )
 }
}
const Home = AnimatedWrapper(HomeComponent);
export default Home;