# warsawjs-workshop-7-webcomponents

> Aplikacja stworzona na potrzeby WarsawJS Workshop #7

![](http://warsawjs.com/assets/images/logo/logo-transparent-240x240.png)

## Wspierane przeglądarki

* Google Chrome v54

## Projekt 1: Mockup

> Prezentacja obrazka w na komputerze

1. Można wykorzystać:
    - https://unsplash.it/720/400?image=8
    - https://unsplash.it/720/400?image=9
2. Zbudowanie obrazka z tekstem.
    2.1. Tekst musi być inny fontem
3. Wrzucenie markupu do `<template>`.
4. Zbudowanie CustomElement-u
    4.1. Stworzenie klasy dziedziczącej po `HTMLElement`
    4.2. Podłączenie Shadow DOM-a do custom elementu
    4.3. Zapisanie się na lifecycle hook `connectedCallback`
    4.4. Pobranie zawartości szablonu
    4.5. Render szablonu do Shadow DOM-a
        - jak widać obrazek, pomimo tego, że ma ustawiony atrybut `src` nie 
            jest wysyłany request po zasób
    4.6. Dodanie styli komponentu
    4.7. Pobranie linku do obrazka
5. Dodać kolejny custom element z innym obrazkiem
    5.1. Rozwiązać problem braku szablonu za pomocą `cloneNode(true)`
6. Dodać możliwość ustawiania innego tekstu dla różnych elementów
    6.1. Rozwiązać problem z kodowaniem ustawiając odpowiedni meta tag.
7. Zamknięcie komponentu w pojedynczy katalog
    7.1. Stworzenie głównego pliku index.html w aplikacji
    7.2. Import komponentu za pomocą HTML Imports `<link rel="import"/>`

---

## Projekt 2

---

## Projekt 3

---

## Popularne błędy

* Error nr. 1
    
    ```
    Uncaught DOMException: Failed to execute 'define' on 'CustomElementRegistry': "mockup" is not a valid custom element name
    ```

    Nie wolno:
    
    ```javascript
    customElement.define('mockup', MockupElement);
    ```

    Trzeba:
    
    ```javascript
    customElement.define('mockup-element', MockupElement);
    ```

* Error nr. 2
    
    ```
    Uncaught DOMException: Failed to construct 'CustomElement': The result must not have children (anonymous) @ (index):13
    ```
    
    Nie wolno:
    
    ```javascript
    this.textContent = '...';
    ```
    
    Trzeba:
    
    ```javascript
    shadow.textContent = '...';
    ```

---
## License

[The MIT License](http://piecioshka.mit-license.org) @ 2017
