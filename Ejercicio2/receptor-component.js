// ReceptorComponent.js
class ReceptorComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    connectedCallback() {
      document.addEventListener('mensajeEnviado', (evento) => {
        this.actualizarInfo(evento.detail);
      });
    }
  
    actualizarInfo(mensaje) {
      this.shadowRoot.querySelector('p').textContent = mensaje;
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          p {
            font-size: 18px;
            margin-top: 20px;
            color: #333;
          }
        </style>
        <p>Información actualizada aparecerá aquí</p>
      `;
    }
  }
  
  customElements.define('receptor-component', ReceptorComponent);
  