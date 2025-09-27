const UserContainer = document.querySelector("#userContainer");
const fetchUsers = () => {
    fetch("https://dummyjson.com/users")
    .then((res) => res.json ())
    .then((data) => {
        const users = data.users;

        users.forEach((u) => {
            const userDiv = document.createElement("div");
            userDiv.classList.add("user");

            userDiv.innerHTML = `<div><img src=${u.image} /> </div>
            <h2>${u.username}</h2>
            <h3>${u.gender}</h3>
            <h4>${u.email}</h4>
            <p>${u.bloodGroup}</p>`;
            
            UserContainer.appendChild(userDiv);
        });
    })
    .catch((err) => console.log("error", err));
};
fetchUsers();