import "./TopAnimaItem.js";

export default class TopAnimaList extends HTMLElement{
    constructor(){
        super();
        this._topAnima = [];
    }
    
    connectedCallback(){
        this.renderHtml();
    }

    set topAnima(topAnima){
        this._topAnima = topAnima;
        this.renderHtml();
    }

    set animaType(animaType){
        this._animaType = animaType;
        this.renderHtml();
    }

    renderHtml(){
        this.innerHTML = "";
        this._topAnima.forEach(anima => {
            const animaItemElement = document.createElement("top-anima-item");
            animaItemElement.anima = anima;
            animaItemElement.type = this._animaType;
            this.appendChild(animaItemElement);
        });

    }
}

customElements.define("top-anima-list", TopAnimaList);