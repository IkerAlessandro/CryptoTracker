# Architecture Sketch
---
This document provides an overview of the architecture for Project 02. The architecture is designed to ensure scalability and maintainability.

#### Detailed Description
The application follows a MVC (Model-View-Controller) architecture pattern, separating concerns into distinct layers:

**Model**: Represent the data structures and business logic. The next modules make up the model layer: 
- `api/:` Contains modules for interacting with external APIs (JSONBin, CoinMarketCap).
- `classes/:` Contains class definitions for core entities (User, Coin, State).
- `state/:` Manages user state (e.g., UserState). Responsible for user state between sessions using client-local storage.
- `services/:` Contains business logic and data manipulation (UserService, CoinService).

**Controller**: Manages the flow of data between the model and view layers.
- `controllers/:` Contains the main application controller (AppController) that orchestrates interactions between the model and view layers.

**View**: Responsible for the user interface and presentation logic.
- `ui/views/:` Contains views (WelcomeView, DashboardView).
- `ui/css/:` Contains stylesheets for the application.

#### Directory Architecture
```
repo
 |-- docs/
 |   |-- architecture_sketch.md         # This file.
 |   |-- pitch.md                       # Project Description and Core Loop.
 |   |-- JSONBin_schema.md              # JSONBin Schema used for storing user data.
 |   |-- media/
 |-- src/
 |    |-- api/
 |    |     |-- JSONBin.js              # Handles interactions with JSONBin API.
 |    |     |-- CMC.js                  # Handles interactions with CoinMarketCap API.
 |    |-- classes/
 |    |     |-- User.js                 # User class definition.
 |    |     |-- Coin.js                 # Coin class definition.
 |    |     |-- State.js                # State class definition.
 |    |-- controllers/
 |    |    |-- AppController.js        # Main application controller.
 |    |-- services/
 |    |     |-- UserService.js          # Business logic for user-related operations.
 |    |     |-- CoinService.js          # Business logic for coin-related operations.
 |    |-- state/
 |    |     |-- UserState.js            # Manages user state with local storage.
 |    |-- ui/
 |    |     |-- css/
 |    |     |-- views/
 |    |     |    |-- WelcomeView.js    # View for the welcome screen.
 |    |     |    |-- DashboardView.js  # View for the dashboard screen.
 |    |-- main.js                      # Entry point of the application.
 |    |-- index.html                   # Main HTML file.
```
