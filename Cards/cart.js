let cartData = JSON.parse(localStorage.getItem("cart-data")) || [];
let container = document.getElementById("container");

displayUsers(cartData);

function displayUsers(cartData) {
    container.innerHTML = "";
    cartData.forEach((ele, i) => {
        let card = document.createElement("div");

        let Name = document.createElement("h3");
        Name.textContent = ele.name;

        let Username = document.createElement("h5");
        Username.textContent = ele.username;

        let Email = document.createElement("p");
        Email.textContent = ele.email;

        let btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.addEventListener("click", function () {
            removeData(ele, i);
        });

        card.append(Name, Username, Email, btn);
        container.append(card);
    });
}

function removeData(ele, i) {
    cartData.splice(i, 1);
    displayUsers(cartData);
    localStorage.setItem("cart-data", JSON.stringify(cartData));
}