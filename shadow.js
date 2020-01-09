(function() {
    customElements.define('show-hello', class extends HTMLElement {
        connectedCallback() {
            const shadow = this.attachShadow({mode: 'open'});
            shadow.innerHTML = `<p>
            Hello, ${this.getAttribute('name')}
            </p>`;
        }
    });

    customElements.define('second-shadow', class extends HTMLElement {
        connectedCallback() {
            const shadow = this.attachShadow({mode: 'closed'});
            shadow.innerHTML = `<h1>The example is about ${this.getAttribute('theme')}</h1>`;
        }
    });
})();
