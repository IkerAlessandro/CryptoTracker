import { getCoinsInfo } from "../../api/CoinMarketCap.js";
import { setAddToFavoriteButtonListener, setDeleteButtonListener, setLogOutEventListener, setSearchCoinButtonListener } from "../../controllers/AppController.js";

export const renderDashborad = async () => {
    let user = window.currentUser;
    const main_div = document.getElementById('main_div');
    main_div.innerHTML = (
        `<div>
            <h3>Welcome Back ${user.username}</h3>
            <button id="log_out_button">Log out</button>
            <section id="search_crypto_section">
                <form id="search_crypto_form">
                    <label for="search_crypto">What are you looking for?</label>
                    <input type="text" name="cryptocurrency" id="cryptocurrency">
                    <button>Search</button>
                </form>
                <div id="search_result"></div>
            </section>
            <section>
                <h3>Here are your favorites coins</h4>
                <ul id=fav_coins></ul> 
            </section>
        </div>`
    );

    setSearchCoinButtonListener();
    setLogOutEventListener();

    const fav_coins_ul = document.getElementById('fav_coins');
    if (user.favCoins.length !== 0) {
        const coinsInfo = await getCoinsInfo(user.favCoins.map((item) => parseInt(item)));
        for (let coinId of user.favCoins) {
            let price = parseFloat(coinsInfo[coinId].quote.USD.price).toFixed(2);
            let coin_card = `
            <div>
                <h4>${coinsInfo[coinId].name}</h4>
                <p>${coinsInfo[coinId].symbol}</p>
                <p>$${price}</p>
                <button id=${coinId}_deleteButton>Delete</button>
            </div>
            `
            fav_coins_ul.innerHTML += `<li id=coin_${coinId}>${coin_card}</li>`;
        }

        user.favCoins.forEach((id) => setDeleteButtonListener(id));
    }
}

export const renderRetrievedCrypto = async (id) => {
    const resultDiv = document.getElementById('search_result');
    const newCryptoDiv = document.createElement('div');

    if (id == undefined) {
        newCryptoDiv.innerHTML = '<p>Coin not found</p>'
    } else {
        window.searchedCoinId = id;
        const coinInfo = await getCoinsInfo(id);

        const cryptoName = document.createElement('h4');
        cryptoName.textContent = `${coinInfo[id].name} (${coinInfo[id].symbol})`;
        
        const cryptoPrice = document.createElement('p');
        cryptoPrice.textContent = `${coinInfo[id].quote.USD.price.toFixed(2)}`;

        const addToFavButton = document.createElement('button');
        addToFavButton.id = 'addToFavButton';
        addToFavButton.textContent = 'Add to Favorities';

        newCryptoDiv.append(cryptoName);
        newCryptoDiv.append(cryptoPrice);
        newCryptoDiv.append(addToFavButton);
        setAddToFavoriteButtonListener(addToFavButton, id);
    }
    
    resultDiv.innerHTML ='';
    resultDiv.append(newCryptoDiv);
};

export const renderCoinAlreadyAdded = () => {
    const resultDiv = document.getElementById('search_result');

    const alerDiv = document.createElement('div');
    const alertMessage = document.createElement('p');
    alertMessage.textContent = 'Coin already in favorites';
    alerDiv.appendChild(alertMessage);

    resultDiv.appendChild(alerDiv);
}