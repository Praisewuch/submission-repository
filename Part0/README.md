EXERCISE 0.5

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: main.js
    deactivate server

    Note right of browser: The browser requests the main.js page and only that page thats why there is no reload.

    EXERCISE 0.6

    ```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: the Notes html
    deactivate server

     browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes.json
    activate server
    server-->>browser: the json file
    deactivate server

     browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes.css
    activate server
    server-->>browser: the css file
    deactivate server

    Note right of browser: The browser is posting the information to the server which sends it to the database