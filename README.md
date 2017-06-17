# warsawjs-workshop-7-webcomponents

> Aplikacja stworzona na potrzeby WarsawJS Workshop #7

![](http://warsawjs.com/assets/images/logo/logo-transparent-240x240.png)

## Wspierane przeglądarki

* Google Chrome v53

## Projekt 1: Mockup ([Demo][demo-1])

> Prezentacja obrazka w na komputerze

<details>
    <summary>Treść zadania nr. 1</summary>

1. Można wykorzystać:
    - https://unsplash.it/720/400?image=8
    - https://unsplash.it/720/400?image=9
2. Zbudowanie obrazka z tekstem.
    2.1. Tekst musi być inny fontem
    2.2. Dodanie styli dla komponentu
3. Wrzucenie markupu do `<template>`.
4. Zbudowanie CustomElement-u
    4.1. Stworzenie klasy dziedziczącej po `HTMLElement`
    4.2. Podłączenie Shadow DOM-a do custom elementu
    4.3. Zapisanie się na lifecycle hook `connectedCallback`
    4.4. Pobranie zawartości szablonu
    4.5. Render szablonu do Shadow DOM-a
        - jak widać obrazek, pomimo tego, że ma ustawiony atrybut `src` nie
            jest wysyłany request po zasób
    4.6. Pobranie linku do obrazka
5. Dodać kolejny custom element z innym obrazkiem
    5.1. Rozwiązać problem braku szablonu za pomocą `cloneNode(true)`
6. Dodać możliwość ustawiania innego tekstu dla różnych elementów
    6.1. Rozwiązać problem z kodowaniem ustawiając odpowiedni meta tag.
7. Zamknięcie komponentu w pojedynczy katalog
    7.1. Stworzenie głównego pliku index.html w aplikacji
    7.2. Import komponentu za pomocą HTML Imports `<link rel="import"/>`

</details>

## Projekt 2. GitHub Profile Card ([Demo][demo-2])

> Prezentacja danych dowolnego użytkownika portalu GitHub

<details>
    <summary>Treść zadania nr. 2</summary>

1. Stworzenie markupu
    1.1. Ustawienie kodowania
    1.2. Ustawienie tytułu strony
    1.3. Stworzenie template-u w znaczniku `<template>`
    1.4. Dołączenie pliku `main.js`
    1.5. Wykorzystanie znacznika `github-profile-card-element` do prezentacji
        danych na temat dowolnego użytkownika GitHub-a.
2. Ostylować komponent
    2.1. Avatar użytkownika
    2.2. Imię i nazwisko
    2.3. Bio
    2.4. Lista popularnych repozytoriów
3. Zarejestrowanie komponentu
    3.1. Stworzenie klasy dziedziczącej po `HTMLElement`
    3.2. Dołączenie Shadow DOM-a w konstruktorze
    3.3. W lifecycle hooku `connectedCallback`
        3.3.1. Wyrenderować template
        3.3.2. Pobrać login z atrybutów
        3.3.3. Wysłać zapytanie po publiczne dane użytkownika, którego login
            został zdefiniowany w atrybucie
    3.4. Wyświetlić dane użytkownika: imię i nazwisko, avatar, bio, lokalizację
    3.5. Po wykonaniu pierwszego zapytania wykonać drugie, które pobierze
        listę wszystkich repozytoriów.
    3.6. UWAGA: ze względu na limit zapytań w GitHub API, zapisać sobie
        odpowiedzi do katalog `mocks/` a następnie zamienić URLe na pliki
        statyczne
    3.7. Posortować listę repozytoriów według liczby gwiazdek
    3.8. Zredukować listę repozytoriów do kilku, np. 5
    3.9. Wyrenderować repozytoria

</details>

## Projekt 3: Media Projector ([Demo][demo-3])

> Prezentacja dowolnych media obiektów (np. obrazków) w stylu rotowalnym.

<details>
    <summary>Treść zadania nr. 3</summary>

1. Stworzenie markupu
    1.1. Dodanie 3 zdjęć jako dzieci nowo dodawanego komponentu.
2. Ostylowanie komponentu
    2.1. Na środku prezentować pole na media obiekt
    2.2. Na środku nad polem prezentować guzik PLAY
3. Zarejestrować akcję na kliknięcie w komponent
    3.1. Za pamięci od razu wyrejestrować handler na lifecycle hooku
        `disconnectCallback`
4. Stworzyć klasę `Slider`, która będzie emulowała rotowanie elementu
    4.1. Wykorzystać `ES5 getter`
5. Po kliknięciu w komponent zainicjować slider przekazując mu dane o
    dzieciach wraz z definicją funkcji, która zostanie uruchomiona
    każdorazowo gdy slider chce zaprezentować inną treść
    5.1. Stworzyć funkcję, która będzie wlewała do kontenera z ekranem żądany
        media obiekt
6. Zmienić kursor myszy, po najechaniu na przycisk PLAY
    4.1. Nie pokazywać łapki kiedy prezentowane są media obiekty

</details>

## Projekt 4 ([Demo HI][demo-4-1], [Demo FA][demo-4-2])

> Importowanie komponentów

<details>
    <summary>Treść zadania nr. 4</summary>

1. Przystosowanie komponentu do bycia importowanym
    1.1. Dwa dokumenty (`document.currentScript.ownerDocument` i `document`)
    1.2. Przygotowanie pliku HTML, w którym będzie tylko definicja komponentu
2. Importowanie przy pomocy HTML Import
    2.1. Dwa dokumenty (importowany i importujący)
    2.2. Dodanie `link[rel=import]` do pliku
    2.3. Wstawienie komponentu na stronę
3. Importowanie przy pomocy Fetch API
    3.1. Utworzenie funkcji `fetchComponent`
    3.2. Parsowanie odpowiedzi przy pomocy `DOMParser`
    3.3. Naprawianie zepsutych relatywnych URL-ów w skryptach i arkuszach stylów
    3.4. Dołączanie potrzebnych elementów do strony

</details>

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

* Error nr. 3

    ```
    Uncaught TypeError: Cannot read property 'content' of null
    at HTMLElement.connectedCallback (main.js:10)
    at main.js:21
    ```

    wewnątrz dokumentu importowanego przy pomocy `link[rel=import]`.

    Nie wolno:

    ```javascript
    document.querySelector('...')
    ```

    Trzeba:

    ```javascript
    document.currentScript.ownerDocument.querySelector('...')
    ```

---

## Źródła, czyli tam gdzie warto zajrzeć

* https://github.com/piotrl/github-profile-card
* https://css-tricks.com/snippets/css/complete-guide-grid/
* http://placeskull.com/
* https://www.html5rocks.com/en/tutorials/webcomponents/imports/
* https://hacks.mozilla.org/2014/12/mozilla-and-web-components/

---
## License

[The MIT License](http://piecioshka.mit-license.org) @ 2017


[demo-1]: https://piecioshka.github.io/warsawjs-workshop-7-webcomponents/1-mockup
[demo-2]: https://piecioshka.github.io/warsawjs-workshop-7-webcomponents/2-github-profile-card
[demo-3]: https://piecioshka.github.io/warsawjs-workshop-7-webcomponents/3-media-projector
[demo-4-1]: https://piecioshka.github.io/warsawjs-workshop-7-webcomponents/3-component-import/html-import.html
[demo-4-2]: https://piecioshka.github.io/warsawjs-workshop-7-webcomponents/3-component-import/fetch-api.html

