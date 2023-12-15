class HeaderComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <header>
          <h1>¡Bienvenido Al Sistema</h1>
          <h1>Dennis Ayo</h1>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', HeaderComponent);
  