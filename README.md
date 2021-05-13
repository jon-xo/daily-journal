# [Daily Journal](https://jon-xo.github.io/daily-journal/)

## Description

A minimalist front-end design project built with Vanilla JavaScript, which allows users to record moods and thoughts when learning software development fundamentals.

## Installation

1.  Download and install [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
    - If Node.js and npm are already installed, use `node -v && npm -v` to check the version and verify that both versions are `v10.24.1` & `6.14.13` or greater.
    - If the version is older than the minimum requirement, update to the latest stable version of [node](https://docs.npmjs.com/try-the-latest-stable-version-of-node) & [npm](https://docs.npmjs.com/try-the-latest-stable-version-of-npm).
2. Use https or SSH to clone the project folder to a local directory:
    ```Shell
       $ git clone ...
    ```
3. Install the JSON Server node package: 
    ```Shell
    $ npm install -g json-server
    ```
4. From the project directory, start JSON Server with the following options:
    ```Shell 
    $json-server --watch default-entries.json --port 8088
    ```
5. Replace the URL prefix `https://jonxo-daily-journal.herokuapp.com/` with `http://localhost:8088/` in the following files:
    - `scripts/data/instructor/insProvider.js`
    - `scripts/data/journal/JournalDataProvider.js`
    - `scripts/data/mood/moodProvider.js`
6. Start the project by using a local development web server (e.g. [LiveServer for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)).