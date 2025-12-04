import { setNewUserEventListeners, setWelcomeEventsListeners } from "../../controllers/AppController.js";

export const renderWelcomeView = () => {
    const main_div = document.getElementById('main_div');
    main_div.innerHTML = (
        `<div>
            <form id="login">
                <label for="username">Please insert your username:</label>
                <input id="username" type="text"/>
                <button>Look for username</button>
            </form>
        </div>`
    );
    setWelcomeEventsListeners();
}

export const renderNewUserSection = () => {
    const main_div = document.getElementById('main_div');
    const usernameField = document.getElementById('username');

    let newUserDiv = document.getElementById('new_user');
    if (newUserDiv == null) {
        newUserDiv = document.createElement('div');
        newUserDiv.id = 'new_user';
        main_div.append(newUserDiv);
    }
    
    newUserDiv.innerHTML = (`
        <h3>New User Detected</h3>
        <p>We couldn't find new user in our system, do you want to add <strong>${usernameField.value}</strong> new user?</p>
        <button id="new_user_btn">Add new user</button>
    `);
    setNewUserEventListeners();
}
