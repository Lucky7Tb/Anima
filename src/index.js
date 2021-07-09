import "regenerator-runtime";
import "./assets/icon/icon.css";
import "./assets/sass/anima.sass";
import main from "./assets/js/app.js";
import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { topAnimaPage } from "./pages";

window.addEventListener("DOMContentLoaded", () => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
            }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
            });
        });
    }
    
    main(topAnimaPage);
});
