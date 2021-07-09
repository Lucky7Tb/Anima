import main from "../assets/js/app.js";
import Logo from "../assets/image/anima-logo-2.png";
import { topAnimaPage, aboutAnimaPage, scheduleAnimaPage} from "../pages";

export default class NavBar extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.renderHtml();
    }

    renderHtml(){
        this.innerHTML = `
        <nav class="blue lighten-1">
            <div class="container">
                <div class="nav-wrapper">
                <a href="#!" class="brand-logo"></a>
                <a href="#" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="#" class="top-anima">Top Anima</a></li>
                    <li><a href="#" class="schedule-anima">Schedule Anima</a></li>
                    <li><a href="#" class="about-anima">About Anima</a></li>
                </ul>
                </div>
            </div>
        </nav>
        
        <ul class="sidenav" id="mobile-nav">
            <li><a href="#" class="top-anima">Top Anima</a></li>
            <li><a href="#" class="schedule-anima">Schedule Anima</a></li>
            <li><a href="#" class="about-anima">About Anima</a></li>
        </ul>
        `
        const topAnimaNav = document.querySelectorAll('.top-anima');
        const scheduleAnimaNav = document.querySelectorAll('.schedule-anima');
        const searchAnimaNav = document.querySelectorAll('.search-anima');
        const aboutAnimaNav = document.querySelectorAll('.about-anima');
        topAnimaNav.forEach(topNav => {
            topNav.addEventListener('click', event => {
                event.preventDefault();
                main(topAnimaPage);
            })
        })

        scheduleAnimaNav.forEach(scheduleNav => {
            scheduleNav.addEventListener('click', event => {
                event.preventDefault();
                main(scheduleAnimaPage);
            })
        })

        searchAnimaNav.forEach(searchNav => {
            searchNav.addEventListener('click', event => {
                event.preventDefault();
                main(searchAnimaPage);
            })
        })

        aboutAnimaNav.forEach(aboutNav => {
            aboutNav.addEventListener('click', event => {
                event.preventDefault();
                main(aboutAnimaPage);
                const myLogo = new Image(150);
                myLogo.src = Logo;
                document.querySelector("#image-container").appendChild(myLogo);

            })
        })
    }
}

customElements.define("nav-bar", NavBar);