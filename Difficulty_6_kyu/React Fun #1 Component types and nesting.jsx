//React Fun #1: Component types and nesting
// Task
// Create three components. Following the provided rules
// One component should be named Hello and it should return 'Hello' wrapped inside of h1.
// The second component should be named World and it should return 'World!' wrapped inside of h2.
// Create a parent component using class syntax called Greet and nest previous two components inside of it, wrapping them with a div.

const React = require('react');
//add Hello, World and Greet components here. refer to description if you are stuck. good luck :)
const Hello = () => <h1>Hello</h1>
const World = () => <h2>World!</h2>

class Greet extends React.Component {
  render() {
    return <div>
            <Hello/>
            <World/>
          </div>
}}