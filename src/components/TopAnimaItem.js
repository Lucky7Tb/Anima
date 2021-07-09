export default class TopAnimaItem extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.renderHtml();
    }

    set anima(anima){
        this._anima = anima;
        this.renderHtml();
    }

    set type(type){
        this._type = type;
        this.renderHtml();
    }

    renderHtml(){
        this.innerHTML = `
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
                    <span class="btn-floating halfway-fab center-align blue lighten-1">${this._anima.rank}</span>
                    <img src="${this._anima.image_url}" alt="${this._anima.title}" style="background-size: cover; width: 100%; height: 350px">
                </div>
                <div class="card-content">
                    <h6 class="card-title ${this._anima.title.length <= 20 ? "" : "tooltipped"} truncate" data-position="top" data-tooltip="${this._anima.title}">${this._anima.title}</h6>
                    <table class="centered responsive-table">
                        <thead>
                            <tr>
                                <th>Tipe</th>
                                <th>Score</th>
                                <th>${this._type  === "anime" ? "Episode" : "Volume"}</th>
                                <th>Rilis</th>
                                <th>Tamat</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${this._anima.type}</td>
                                <td>${this._anima.score}</td>
                                <td>${this._type === "anime" ? this._anima.episodes == null ? "?" : this._anima.episodes : this._anima.volumes  == null ? "?" : this._anima.volumes}</td>
                                <td>${this._anima.start_date}</td>
                                <td>${this._anima.end_date === null ? "?" : this._anima.end_date}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        `
       
    }
}

customElements.define("top-anima-item", TopAnimaItem);