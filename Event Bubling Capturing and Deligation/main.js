const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

// Event Propagation

// 🧭 1️⃣ What is Event Propagation?
// 📘 Definition:

// Event propagation is the process by which an event moves (or "propagates") through the DOM tree when it occurs — from the root element to the target element and back up again.

// When a user interacts with a nested element (e.g., clicks a button inside a div), the browser needs to decide which elements’ event listeners should run, and in what order.

// This flow happens in three phases:

// Phase	Direction	Description
// 1. Capturing phase	Top → Down	Event travels from window → document → html → body → ... → target element.
// 2. Target phase	—	The event reaches the actual target element where it occurred.
// 3. Bubbling phase	Bottom → Up	Event travels back up the DOM from the target → ancestors → up to window.

// =============================================================================================================================================
// =============================================================================================================================================

// 🌊 2️⃣ What is Event Bubbling?
// 📘 Definition:
// Event bubbling is the default phase of event propagation where the event moves from the target element up to its ancestors in the DOM hierarchy.
// That means if an event occurs on a child element, the same event is triggered on all its parent elements — unless stopped.

// div.addEventListener("click", function () {
//   alert("Div");
// });

// form.addEventListener("click", function () {
//   alert("Form");
// });

// button.addEventListener("click", function () {
//   alert("Button");
// });

// If I click on the button then first buttons alert will shown 1st then forms and then div's. This is the default behavior of the event.

// STOP Bubbling -  We can stop bubbling using the event.stopPropagation();

// 💡 Why bubbling is useful:
// Enables event delegation
// Lets parent components respond to child interactions

// =============================================================================================================================================
// =============================================================================================================================================

// 3. event.target vs this vs event.currentTarget

// target → the original clicked element (fixed)
// currentTarget → the element currently handling the event (changes as it bubbles)
// this → same as currentTarget (only in normal functions)

// div.addEventListener("click", func);
// form.addEventListener("click", func);
// button.addEventListener("click", func);

// function func(event) {
//   alert(
//     "currentTarget = " +
//       event.currentTarget.tagName +
//       "  " +
//       "eventTarget = " +
//       event.target.tagName +
//       "  " +
//       "thisTarget = " +
//       this.tagName
//   );
// }

// =============================================================================================================================================
// =============================================================================================================================================

// 4. What is Event Capturing/Trickling

// 📘 Definition:
// Event Capturing (also called Trickling) is the first phase of event propagation —
// where the event travels from the top of the DOM (root) down to the target element.

// In capturing:
// Parent elements “get the first chance” to handle the event, before it reaches the element that was actually clicked.

// Normally, event listeners work in the bubbling phase (bottom → up).
// You switch to capturing phase by passing the option:
// {capture: true;}

// 📉 Direction of Event Flow (in Capturing Phase)
// When you click the button, the event travels:
// window
//   ↓
// document
//   ↓
// <html>
//   ↓
// <body>
//   ↓
// <div>  ← capture listener
//   ↓
// <form> ← capture listener
//   ↓
// <button> ← capture listener (event target)

// div.addEventListener(
//   "click",
//   function () {
//     alert("div");
//   },
//   {
//     capture: true,
//   }
// );
// form.addEventListener(
//   "click",
//   function () {
//     alert("form");
//   },
//   {
//     capture: true,
//   }
// );
// button.addEventListener(
//   "click",
//   function () {
//     alert("button");
//   },
//   {
//     capture: true,
//   }
// );

// =============================================================================================================================================
// =============================================================================================================================================

// 5. How do you stop bubbling or capturing
// 1. In case of bubbling we can use the event.stopPropagation() at start of the function
// 2. Stops the event from continuing to bubble up (or trickle down during capturing).
// 3. Other listeners on ancestor elements will not run.

// div.addEventListener("click", function (e) {
//   e.stopPropagation();
//   alert("div");
// });

// form.addEventListener("click", function (e) {
//   e.stopPropagation();
//   alert("form");
// });

// button.addEventListener("click", function (e) {
//   e.stopPropagation();
//   alert("button");
// });

// =============================================================================================================================================
// =============================================================================================================================================

// 6. What is event deligation?
// 📘 Definition:
// Event Delegation is a technique in which you attach a single event listener to a parent element to manage events triggered by its child elements — even if those children are added dynamically later.

// Instead of adding an event listener to every single child,
// you let the event bubble up and handle it once at the parent level.

// 🧠 In Simple Words:
// Instead of listening to events on multiple elements individually,
// you “delegate” the listening to their common ancestor (parent).
// Because of event bubbling, when a child is clicked,
// the event automatically bubbles up to the parent — and the parent can check which child was clicked.

// ⚙️ Example Without Delegation (Bad Practice)
// <ul>
//   <li>Apple</li>
//   <li>Banana</li>
//   <li>Orange</li>
// </ul>

// <script>
//   document.querySelectorAll("li").forEach((li) => {
//     li.addEventListener("click", () => {
//       console.log(li.textContent + " clicked");
//     });
//   });
// </script>

// 😕 Problem:
// Each <li> has its own event listener.
// If you add new <li> elements later with JavaScript,
// they won’t have a listener automatically.
// More listeners = more memory usage.

// ✅ Example With Event Delegation (Best Practice)
// <ul id="fruits">
//   <li>Apple</li>
//   <li>Banana</li>
//   <li>Orange</li>
// </ul>

// <script>
//   const list = document.getElementById("fruits");

//   list.addEventListener("click", (event) => {
//     if (event.target.tagName === "LI") {
//       console.log(event.target.textContent + " clicked");
//     }
//   });
// </script>

// 🧩 What happens:
// You click on a <li> element.
// The click event bubbles up to the <ul> (parent).
// The parent’s listener runs and checks event.target (which child triggered it).
// It reacts accordingly.
// ✅ Works for existing and future dynamically added elements too.

// ⚡ Dynamic Example
// const list = document.getElementById("fruits");

// Existing delegation listener
// list.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     console.log(event.target.textContent);
//   }
// });

// Dynamically add a new item
// const newItem = document.createElement("li");
// newItem.textContent = "Mango";
// list.appendChild(newItem);

// Now clicking Mango also works automatically 🎉 —
// because the listener is on the parent (ul), not on individual lis.

// | Concept              | Description                                                                  |
// | -------------------- | ---------------------------------------------------------------------------- |
// | **Event Delegation** | Attaching one listener to a parent to handle events from its child elements. |
// | **Works Because of** | Event Bubbling                                                               |
// | **Main Benefit**     | Fewer listeners, handles dynamic children                                    |
// | **Key Property**     | `event.target` (to identify which child triggered it)                        |
// | **Best Used For**    | Lists, tables, menus, dynamic UI components                                  |

// =============================================================================================================================================
// =============================================================================================================================================
