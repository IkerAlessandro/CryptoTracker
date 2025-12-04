const api = "ecc10308c609459a949598a744f6cfbd";

const base = "https://corsproxy.io/https://pro-api.coinmarketcap.com";
const mapEndPoint = "/v1/cryptocurrency/map";
const quotesEndPoint = "/v2/cryptocurrency/quotes/latest";

export async function findIds(namesList) {
  const url = new URL(`${base}${mapEndPoint}`);

  try {
    const response = await fetch(url, {
      headers: {
        "X-CMC_PRO_API_KEY": 'ecc10308c609459a949598a744f6cfbd',
      },
    });
    const response_json = await response.json();

    // finding the ids of the cryptocoins passed in the parameter
    let ids = namesList.map((item) => {
      const foundCrypto = response_json.data.find(
        (crypto) => crypto.slug == item
      );
      return foundCrypto.id;
    });
    return ids;
  } catch (error) {
    console.log(error);
  }
}

export async function getCoinsInfo(coinsList) {
  //const coinsIds = await findIds(coinsList);

  const url = new URL(`${base}${quotesEndPoint}`);
  url.searchParams.set("id", coinsList.join());
  try {
    const response = await fetch(url, {
      headers: {
        "X-CMC_PRO_API_KEY": 'ecc10308c609459a949598a744f6cfbd',
      },
    });

    const response_json = await response.json();
    return response_json.data;
  } catch (error) {
    console.error(error);
  }
}

