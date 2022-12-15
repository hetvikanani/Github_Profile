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
            <h3>Repos:</h3>
            <div id="repos"></div>
        </div>
`;
    divCard.innerHTML = cardUI;
};

const addReposToCard = (repo) => {
    const reposElement = document.getElementById("repos");
    repo.forEach((data) => {
        const a = document.createElement("a");
        a.classList.add("repos");
        a.href = data.html_url;
        a.innerHTML = data.name;
        reposElement.append(a);
    });
    const span = document.createElement("span");
};

const getRepos = async (user) => {
    const res = await fetch(APIURL + user + "/repos");
    const response = await res.json();
    addReposToCard(response);
};

const getUser = async (user) => {
    const res = await fetch(APIURL + user);
    const response = await res.json();
    createUserCard(response);
    getRepos(user);
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
