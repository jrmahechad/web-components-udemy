class CustomButton extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({ mode: 'open' });
    this.isHidden = true;

    this.shadowRoot.innerHTML = `
    <style>
      p {
        display: block;
      }
      .hide {
        display: none;
      }
    </style>
    <button>Show</button>
    <p >
      <slot></slot>
    </p>
    `;
    this._button = this.shadowRoot.querySelector('button');
  }
  connectedCallback() {
    this._button.addEventListener('click', this._clickListener.bind(this))
    this._toggleText();
  }

  _clickListener(){
    this.isHidden = !this.isHidden;
    this._toggleText();
  }

  _toggleText(){
    const infoEl = this.shadowRoot.querySelector('p')
    if(this.isHidden){
      infoEl.classList.add('hide');
      this._button.textContent = 'Show'
    } else{
      infoEl.classList.remove('hide');
      this._button.textContent = 'Hide'
    }
  }
}

customElements.define('uc-custom-button', CustomButton);