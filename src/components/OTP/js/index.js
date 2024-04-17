import "/style.css";

const form = document.querySelector("form");

const btn = document.querySelector("#submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submission");
});

// please write your solution below

const inputContainer = document.querySelector("#otp-container");

for (let i = 0; i < 6; i++) {
  inputContainer.innerHTML += `<input type="text" id=${i} class="box" maxlength="1" size="1"/>`;
}

const all = document.querySelectorAll(".box");

all.forEach((item, index) => {
  item.addEventListener("paste", handlePaste);
  item.addEventListener("keyup", handleOTP);
  btnStatus();
});

function handlePaste(e) {
  e.preventDefault();
  let paste = e.clipboardData.getData("text/plain");
  if (paste.length == all.length) {
    all.forEach((sm, i) => (sm.value = paste[i]));
  }
  btnStatus();
}

function handleOTP(e) {
  const currentEl = e.target;
  const keyType = e.key;

  if (isNaN(keyType)) {
    switch (keyType) {
      case "Backspace":
        if (currentEl.value) {
          currentEl.value = "";
        }
        currentEl.previousElementSibling &&
          currentEl.previousElementSibling.focus();
        break;

      case "ArrowRight":
        currentEl.nextElementSibling && currentEl.nextElementSibling.focus();
        break;

      case "ArrowLeft":
        currentEl.previousElementSibling &&
          currentEl.previousElementSibling.focus();
        break;

      case "Delete":
        currentEl.value = "";
        break;
    }
  } else {
    if (currentEl.value) {
      currentEl.nextElementSibling && currentEl.nextElementSibling.focus();
    }
  }
  btnStatus();
}

function btnStatus() {
  let i = 0;
  all.forEach((t) => {
    if (t.value) i++;
  });
  if (i == 6) {
    btn.style.backgroundColor = "violet";
  } else {
    btn.style.backgroundColor = "#111739";
  }
}
