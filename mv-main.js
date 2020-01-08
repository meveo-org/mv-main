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
        --header-height: var(--mv-header-height, 66px);
        --footer-height: var(--mv-footer-height, 40px);
        --content-padding: var(--mv-content-padding, 20px);
        --margin-left: var(--mv-menu-panel-width, 300px);        
      }

      main {
        padding: var(--content-padding);
        grid-area: main;
        overflow-y: auto;
      }

      .header {
        grid-area: header;        
      }

      .menu {
        grid-area: menu;
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
        <main><slot></slot></main>
        <div class="footer"><slot name="footer"></slot></div>
      </div>
    `;
  }
}

customElements.define("mv-main", MvMain);
