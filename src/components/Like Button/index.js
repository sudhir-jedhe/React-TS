import "/style.css";

const ICON_LIBRARY_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

function injectIconLib() {
  const isLibraryAlreadyAdded = document.querySelector(
    `link[href="${ICON_LIBRARY_URL}"]`
  );

  if (isLibraryAlreadyAdded) {
    return;
  }

  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = ICON_LIBRARY_URL;

  document.head.appendChild(link);
}

injectIconLib();

const like_button = document.getElementById("like_button");

function clickedLike() {
  if (like_button.classList.contains("fa-heart-o")) {
    like_button.classList.remove("fa-heart-o");
    like_button.classList.add("fa-heart");
    like_button.style.color = "red";
  } else if (like_button.classList.contains("fa-heart")) {
    like_button.classList.remove("fa-heart");
    like_button.classList.add("fa-heart-o");
    like_button.style.removeProperty("color");
  }
}

like_button.addEventListener("click", clickedLike);
