import { AV_API_KEY } from "../../global/global";
export class StockFinder {
    constructor() {
        this.searchResults = [];
        this.loading = false;
    }
    onFindStocks(event) {
        event.preventDefault();
        this.loading = true;
        const stockName = this.stockNameInput.value;
        fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`)
            .then(res => res.json())
            .then(parsedRes => {
            console.log(parsedRes);
            this.searchResults = parsedRes["bestMatches"].map(match => {
                return { symbol: match["1. symbol"], name: match["2. name"] };
            });
            this.loading = false;
        })
            .catch(err => {
            console.log(err);
            this.loading = false;
        });
    }
    onSelectSymbol(symbol) {
        this.ucSymbolSelected.emit(symbol);
    }
    render() {
        let content = (h("ul", null, this.searchResults.map(result => (h("li", { onClick: this.onSelectSymbol.bind(this, result.symbol) },
            h("strong", null, result.symbol),
            " - ",
            result.name)))));
        console.log(this.loading);
        if (this.loading) {
            content = h("uc-spinner", null);
        }
        return [
            h("form", { onSubmit: this.onFindStocks.bind(this) },
                h("input", { id: "stock-symbol", ref: el => (this.stockNameInput = el) }),
                h("button", { type: "submit" }, "Find!")),
            content
        ];
    }
    static get is() { return "uc-stock-finder"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "loading": {
            "state": true
        },
        "searchResults": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "ucSymbolSelected",
            "method": "ucSymbolSelected",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:uc-stock-finder:**/"; }
}
