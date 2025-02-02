let user = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
    },
    {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
    },
];

displayUser(user)


function displayUser(user) {

    user.forEach((ele) => {
        var Container = document.getElementById("container");

        var card = document.createElement("div");
        var Name = document.createElement("h3");
        Name.textContent = ele.name

        var UserName = document.createElement("h5");
        UserName.textContent = ele.username

        var Email = document.createElement("p");
        Email.textContent = ele.email

        var btn = document.createElement("button");
        btn.textContent = "Add to Cart"
        btn.addEventListener("click", function () {
            addToCart(ele);
        })


        card.append(Name, UserName, Email, btn)
        Container.append(card)

    });

}

let cartData = JSON.parse(localStorage.getItem("cart-data")) || [];
function addToCart(ele) {
    cartData.push(ele);
    localStorage.setItem("cart-data", JSON.stringify(cartData));
}