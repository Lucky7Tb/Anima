export default class ScheduleAnimaItem extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.renderHtml();
    }

    set schedule(schedule){
        this._schedule = schedule;
        this.renderHtml();
    }

    renderHtml(){
        this.innerHTML = `
        <div class="col s12 l12">
            <h4 class="header">${this._schedule.title}</h4>
            <div class="card hoverable horizontal">
                <div class="card-image hide-on-med-and-down">
                    <img src="${this._schedule.image_url}" class="responsive-img materialboxed" data-caption="${this._schedule.title}" alt="${this._schedule.title}">
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p lang="en" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 600px;" class="hide-on-small-only">${this._schedule.synopsis}</p>
                        <button href="#" class="btn-flat activator hide-on-med-and-down" style="display: ${this._schedule.synopsis.length <= 100 ? 'none' : 'inline-block'}">Read More</button>
                        <div class="center hide-on-large-only">
                            <a class="btn-flat modal-trigger center" href="#sinopsis-modal" style="display: ${this._schedule.synopsis.length <= 100 ? 'none' : 'inline-block'}">Baca Sinopsis</a>
                            <a href="${this._schedule.image_url}" target="_blank" class="btn-flat center">Lihat gambar</a>
                        </div>
                        <table class="centered responsive-table">
                            <thead>
                                <tr>
                                    <th>Tipe</th>
                                    <th>Score</th>
                                    <th>Episode</th>
                                    <th>Rilis</th>
                                    <th>18+</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>${this._schedule.type}</td>
                                    <td>${this._schedule.score === null ? "-" : this._schedule.score}</td>
                                    <td>${this._schedule.episodes === null ? "-" : this._schedule.episodes}</td>
                                    <td>${this._schedule.airing_start}</td>
                                    <td>${this._schedule.r18 ? "Iya" : "Tidak"}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="left" style="margin-top: 5%;">
                            ${
                                this._schedule.genres.map(genre => {
                                    return `
                                        <span class="new badge red lighten-2 hide-on-med-and-down" data-badge-caption="${genre.name}"></span>
                                        <span class="new badge red lighten-2 hide-on-large-only" style="margin-top: 2%"  data-badge-caption="${genre.name}"></span>
                                    `
                                }).join("")
                            }
                        </div>
                    </div>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Sinopsis<i class="material-icons right">close</i></span>
                    <p lang="en">${this._schedule.synopsis}</p>
                </div>
            </div>
        </div>

         <div id="sinopsis-modal" class="modal">
            <div class="modal-content">
              <h4>Sinopsis</h4>
              <p>${this._schedule.synopsis}</p>
            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
            </div>
        </div>
        `
        const materialboxed = document.querySelectorAll('.materialboxed');
        const modal = document.querySelectorAll('.modal');
        M.Modal.init(modal);
        M.Materialbox.init(materialboxed);
    }
}

customElements.define("schedule-anima-item", ScheduleAnimaItem);