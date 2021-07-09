import "./ScheduleAnimaItem.js";

export default class ScheduleAnimaList extends HTMLElement{
    constructor(){
        super();
        this._scheduleAnima = [];
    }
    
    connectedCallback(){
        this.renderHtml();
    }

    set scheduleAnima(scheduleAnima){
        this._scheduleAnima = scheduleAnima;
        this.renderHtml();
    }

    renderHtml(){
        this.innerHTML = "";
        this._scheduleAnima.forEach(schedule => {
            const scheduleAnimaItemElement = document.createElement("schedule-anima-item");
            scheduleAnimaItemElement.schedule = schedule;
            this.appendChild(scheduleAnimaItemElement);
        });

    }
}

customElements.define("schedule-anima-list", ScheduleAnimaList);