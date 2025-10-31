// const parent = document.getElementById("parent");
// console.log(parent);
// const root = ReactDOM.createRoot(parent);
// // const h2 = React.createElement("h2", {
// //   style: { color: "brown", backgroundColor: "black" },
// // });

// //jsx
// const name = <h2>Rahul kumar</h2>;
// const branch = <h2>cs-b</h2>;
// const container = (
//   <div style={{}}>
//     {name}
//     {branch}
//   </div>
// );

// root.render(container);
const parent = document.getElementById("parent");
//console.log(parent);
const Root = ReactDOM.createRoot(parent);

//const h2 = React.createElement("h2",{style:{color:"browm",backgroundColor:"blue"}},"Hello");
const img = <img src="https://picsum.photos/200/200"></img>;
const myname = <h2>Ishita Banshiwal</h2>;
const Branch = <p>Computer Science</p>;
const section = <p>B</p>;
const college = "ABES Engineering College";

const wrapper = React.createElement(
  "div",
  { style: { backgroundColor: "grey", width: "19%" } },
  img,
  myname,
  Branch,
  section,
  college
);
Root.render(wrapper);