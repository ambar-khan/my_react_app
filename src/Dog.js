import { Component } from "react";
import './Dog.css'
import puppy from './puppy.jpg'

class Dog extends Component {
  render() {
    return (
      <div className="Dog">
        <h1>DOG!</h1>
        <img className="Puppy-img" src={puppy} />
      </div>
    );
  }
}
export default Dog;