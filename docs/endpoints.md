# Endpoints
This document provides an overview of the API endpoints that this application use.
The API endpoints are integrated in the `src/api/` directory.

| API | Endpoint | Method | Description |
|----|----|----|----|
| **JSONbin** | `https://api.jsonbin.io/v3/b/{binId}/latest` | GET | Retrieves the users in the bin.|
| **JSONbin** | `https://api.jsonbin.io/v3/b/{binId}` | PUT | Updates the users in the bin.|
| **CoinMarketCap** | `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest` | GET | Retrieves a specific cryptocurrency data. |
