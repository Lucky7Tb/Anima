import axios from "axios";
import "../../components";
import Logo from "../image/anima-logo.png";
import { topAnimaPage, aboutAnimaPage, searchAnimaPage,  scheduleAnimaPage} from "../../pages";

export default function main(page){
    const myLogo = new Image();
    let canIRequest = true;
    const logo = document.querySelector(".brand-logo");
    const contentContainer = document.querySelector("#content-container");
    
    myLogo.src = Logo;
    logo.innerHTML = "";
    logo.appendChild(myLogo);
    contentContainer.innerHTML = page;
    M.AutoInit();

    const preloaderTopAnime = document.querySelector(".progress");

    if(page === topAnimaPage){
        const topAnimaElement = document.querySelector("top-anima-list");
        const topAnimaSelect = document.querySelector("#top-anima-select");
        const topAnimaSearchButton = document.querySelectorAll("#top-anima-search-button");
        const topAnimaPrevPaginate = document.querySelector("#top-anima-paginate-prev");
        const topAnimaNextPaginate = document.querySelector("#top-anima-paginate-next");
        let topAnimaPagination = 1;
    
        topAnimaSearchButton.forEach(searchButton => {
            searchButton.onclick = function(event){
                event.preventDefault();
                topAnimaPagination = 1;
                if(canIRequest){
                    getTopAnima(topAnimaPagination);
                    topAnimaPrevPaginate.style.display = "none";
                }else{
                    notification("Maaf, tunggu selama 4 detik", "warning");
                }
            }
        })

        topAnimaPrevPaginate.onclick = function(event){
            event.preventDefault();
            if(canIRequest){
                getTopAnima(--topAnimaPagination);
                if(topAnimaPagination === 1){
                    topAnimaPrevPaginate.style.display = "none";
                }
            }else{
                notification("Maaf, tunggu selama 4 detik", "warning");
            }
        }

        topAnimaNextPaginate.onclick = function(event){
            event.preventDefault();
            if(canIRequest){
                getTopAnima(++topAnimaPagination);
                topAnimaPrevPaginate.style.display = "inline-block";
            }else{
                notification("Maaf, tunggu selama 4 detik", "warning");
            }
        }

        const getTopAnima = async (page = topAnimaPagination) => {
            try {
                    preloaderTopAnime.style.display = "block";
                    const animaType = topAnimaSelect[topAnimaSelect.selectedIndex].dataset.type;
                    const animaSubType = topAnimaSelect.value;
                    const { data } = await axios.get(`https://api.jikan.moe/v3/top/${animaType}/${page}/${animaSubType}`);
                    topAnimaElement.topAnima = data.top;
                    topAnimaElement.animaType = animaType;
            
            } catch (error) {
                notification("Terjadi kesalahan pada server!", "danger");
            }finally{
                preloaderTopAnime.style.display = "none";
                canIRequest = !canIRequest;
                topAnimaNextPaginate.style.display = "inline-block";
                setTimeout(() => {
                    canIRequest = !canIRequest;
                }, 4000);
            }
        }
    }else if(page === scheduleAnimaPage){
        const scheduleAnimaElement = document.querySelector("schedule-anima-list");
        const scheduleAnimaSelect = document.querySelector("#schedule-anima-select");
        const scheduleAnimaSearchButton = document.querySelectorAll("#schedule-anima-search-button");

        scheduleAnimaSearchButton.forEach(button => {
            button.onclick = function(event){
                event.preventDefault();
                if(scheduleAnimaSelect.value){
                    if(canIRequest){
                        getScheduleAnima();
                    }else{
                        notification("Maaf, tunggu selama 4 detik", "warning");
                    }
                }else{
                    notification("Harap pilih hari", "warning");
                }
            }
        
        });

        const getScheduleAnima = async () => {
            try {
                preloaderTopAnime.style.display = "block";
                const scheduleDay = scheduleAnimaSelect.value;
                const { data } = await axios.get(`https://api.jikan.moe/v3/schedule/${scheduleDay}`);
                scheduleAnimaElement.scheduleAnima = data[scheduleDay];
            } catch (error) {
                notification("Terjadi kesalahan pada server!", "danger");
            }finally{
                preloaderTopAnime.style.display = "none";
                canIRequest = !canIRequest;
                setTimeout(() => {
                    canIRequest = !canIRequest;
                }, 4000);
            }
        }
    }

    document.querySelectorAll("floating-button").forEach(button => {
        button.onclick = event => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    })

    const notification = (message, type) => {
        M.toast({
            html: `${message}`,
            classes: `rounded ${type === "danger" ? "red" : "orange"} accent-2`,
            displayLength: 2000
        });
    }
}