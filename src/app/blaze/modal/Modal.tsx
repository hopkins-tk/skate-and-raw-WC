import { h, Component, prop, emit } from 'skatejs';
import styles from './Modal.scss';
import { Button } from '../button/Button';
import { Card } from '../card/Card';
import {css} from "../../ui-fabric/utils/css";

interface ModalProps {
  isOpen?: boolean,
  type?: keyof ModalType,
  onModalClose?: Function,
}

const ModalTypes = {
  full: 'full',
  ghost: 'ghost',
}

type ModalType = typeof ModalTypes;

export class Modal extends Component {
  _props: ModalProps;
  static get is() { return 'bl-modal' }
  static get props() {
    return {
      isOpen: prop.boolean({
        attribute: true
      }),
      type: prop.string({
        attribute: true
      })
    }
  }

  isOpen = false;
  type = null;
  private modalElement: HTMLDivElement;
  private handleEsc(evt:KeyboardEvent){
    if ( evt.which === 27 ) {
      this.handleModalClose()
    }
  }
  private handleModalClose(){
    this.isOpen = !this.isOpen;
    emit(this,'modalClose')
  }
  private focusModal() {
    this.modalElement.focus();
  }
  connectedCallback(){
    super.connectedCallback();
    this.handleEsc = this.handleEsc.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.focusModal = this.focusModal.bind(this);
  }
  renderCallback() {
    const {isOpen, type} = this;

    const className = css(
      'o-modal',
      {
        'o-modal--full': type === ModalTypes.full,
        'o-modal--ghost': type === ModalTypes.ghost
      }
    );


    return [
      <style>{styles}</style>,
      isOpen && <div class="c-overlay c-overlay--fullpage"
                     tabIndex={0}
                     onFocus={this.focusModal}
      />,
      isOpen &&
      <div ref={(_ref: HTMLDivElement)=>this.modalElement=_ref}
           tabIndex={0}
           className={className}
           onKeydown={this.handleEsc}
      >
       <Card prependedClass="o-modal">
         <Button
           slot="dismiss"
           onClick={this.handleModalClose}>
           x
         </Button>
         <div slot="title">
           <slot name="title"></slot>
         </div>
         <div slot="body">
           <slot></slot>
         </div>
         <div slot="footer">
           <slot name="footer"></slot>
         </div>
       </Card>
      </div>
    ]
  }

  renderedCallback() {
    if ( this.isOpen ) {
      this.focusModal();
    }
  }
}

customElements.define( Modal.is, Modal )
