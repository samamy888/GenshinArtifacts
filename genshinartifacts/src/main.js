import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery'

const app = createApp(App);
app.config.devtools = true;
app.mount('#app');

