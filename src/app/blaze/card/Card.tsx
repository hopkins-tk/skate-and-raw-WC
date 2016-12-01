import {h, Component, prop} from 'skatejs';
import styles from './Card.scss';

interface CardProps {
  prependedClass?: string,
}

export class Card extends Component {
  _props: CardProps;

  static get is() { return 'bl-card' }

  static get props() {
    return {
      prependedClass: prop.string({
        attribute: true
      })
    };
  }

  prependedClass: string = null;

  renderCallback() {
    const {prependedClass} = this;

    return [
      <style>{styles}</style>,
      <div className={prependedClass}>
        <div class="c-card">
          <header class="c-card__header">
            <slot name="dismiss"></slot>
            <h2 class="c-heading">
              <slot name="heading">dfdsf</slot>
            </h2>
          </header>
          <div class="c-card__body">
            <slot name="body">asdidsfds</slot>
          </div>
          <footer class="c-card__footer">
            <slot name="footer">Close</slot>
          </footer>
        </div>
      </div>
    ]
  }
}

customElements.define( Card.is, Card );
