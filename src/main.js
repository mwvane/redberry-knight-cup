import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {library} from "@fortawesome/fontawesome-svg-core";
import {
    faCircleRight,
    faCheckDouble,
    faChessQueen,
    faCircleExclamation,
    faXmark,
}
    from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
library.add(
    faCircleRight,
    faCheckDouble,
    faChessQueen,
    faCircleExclamation,
    faXmark,
)
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

const app = createApp(App)
    .use(store)
    .use(router)
    .use(BootstrapVue3)
    .component("font-awesome-icon",FontAwesomeIcon)

app.mount('#app')
