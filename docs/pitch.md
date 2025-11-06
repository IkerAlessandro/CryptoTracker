# Project 2 - Sprint 1 : Pitch & Roadmap Proposal
---

## Overview 
CryptoTracker is a simple **real-time cryptocurrency price tracker** SPA that allows users to monitor their favorite cryptocoin in a smooth interface. 

## Problem/User:
Beginner users often struggle to learn about cryptocurrencies cause so much information given when just starting. They feel oversaturated of information that may not help them at the beginning of their journey. They need a simple tool where they can track their favorites coins and provides **important/simple** market information.

## Core Loop:
User type their username -> **(1)** If user is found in localStorage, get their favorites coins (names or abbreviations). If user is not found in localStorage, send a request to JSONBin. **(2)** If user is found in the JSONBin DB, get their favorites coins (names or abbreviations). **(3)** If user not found in JSONBin DB, create a new user. -> **(Only for 1 and 2)** Once we have the name/abbreviation of their favorite coins, send a request to a public api that returns info about the coins. -> Render the info about the coins if favorite coins exists -> Auto-refresh prices after a specific time -> Look for more cryptocurrencies -> Add new cryptocurrencies to favorite list -> Remove cryptocurrencies from the favorite list.
