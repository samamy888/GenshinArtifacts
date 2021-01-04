import { createApp } from 'vue'
import App from './App.vue'

//bootstrap
import 'bootstrap/dist/css/bootstrap.css'

//jquery
import 'jquery'

//router
import router from './router/index.js'

//sidemenu
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)


const app = createApp(App);
app.use(router);
app.use(VueSidebarMenu);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');

