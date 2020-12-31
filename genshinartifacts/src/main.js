import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery'

import router from './router'

const app = createApp(App);
app.config.devtools = true;
app.use(router);
app.mount('#app');

