const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}
const displayUsers = users => {

    const userContainer = document.getElementById('randomUser-container');
    for (const user of users) {
        console.log(user)
        const userDiv = document.createElement('div');
        userDiv.classList.add('card')
        userDiv.innerHTML = `
            <img src="${user.picture.large}" class="card-img-top img">
            <div class="card-body items">
                <h5 class="card-title">Name: ${user.name.title} ${user.name.first} ${user.name.last}</h5>
                <p class="card-text">Email : ${user.email} </p>
                <br> 
                <br>
                <p class="items warning-text">Wanna Date this girl? <i class="fa-solid fa-arrow-down items"></i></p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Click Here!</button>
            </div>

        `;
        userContainer.appendChild(userDiv);
    }
}
loadUser()