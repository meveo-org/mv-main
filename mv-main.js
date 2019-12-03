import { LitElement, html, css } from "lit-element";

export class MvMain extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --header-height: var(--mv-header-height, 0);
        --footer-height: var(--mv-footer-height, 0);
        --content-padding: var(--mv-content-padding, 20px);
        --margin-left: var(--mv-menu-panel-width, 0);        
      }

      main {
        padding: var(--content-padding);
      }

      .header {
        grid-area: header;        
      }

      .menu {
        grid-area: menu;
      }

      .main {
        grid-area: main;
        overflow-y: auto;
      }

      .footer {
        grid-area: footer;
      }

      .mv-main-container {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        padding: 0;
        margin: 0;
        display: grid;
        place-items: stretch stretch;
        grid-template-columns: var(--margin-left) auto;
        grid-template-rows: var(--header-height) auto calc(var(--footer-height) + 1px); 
        grid-template-areas:
          "menu header"
          "menu main"
          "menu footer";
      }
    `;
  }

  render() {
    return html`
      <div class="mv-main-container">
        <div class="header"><slot name="header"></slot></div>
        <div class="menu"><slot name="menu"></slot></div>
        <div class="main"><main><slot></slot></main></div>
        <div class="footer"><slot name="footer"></slot></div>
      </div>
    `;
  }
}

customElements.define("mv-main", MvMain);
