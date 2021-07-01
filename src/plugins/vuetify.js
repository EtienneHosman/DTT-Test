
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify)

const opts = {
    theme:{
        themes: {
            light: {
                primary: "#2196f3",
                secondary: "#03a9f4",
                accent: "#3f51b5",
                error: "#f44336",
                warning: "#ff5722",
                info: "#009688",
                success: "#8bc34a"
            }
        }
    }
}

export default new Vuetify(opts)