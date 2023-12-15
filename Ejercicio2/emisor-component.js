// EmisorComponent.js
class EmisorComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    connectedCallback() {
      const button = this.shadowRoot.querySelector('button');
      button.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('mensajeEnviado', { 
          bubbles: true, 
          composed: true, 
          detail: '¡Hola desde EmisorComponent!' 
        }));
      });
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          button {
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
            background-color: #3498db;
            color: #fff;
            border: none;
            border-radius: 5px;
          }
        </style>
        <button>Enviar Mensaje</button>
      `;
    }
  }
  
  customElements.define('emisor-component', EmisorComponent);
  