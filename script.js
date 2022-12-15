const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const inputSearch = document.getElementById("search");
const divCard = document.querySelector(".card");

const createUserCard = (username) => {
    const cardUI = `
        <div>
            <img class="avatar" src="${username.avatar_url}">
        </div>
        <div class="user-info">
            <h2>${username.name}</h2>
            <p>${username.bio}</p>

            <ul class="info">
            <li>${username.followers}<strong>Followers</strong></li>
            <li>${username.following}<strong>Following</strong></li>
            <li>${username.public_repos}<strong>Repos</strong></li>
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

getUser("hetvikanani");