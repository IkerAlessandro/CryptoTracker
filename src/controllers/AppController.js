import { renderCoinAlreadyAdded, renderDashborad, renderRetrievedCrypto } from '../ui/views/DashboardView.js';
import { editCoinList, findUser, updateUserList } from '../services/UserServices.js';
import { renderNewUserSection, renderWelcomeView } from '../ui/views/WelcomeView.js';
import { User } from '../classes/User.js';
import { findIds } from '../api/CoinMarketCap.js';

export default async () => {
    window.currentUser = null
    if (window.localStorage.getItem('username') == undefined){
        renderWelcomeView();
    } else {
        const user = await findUser(window.localStorage.getItem('username'));
        window.currentUser = new User(user.username, user.favCoins);
        renderDashborad();
    }
};

export const setWelcomeEventsListeners = () => {
    const loginForm = document.getElementById('login');
    const usernameField = document.getElementById('username');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const user = await findUser(usernameField.value);
        if (user == undefined) renderNewUserSection();
        else {
            localStorage.setItem('username', user.username);
            window.currentUser = new User(user.username, user.favCoins);
            renderDashborad();
        };
    });
}

export const setLogOutEventListener = () => {
    const logOutButton = document.getElementById('log_out_button');
    logOutButton.addEventListener('click', () => {
        window.currentUser = null;
        localStorage.setItem('username', null);
        renderWelcomeView();
    })
}

export const setNewUserEventListeners = () => {
    const newUserBtn = document.getElementById('new_user_btn');
    const usernameField = document.getElementById('username');
    let newUser = new User(usernameField.value, []);
    newUserBtn.addEventListener('click', async () => {
        updateUserList(newUser);
        window.currentUser = newUser;
        renderDashborad();
    });
};

export const setDeleteButtonListener = (coinId) => {
    const deleteButton = document.getElementById(`${coinId}_deleteButton`);
    console.log(deleteButton)
    deleteButton.addEventListener('click', () => {
        document.getElementById(`coin_${coinId}`).remove();
        editCoinList(window.currentUser.username, coinId, 'remove');
        console.log(window.currentUser)
    })
}

export const setSearchCoinButtonListener = () => {
    const searchButton = document.getElementById('search_crypto_form');
    searchButton.addEventListener('submit', async (event) => {
        event.preventDefault();
        const valueOfSearch = document.getElementById('cryptocurrency');
        const id = await findIds([valueOfSearch.value]);
        renderRetrievedCrypto(id);
    });
};

export const setAddToFavoriteButtonListener = (addToFavButton, id) => {
    addToFavButton.addEventListener('click', async () => {
        if (window.currentUser.favCoins.find((element) => element == id.toString())){
            renderCoinAlreadyAdded();
        } else {
            editCoinList(window.currentUser.username, id.toString(), 'add');
            window.currentUser.favCoins.push(id.toString());
            renderDashborad();
        }
    })
}