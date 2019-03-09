/*! Built with http://stenciljs.com */
const{h:t}=window.UdemyWCCource;import{a as e}from"./chunk-280a775a.js";class s{constructor(){this.searchResults=[],this.loading=!1}onFindStocks(t){t.preventDefault(),this.loading=!0,fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.stockNameInput.value}&apikey=${e}`).then(t=>t.json()).then(t=>{console.log(t),this.searchResults=t.bestMatches.map(t=>({symbol:t["1. symbol"],name:t["2. name"]})),this.loading=!1}).catch(t=>{console.log(t),this.loading=!1})}onSelectSymbol(t){this.ucSymbolSelected.emit(t)}render(){let e=t("ul",null,this.searchResults.map(e=>t("li",{onClick:this.onSelectSymbol.bind(this,e.symbol)},t("strong",null,e.symbol)," - ",e.name)));return console.log(this.loading),this.loading&&(e=t("uc-spinner",null)),[t("form",{onSubmit:this.onFindStocks.bind(this)},t("input",{id:"stock-symbol",ref:t=>this.stockNameInput=t}),t("button",{type:"submit"},"Find!")),e]}static get is(){return"uc-stock-finder"}static get encapsulation(){return"shadow"}static get properties(){return{loading:{state:!0},searchResults:{state:!0}}}static get events(){return[{name:"ucSymbolSelected",method:"ucSymbolSelected",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{font-family:sans-serif;border:2px solid var(--color-primary,#000);margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}form input{font:inherit;color:var(--color-primary,#000);padding:.1rem .25rem;display:block;margin-bottom:.5rem}form button:focus,form input:focus{outline:none}form button{font:inherit;padding:.25rem .5rem;border:1px solid var(--color-primary,#000);background:var(--color-primary,#000);color:var(--color-primary-inverse,#fff);cursor:pointer}form button:active,form button:hover{background:var(--color-primary-highlight,grey);border-color:var(--color-primary-highlight,grey)}form button:disabled{background-color:#ccc;border-color:#ccc;color:#fff;cursor:not-allowed}ul{margin:0;list-style:none;padding:0}li{margin:.25rem 0;padding:.25rem;border:1px solid #ccc;cursor:pointer}li:active,li:hover{background:var(--color-primary,#000);color:var(--color-primary-inverse,#fff)}"}}export{s as UcStockFinder};