const clickMebtn = document.getElementById("click-me-id");
clickMebtn.addEventListener("click", () => {
  alert("Hey");
});

const heading = document.createElement("h1");
heading.innerHTML = "Hello React !";
const root = document.getElementById("root");
root.appendChild(heading);