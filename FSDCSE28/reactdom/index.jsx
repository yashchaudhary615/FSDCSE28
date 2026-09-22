const container = document.getElementById("root");
console.log(container);

const root = ReactDOM.createRoot(container);
// const h1 = React.createElement(
//   "h2",
//   { style: { color: "brown", backgroundColor: "white" } },
//   "Resume",
// );
// const h4 = React.createElement(
//   "h2",
//   { style: { color: "red" } },
//   "Skills: c++, java, python, html, css, javascript, reactjs, nodejs",
// );
// const h2 = React.createElement(
//   "h2",
//   { style: { color: "red" } },
//   "Name: Yash Rajora",
// );
// const h3 = React.createElement(
//   "h2",
//   { style: { color: "red" } },
//   "College: ABES Engineering College",
// );
// const h5 = React.createElement(
//   "h2",
//   { style: { color: "red" } },
//   "Section: CSE-28",
// );
// const img = React.createElement("img", {
//   src: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=2048x2048&w=is&k=20&c=KTpY1O4d7-EuX-R_GR_44Upc-n9esJOZFpcqvA4CM0E=",
//   style: { height: "100px", width: "100px", borderRadius: "50%" },
// });
// const div = React.createElement(
//   "div",
//   { style: { border: "2px dotted black", height: "500px", width: "900px" } },
//   img,
//   h1,
//   h2,
//   h3,
//   h4,
//   h5,
// );

const h21 = <h2> welcome to JSX </h2>;
const h22 = <h1>Abes engineering college</h1>;
const wrapper=<div style={{border:"2px solid red"}}>{h21}{h22}</div>
const div=
<>
<h2>hey! using jsx</h2>
</>

root.render(div);
