/*! Built with http://stenciljs.com */
import { h } from '../udemywccource.core.js';

import { a as AV_API_KEY } from './chunk-280a775a.js';

class StockPrice {
    constructor() {
        this.stockInputValid = false;
        this.loading = false;
    }
    stockSymbolChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.stockUserInput = newValue;
            (this.stockInputValid = true);
            this.fetchStockPrice(newValue);
        }
    }
    onUserInput(event) {
        this.stockUserInput = event.target.value;
        if (this.stockUserInput.trim() !== "") {
            this.stockInputValid = true;
        }
        else {
            this.stockInputValid = false;
        }
    }
    onFetchStockPrice(event) {
        event.preventDefault();
        this.stockSymbol = this.stockInput.value;
    }
    componentWillLoad() {
        console.log("componentWillLoad", this.stockSymbol);
    }
    componentDidLoad() {
        console.log("componentDidLoad");
        if (this.stockSymbol) {
            this.stockUserInput = this.stockSymbol;
            this.stockInputValid = true;
            this.fetchStockPrice(this.stockSymbol);
        }
    }
    componentWillUpdate() {
        console.log("componentWillUpdate");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    componentDidUnload() {
        console.log("componentDidUnload");
    }
    onStockSymbolSelected(event) {
        console.log("stock symbol selected: ", event.detail);
        if (event.detail && event.detail !== this.stockSymbol) {
            this.stockSymbol = event.detail;
        }
    }
    fetchStockPrice(stockSymbol) {
        this.loading = true;
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`)
            .then(res => {
            if (res.status !== 200) {
                throw new Error("Invalid!");
            }
            return res.json();
        })
            .then(parsedRes => {
            console.log(parsedRes);
            if (!parsedRes["Global Quote"]["05. price"]) {
                throw new Error("Invalid Symbol!");
            }
            this.error = null;
            this.fetchedPrice = +parsedRes["Global Quote"]["05. price"];
            this.loading = false;
        })
            .catch(err => {
            console.log(err.message);
            this.error = err.message;
            this.fetchedPrice = null;
            this.loading = false;
        });
    }
    hostData() {
        return {
            class: this.error ? "error" : ""
        };
    }
    render() {
        let dataContent = h("p", null, "Please enter a symbol!");
        if (this.error) {
            dataContent = h("p", null, this.error);
        }
        if (this.fetchedPrice) {
            dataContent = h("p", null,
                "Price: $",
                this.fetchedPrice);
        }
        if (this.loading) {
            dataContent = h("uc-spinner", null);
        }
        return [
            h("form", { onSubmit: this.onFetchStockPrice.bind(this) },
                h("input", { id: "stock-symbol", ref: el => (this.stockInput = el), value: this.stockUserInput, onInput: this.onUserInput.bind(this) }),
                h("button", { type: "submit", disabled: !this.stockInputValid || this.loading }, "Fetch")),
            h("div", null, dataContent)
        ];
    }
    static get is() { return "uc-stock-price"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "error": {
            "state": true
        },
        "fetchedPrice": {
            "state": true
        },
        "loading": {
            "state": true
        },
        "stockInputValid": {
            "state": true
        },
        "stockSymbol": {
            "type": String,
            "attr": "stock-symbol",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["stockSymbolChanged"]
        },
        "stockUserInput": {
            "state": true
        }
    }; }
    static get listeners() { return [{
            "name": "body:ucSymbolSelected",
            "method": "onStockSymbolSelected"
        }]; }
    static get style() { return ":host{font-family:sans-serif;border:2px solid #3b013b;margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}:host(.error){border-color:#e79804}form input{font:inherit;color:#3b013b;padding:.1rem .25rem;display:block;margin-bottom:.5rem}form button:focus,form input:focus{outline:none}form button{font:inherit;padding:.25rem .5rem;border:1px solid #3b013b;background:#3b013b;color:#fff;cursor:pointer}form button:active,form button:hover{background:#750175;border-color:#750175}form button:disabled{background-color:#ccc;border-color:#ccc;color:#fff;cursor:not-allowed}"; }
}

export { StockPrice as UcStockPrice };
