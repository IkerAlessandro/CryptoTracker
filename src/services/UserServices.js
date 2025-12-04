import { requestPUTUser, requestUserList } from "../api/JSONBin.js"

export const findUser = async (currentUsername) => {
    const response = await requestUserList();
    const user = response.users.find(( {username} ) => username == currentUsername);
    return user;
}

export const updateUserList = async (newUser) => {
    const responseForUserList = await requestUserList();
    responseForUserList.users.push(newUser);
    console.log(await requestPUTUser(responseForUserList));
}

export const editCoinList = async (username, coinId, action) => {
    const userList = await requestUserList();
    const currentUserIndex = userList.users.findIndex((item) => item.username == username);

    if (action == 'add'){
        userList.users[currentUserIndex].favCoins.push(coinId);
    } else {
        const indexOfCoin = userList.users[currentUserIndex].favCoins.indexOf(coinId)
        if (indexOfCoin != -1) {
            userList.users[currentUserIndex].favCoins.splice(indexOfCoin, 1);
            console.log(window.currentUser)
            window.currentUser.favCoins = userList.users[currentUserIndex].favCoins;
        }
    }
    requestPUTUser(userList);
}