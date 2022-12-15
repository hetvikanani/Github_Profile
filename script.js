const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const inputSearch = document.getElementById("search");
const divCard = document.querySelector(".card");

const createUserCard = (username) => {
    const cardUI = `
        <div>
            <img src="${username.avatar_url}">
        </div>
        <div>
            <h2>${username.name}</h2>
            <p>${username.bio}</p>
            <ul>
            <li>${username.followers}</li>
            <li>${username.following}</li>
            <li>${username.public_repos}</li>
            </ul>
        </div>
`;
    divCard.innerHTML = cardUI;

};

const getUser = async (user) => {
    const res = await fetch(APIURL + user);
    const response = await res.json();
    createUserCard(response);
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = inputSearch.value;
    if (inputValue) {
        getUser(inputValue);
        inputSearch.value = "";
    }

});
