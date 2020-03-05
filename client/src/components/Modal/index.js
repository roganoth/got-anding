import React from "react";

export default class Modal extends React.Component {
  render() {
    return <div>Hello Modal</div>;
  }
}

const buttons = document.querySelectorAll(".toggle-button");
const modal = document.querySelector("#modal");

[].forEach.call(buttons, function(button) {
  button.addEventListener("click", function() {
    modal.classList.toggle("off");
  });
});
