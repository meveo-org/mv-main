import { LitElement, html, css } from "lit-element";
import "mv-menu-panel";
import "mv-container";
import "mv-header";
import "mv-footer";

import "./mv-main.js";

export class ContainedMainDemo extends LitElement {
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
        --mv-header-height: 66px;
        --mv-footer-height: 40px;
        --mv-menu-panel-width: 300px;
        --mv-container-margin: 50px auto 20px auto;
      }

      .container {
        height: 500px;
        width: 960px;
        margin: 0 auto;
        border: 1px solid #dddddd;
      }
    `;
  }

  render() {
    return html`
      <div class="container">
        <mv-main>
          <mv-header slot="header">
            <mv-header item position="center">MvMain</mv-header>
            <mv-header item position="right"><small>(inside container)</small></mv-header>
          </mv-header>
          <mv-menu-panel menu showLabel slot="menu">
            <mv-menu-panel label>MvMain<small> (inside container)</small></mv-menu-panel>          
            <mv-menu-panel item>Menu 1</mv-menu-panel>
          </mv-menu-panel>
          <h1>MvMain Demo<small> (inside container)</small></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna nec tincidunt praesent semper feugiat nibh. Phasellus vestibulum lorem sed risus. In nisl nisi scelerisque eu ultrices vitae. Dolor magna eget est lorem ipsum dolor sit amet. Ligula ullamcorper malesuada proin libero. Lorem ipsum dolor sit amet consectetur. Enim nec dui nunc mattis. Tellus at urna condimentum mattis pellentesque. Pretium lectus quam id leo in vitae turpis. Consectetur adipiscing elit duis tristique sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Proin libero nunc consequat interdum varius sit. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Et egestas quis ipsum suspendisse ultrices. Posuere lorem ipsum dolor sit amet. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. In aliquam sem fringilla ut morbi. Montes nascetur ridiculus mus mauris vitae ultricies leo.</p>
          <p>Sed odio morbi quis commodo odio aenean sed. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Quis eleifend quam adipiscing vitae proin sagittis nisl. Vitae auctor eu augue ut lectus arcu bibendum. Et malesuada fames ac turpis egestas. Vel orci porta non pulvinar neque. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Vulputate mi sit amet mauris. Duis convallis convallis tellus id interdum velit laoreet. Consequat ac felis donec et odio pellentesque diam.</p>
          <p>Pellentesque nec nam aliquam sem et tortor consequat id porta. Tellus mauris a diam maecenas sed. Tristique risus nec feugiat in fermentum posuere urna. Amet est placerat in egestas erat imperdiet sed. Netus et malesuada fames ac turpis egestas integer eget. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Arcu bibendum at varius vel pharetra vel turpis nunc. Pharetra massa massa ultricies mi quis hendrerit dolor. Egestas dui id ornare arcu odio ut sem nulla. Consectetur adipiscing elit pellentesque habitant morbi. Gravida in fermentum et sollicitudin ac. In nibh mauris cursus mattis molestie a iaculis at erat.</p>
          <p>Vitae auctor eu augue ut lectus. Amet nisl suscipit adipiscing bibendum est. Fermentum odio eu feugiat pretium. Massa placerat duis ultricies lacus sed turpis. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Non curabitur gravida arcu ac tortor. Aliquet nec ullamcorper sit amet risus nullam. Elit scelerisque mauris pellentesque pulvinar. In iaculis nunc sed augue lacus viverra vitae congue eu. Risus sed vulputate odio ut enim. Pretium quam vulputate dignissim suspendisse. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Ullamcorper morbi tincidunt ornare massa eget. Placerat in egestas erat imperdiet sed euismod nisi porta. Convallis posuere morbi leo urna molestie at elementum eu. Amet mauris commodo quis imperdiet massa tincidunt nunc. Nec dui nunc mattis enim ut tellus elementum sagittis. Libero id faucibus nisl tincidunt eget nullam non nisi. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue.</p>
          <p>Condimentum vitae sapien pellentesque habitant morbi tristique. Pharetra vel turpis nunc eget lorem. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Amet mattis vulputate enim nulla aliquet. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Bibendum neque egestas congue quisque egestas diam in arcu. Sed libero enim sed faucibus turpis in eu mi bibendum. Senectus et netus et malesuada fames ac. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Faucibus pulvinar elementum integer enim neque volutpat ac. Venenatis urna cursus eget nunc scelerisque viverra. Tristique senectus et netus et malesuada fames. Nunc congue nisi vitae suscipit tellus mauris a diam. Et malesuada fames ac turpis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna nec tincidunt praesent semper feugiat nibh. Phasellus vestibulum lorem sed risus. In nisl nisi scelerisque eu ultrices vitae. Dolor magna eget est lorem ipsum dolor sit amet. Ligula ullamcorper malesuada proin libero. Lorem ipsum dolor sit amet consectetur. Enim nec dui nunc mattis. Tellus at urna condimentum mattis pellentesque. Pretium lectus quam id leo in vitae turpis. Consectetur adipiscing elit duis tristique sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Proin libero nunc consequat interdum varius sit. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Et egestas quis ipsum suspendisse ultrices. Posuere lorem ipsum dolor sit amet. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. In aliquam sem fringilla ut morbi. Montes nascetur ridiculus mus mauris vitae ultricies leo.</p>
          <p>Sed odio morbi quis commodo odio aenean sed. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Quis eleifend quam adipiscing vitae proin sagittis nisl. Vitae auctor eu augue ut lectus arcu bibendum. Et malesuada fames ac turpis egestas. Vel orci porta non pulvinar neque. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Vulputate mi sit amet mauris. Duis convallis convallis tellus id interdum velit laoreet. Consequat ac felis donec et odio pellentesque diam.</p>
          <p>Pellentesque nec nam aliquam sem et tortor consequat id porta. Tellus mauris a diam maecenas sed. Tristique risus nec feugiat in fermentum posuere urna. Amet est placerat in egestas erat imperdiet sed. Netus et malesuada fames ac turpis egestas integer eget. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Arcu bibendum at varius vel pharetra vel turpis nunc. Pharetra massa massa ultricies mi quis hendrerit dolor. Egestas dui id ornare arcu odio ut sem nulla. Consectetur adipiscing elit pellentesque habitant morbi. Gravida in fermentum et sollicitudin ac. In nibh mauris cursus mattis molestie a iaculis at erat.</p>
          <p>Vitae auctor eu augue ut lectus. Amet nisl suscipit adipiscing bibendum est. Fermentum odio eu feugiat pretium. Massa placerat duis ultricies lacus sed turpis. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Non curabitur gravida arcu ac tortor. Aliquet nec ullamcorper sit amet risus nullam. Elit scelerisque mauris pellentesque pulvinar. In iaculis nunc sed augue lacus viverra vitae congue eu. Risus sed vulputate odio ut enim. Pretium quam vulputate dignissim suspendisse. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Ullamcorper morbi tincidunt ornare massa eget. Placerat in egestas erat imperdiet sed euismod nisi porta. Convallis posuere morbi leo urna molestie at elementum eu. Amet mauris commodo quis imperdiet massa tincidunt nunc. Nec dui nunc mattis enim ut tellus elementum sagittis. Libero id faucibus nisl tincidunt eget nullam non nisi. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue.</p>
          <p>Condimentum vitae sapien pellentesque habitant morbi tristique. Pharetra vel turpis nunc eget lorem. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Amet mattis vulputate enim nulla aliquet. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Bibendum neque egestas congue quisque egestas diam in arcu. Sed libero enim sed faucibus turpis in eu mi bibendum. Senectus et netus et malesuada fames ac. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Faucibus pulvinar elementum integer enim neque volutpat ac. Venenatis urna cursus eget nunc scelerisque viverra. Tristique senectus et netus et malesuada fames. Nunc congue nisi vitae suscipit tellus mauris a diam. Et malesuada fames ac turpis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna nec tincidunt praesent semper feugiat nibh. Phasellus vestibulum lorem sed risus. In nisl nisi scelerisque eu ultrices vitae. Dolor magna eget est lorem ipsum dolor sit amet. Ligula ullamcorper malesuada proin libero. Lorem ipsum dolor sit amet consectetur. Enim nec dui nunc mattis. Tellus at urna condimentum mattis pellentesque. Pretium lectus quam id leo in vitae turpis. Consectetur adipiscing elit duis tristique sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Proin libero nunc consequat interdum varius sit. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Et egestas quis ipsum suspendisse ultrices. Posuere lorem ipsum dolor sit amet. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. In aliquam sem fringilla ut morbi. Montes nascetur ridiculus mus mauris vitae ultricies leo.</p>
          <p>Sed odio morbi quis commodo odio aenean sed. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Quis eleifend quam adipiscing vitae proin sagittis nisl. Vitae auctor eu augue ut lectus arcu bibendum. Et malesuada fames ac turpis egestas. Vel orci porta non pulvinar neque. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Vulputate mi sit amet mauris. Duis convallis convallis tellus id interdum velit laoreet. Consequat ac felis donec et odio pellentesque diam.</p>
          <p>Pellentesque nec nam aliquam sem et tortor consequat id porta. Tellus mauris a diam maecenas sed. Tristique risus nec feugiat in fermentum posuere urna. Amet est placerat in egestas erat imperdiet sed. Netus et malesuada fames ac turpis egestas integer eget. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Arcu bibendum at varius vel pharetra vel turpis nunc. Pharetra massa massa ultricies mi quis hendrerit dolor. Egestas dui id ornare arcu odio ut sem nulla. Consectetur adipiscing elit pellentesque habitant morbi. Gravida in fermentum et sollicitudin ac. In nibh mauris cursus mattis molestie a iaculis at erat.</p>
          <p>Vitae auctor eu augue ut lectus. Amet nisl suscipit adipiscing bibendum est. Fermentum odio eu feugiat pretium. Massa placerat duis ultricies lacus sed turpis. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Non curabitur gravida arcu ac tortor. Aliquet nec ullamcorper sit amet risus nullam. Elit scelerisque mauris pellentesque pulvinar. In iaculis nunc sed augue lacus viverra vitae congue eu. Risus sed vulputate odio ut enim. Pretium quam vulputate dignissim suspendisse. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Ullamcorper morbi tincidunt ornare massa eget. Placerat in egestas erat imperdiet sed euismod nisi porta. Convallis posuere morbi leo urna molestie at elementum eu. Amet mauris commodo quis imperdiet massa tincidunt nunc. Nec dui nunc mattis enim ut tellus elementum sagittis. Libero id faucibus nisl tincidunt eget nullam non nisi. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue.</p>
          <p>Condimentum vitae sapien pellentesque habitant morbi tristique. Pharetra vel turpis nunc eget lorem. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Amet mattis vulputate enim nulla aliquet. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Bibendum neque egestas congue quisque egestas diam in arcu. Sed libero enim sed faucibus turpis in eu mi bibendum. Senectus et netus et malesuada fames ac. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Faucibus pulvinar elementum integer enim neque volutpat ac. Venenatis urna cursus eget nunc scelerisque viverra. Tristique senectus et netus et malesuada fames. Nunc congue nisi vitae suscipit tellus mauris a diam. Et malesuada fames ac turpis.</p>
          <mv-footer slot="footer">
            <mv-footer item>MvMain Demo</mv-footer>
            <mv-footer item position="right"><small>(inside container)</small></mv-footer>
          </mv-footer>
        </mv-main>
      </div>
    `;
  }
}

customElements.define("contained-main-demo", ContainedMainDemo);
