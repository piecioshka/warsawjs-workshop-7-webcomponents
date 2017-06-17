let fetchComponent = (function () {
    function parseResponse(response) {
        let parser = new DOMParser();
        return parser.parseFromString(response, 'text/html')
    }

    function createRelativeURL(componentURL, assetURL) {
        let componentDir = componentURL.split(/\/.+\.html/)[0];
        return `${componentDir}/${assetURL}`;
    }

    function fixStylesheetLink(componentURL, docFragment) {
        let stylesheet = docFragment.querySelector('link[rel=stylesheet]');
        return stylesheet.href = createRelativeURL(componentURL, stylesheet.getAttribute('href'));
    }

    function fetchComponent(url) {
        let options = { method: 'GET' };
        return fetch(url, options)
            .then(response => response.text())
            .then(html => parseResponse(html))
            .then(imported => {
                let template = imported.querySelector('template');
                let script = imported.querySelector('script');
                let newScript = document.createElement('script');

                fixStylesheetLink(url, template.content);
                newScript.src = createRelativeURL(url, script.getAttribute('src'));

                document.body.appendChild(template);
                document.body.appendChild(newScript);
            });
    }

    return fetchComponent;
}());
