import './style.css';
import './app/raw-wc';
import './app/skate-wc';
import './app/ui-fabric';
import './app/blaze';

const mountPoint = document.getElementById('app');
const App = () => (`
   <section>
    <h1>WC components catalogue</h1>
    <fieldset>
      <legend><h2>Blaze</h2></legend>
      <demo-bl-buttons></demo-bl-buttons>
      <demo-bl-toggle></demo-bl-toggle>
      <demo-bl-modal tabIndex="0"></demo-bl-modal>       
    </fieldset>
    
    <fieldset>
      <legend><h2>UI Fabric</h2></legend>
      <section>
          <span class="ms-font-su ms-fontColor-themePrimary">Big blue text</span>
      </section>
      <section>
          <demo-buttons></demo-buttons>
      </section>
    </fieldset>        
  </section>
`);

render(App, mountPoint);


function render(rootElement: Function, where: HTMLElement) {
  mountPoint.innerHTML = App();
}