document.addEventListener("DOMContentLoaded", function () {
  fetchAndRenderData("http://localhost:3000/toys", renderToys);
});
function fetchAndRenderData(url, renderFunction) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => renderFunction(data))
    .catch((error) => console.error("Error fetching data:", error));
}
function renderToys(toys) {
  const toyCollection = document.getElementById("toy-collection");
  toyCollection.innerHTML = "<h2>Andy's Toys</h2>";
  toys.forEach((toy) => {
    const toyDiv = document.createElement("div");
    const toyName = document.createElement("p");
    const toyImg = document.createElement("img");
    const button = document.createElement("button");
    button.textContent = "like button";
    const toyLikes = document.createElement("p");

    toyName.textContent = `${toy.name}`;
    toyImg.src = `${toy.image}`;

    toyLikes.textContent = `Likes: ${toy.likes}`;
    button.addEventListener("click", () => {
      toy.likes += 1;
      toyLikes.textContent = `Likes: ${toy.likes}`;
      updateLikes(toy);
    });

    function updateLikes(toys) {
      fetch(`http://localhost:3000/toys/${toys.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toys),
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(data);
        });
    }

    toyDiv.appendChild(button);
    toyDiv.appendChild(toyName);
    toyDiv.appendChild(toyImg);
    toyDiv.appendChild(toyLikes);
    toyCollection.appendChild(toyDiv);
  });
}
const newtoybtn = document.getElementById("new-toy-btn");
newtoybtn.addEventListener("click", () => {
  const formContainer = document.querySelector(".container");
  if (
    formContainer.style.display === "none" ||
    formContainer.style.display === ""
  ) {
    formContainer.style.display = "block";
  } else {
    formContainer.style.display = "none";
  }
});

const addToyForm = document.querySelector(".add-toy-form");
addToyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(addToyForm);
  const name = formData.get("name");
  const image = formData.get("image");
  const likes = formData.get("likes");
  const data = {
    name: name,
    image: image,
    likes: likes,
  };

  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((r) => r.json())
    .then((newToy) => {
      const toyCollection = document.getElementById("toy-collection");
      const newToyDiv = document.createElement("div");
      newToyDiv.textContent = `${newToy.name} ${newToy.image} ${newToy.likes}`;
      toyCollection.appendChild(newToyDiv);
    })
    .catch((error) => console.error("Error adding product:", error));
});
