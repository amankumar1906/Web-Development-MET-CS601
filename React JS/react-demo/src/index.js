import React from "react";
import ReactDOM from "react-dom";

// React.js is declarative (computer knows what to do and will handle the details) and composable (components/pieces)

// *******************************************Basic React rendering*****************************************
//  1)
// ReactDOM.render(<h1> Hello everyone</h1>, document.getElementById("root"));
// ReactDOM.render(
//   <ul>
//     <li>Thing 1</li> <li> Thing 2</li>
//   </ul>,
//   document.getElementById("root")
// );

// 2)
// function MainContent() {
//   return <h1> I'm learning react </h1>;
// }

// ReactDom.render(
//   <div>
//     <Navbar />
//     <MainContent />
//   </div>,
//   document.getElementById("root")
// );

// Components
// this is a javascript object if you console.log(page):
// const page = (
//   <div>
//     <h1 className="header"> This is JSX </h1>
//     <p> This is a paragraph </p>
//   </div>
// );

// const navbar = (
//   <nav>
//     <h1> Bistro </h1>
//     <ul>
//       <li> Menu </li>
//       <li> About</li>
//       <li> Contact </li>
//     </ul>
//   </nav>
// );

// A react component is a function that returns React elements

// **************************************Parent-child*********************************************
function Header() {
  return (
    <header>
      <nav>
        <h2> Hello </h2>
      </nav>
    </header>
  );
}
function Page() {
  //first letter of function name is capital in JSX
  return (
    <div>
      <Header />
      <h3> Reasons I am excited to learn React</h3>
      <ol>
        <li> Its a popular library </li>
        <li> Get better jobs</li>
      </ol>
      <footer>
        <small>All rights reserved.</small>{" "}
      </footer>
    </div>
  );
}
ReactDOM.render(<Page />, document.getElementById("root")); // this is how you pass functions in jsx
