document.addEventListener('DOMContentLoaded', function() {
    const userList = document.getElementById('user-list');
    const userProfile = document.getElementById('user-profile');

    fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.className = 'user';
                userDiv.innerHTML = `<img src="${user.avatar_url}" alt="${user.login}"><span>${user.login}</span>`;
                userDiv.onclick = () => displayUserProfile(user.login);
                userList.appendChild(userDiv);
            });
        });

    function displayUserProfile(username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(user => {
                userProfile.innerHTML = `
                    <img src="${user.avatar_url}" alt="${user.name}">
                    <div>Username: ${user.login}</div>
                    <div>Name: ${user.name || 'N/A'}</div>
                    <div>Location: ${user.location || 'N/A'}</div>
                    <h4>Repositories:</h4>
                    <ul id="repos"></ul>
                `;
                return fetch(user.repos_url);
            })
            .then(response => response.json())
            .then(repos => {
                const reposList = document.getElementById('repos');
                repos.slice(0, 5).forEach(repo => {
                    const repoItem = document.createElement('li');
                    repoItem.textContent = repo.name;
                    reposList.appendChild(repoItem);
                });
            });
    }
});
