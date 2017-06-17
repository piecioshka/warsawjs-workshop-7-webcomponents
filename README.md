# warsawjs-workshop-7-webcomponents

> Aplikacja stworzona na potrzeby WarsawJS Workshop #7

![](http://warsawjs.com/assets/images/logo/logo-transparent-240x240.png)

## Wspierane przeglądarki

* Google Chrome v53

## Projekt 1: Mockup ([Demo][demo-1])

> Prezentacja obrazka w na komputerze

<details>
    <summary>Treść zadania nr. 1</summary>

1. Zaprezentować obrazek z tekstem.
    1.1. Tekst musi być inny fontem
    1.2. Dodanie styli dla komponentu
2. Stworzyć markup w `<template>`.
3. Zbudować custom element
    3.1. Stworzyć klasę dziedziczącą po `HTMLElement`
    3.2. Podłączyć Shadow DOM-a do custom elementu
    3.3. Zapisać się na lifecycle hook `connectedCallback`
    3.4. Pobrać zawartość szablonu
    3.5. Wyrenderować szablon do Shadow DOM-a
        - widać obrazek, pomimo tego, że ma ustawionego atrybutu `src` nie 
            jest wysyłany request po zasób
    3.6. Pobrać adres do obrazka
    3.7. Wyrenderować obrazek
4. Dodać kolejny custom element (z innym obrazkiem)
    4.1. Rozwiązać problem braku szablonu za pomocą `cloneNode(true)`
5. Dodać możliwość ustawiania innego tekstu dla różnych elementów
    5.1. Rozwiązać problem z kodowaniem ustawiając odpowiedni meta tag.
6. Zamknąć komponent w pojedynczy katalog
    6.1. Stworzyć główny plik `index.html` w aplikacji
    6.2. Zaimportować komponent za pomocą HTML Imports `<link rel="import"/>`

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

## Źródła, czyli tam gdzie warto zajrzeć

* https://unsplash.it/
* https://github.com/piotrl/github-profile-card
* https://css-tricks.com/snippets/css/complete-guide-grid/
* http://placeskull.com/

---
## License

[The MIT License](http://piecioshka.mit-license.org) @ 2017


[demo-1]: https://piecioshka.github.io/warsawjs-workshop-7-webcomponents/1-mockup
[demo-2]: https://piecioshka.github.io/warsawjs-workshop-7-webcomponents/2-github-profile-card
[demo-3]: https://piecioshka.github.io/warsawjs-workshop-7-webcomponents/3-media-projector
