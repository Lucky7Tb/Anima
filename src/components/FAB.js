export default class FAB extends HTMLElement{
	constructor(){
        super();
    }

    connectedCallback(){
        this.renderHtml();
    }

    renderHtml(){
    	this.innerHTML = `
	 	<div class="fixed-action-btn">
		    <a class="btn-floating btn-large go-to-top-btn">
		      <i class="large material-icons">arrow_upward</i>
		    </a>
	  	</div>
    	`
    }
}

customElements.define("floating-button", FAB);