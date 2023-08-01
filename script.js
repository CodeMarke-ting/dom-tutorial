//! what is DOM?
//! selectors
//! traversing
//! manipulate
//! manage attributes
//! styling
//! events
//! form handling
//! nodelist vs html live collection

// DOM - Document object model
// console.log(document);

// !selectors
// const headingById = document.getElementById("heading");
// const headingbyTag = document.getElementsByTagName("p");
// const pByClass = document.getElementsByClassName("text");
// const pByQuery = document.querySelectorAll(".text");

// for (let element of headingbyTag) {
//   console.log(element);
// }

// console.log(headingbyTag);
// console.log(pByClass);
// console.log(pByQuery);

// pByQuery.forEach((element) => console.log(element));

// !dom traversing
// const span = document.querySelector(".span-text");
// const container = document.querySelector(".container");

// console.log(span.parentElement);
// console.log(span.parentNode);

// console.log(container.children);
// console.log(container.childNodes);

// console.log(span.previousElementSibling);
// console.log(span.nextElementSibling);

// console.log(span.nextSibling);
// console.log(span.previousSibling);

// ! DOM manipulation
// const span = document.querySelector(".span-text");
// const container = document.querySelector(".container");
// const div = document.querySelector("div");
// const p = document.querySelector(".div-text");
// span.textContent = "new content";

// container.textContent = "hello";

// div.innerHTML = `<div>
//     <p>hello p</p>
//     <button>click</button>
// </div>`;

// const heading1 = document.createElement("h1");
// const heading2 = document.createElement("h1");

// const button = document.createElement("button");

// button.textContent = "click me!";

// heading1.textContent = "hello world";
// heading2.textContent = "hello world";

// div.appendChild(heading1);
// div.append(heading1, heading2);

// remove, replace, clone

// div.removeChild(heading2);
// div.replaceChild(button, heading2);

// const button2 = button.cloneNode(true);

// div.prepend(button2);

// p.after(button2);

// ! attributes
// const p = document.querySelector(".text");
// console.log(p.getAttribute("custom"));
// p.setAttribute("name", "dunya");
// p.removeAttribute("class");
// p.setAttribute("name", "royal");

// !styling
// const p = document.querySelector(".text");

// p.style.color = "red";
// p.style.backgroundColor = "yellow";

// console.log(p.className);

// p.classList.add("newClass");
// p.classList.remove("text");

// p.classList.toggle("newClass");

// ! events and forms
// element
// click and etc
// callback

// const btn = document.querySelector(".btn");
// const card = document.querySelector(".card");
// const sendBtn = document.querySelector(".send-btn");

// const input = document.querySelector(".search-input");

// btn.addEventListener("click", (e) => {
//   console.log(e.clientX, e.clientY);
//   console.log("user clicked !");
// });

// sendBtn.addEventListener("keyup", () => {
//   console.log("clicked keypress");
// });

// card.addEventListener("mousemove", (e) => {
//   for (let i = 0; i < 1000000; i++) {}
//   console.log(e.clientX, e.clientY);

//   console.log("mouse move");
// });

// input.addEventListener("input", handleInput);

// function handleInput(e) {
//   console.log(e.target.value);
// }

// const submitBtn = document.querySelector(".submit-btn");
// const formInput = document.querySelector(".form-input");
// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(formInput.value);
// });

// function test() {
//   console.log("hello");
// }

// window.onload = () => {
//   test();
// };
