import Vue from 'vue'
import App from './App.vue'
import Register from '../src/components/Register.vue'
import Login from '../src/components/Login.vue'
import Logout from '../src/components/Logout.vue'
import Home from '../src/components/Home.vue'
import Facilities from '../src/components/Facilities.vue'
import EarlierInspections from '../src/components/EarlierInspections.vue'
import AboutUs from '../src/components/AboutUs.vue'
import Info from '../src/components/Info.vue'
import LogInfo from '../src/components/LogInfo.vue'
import Thanks from '../src/components/Thanks4Reg.vue'
import Inspection1 from '../src/components/Inspections/Inspection1.vue'
import Inspection2 from '../src/components/Inspections/Inspection2.vue'
import Inspection3 from '../src/components/Inspections/Inspection3.vue'
import Inspection4 from '../src/components/Inspections/Inspection4.vue'
import Inspection5 from '../src/components/Inspections/Inspection5.vue'
import Inspection6 from '../src/components/Inspections/Inspection6.vue'
import Inspection7 from '../src/components/Inspections/Inspection7.vue'
import Inspection8 from '../src/components/Inspections/Inspection8.vue'
import Inspection from '../src/components/Inspections/Inspection.vue'
import InspectionRes from '../src/components/Inspections/InspectionRes.vue'

//import vSelect from 'vue-select'
import DataTable from 'v-data-table'
import VueSidebarMenu from '../src/index'
import Vuetify from 'vuetify'
import jsPDF from 'jspdf'

import 'vuetify/dist/vuetify.min.css'

import {
  store
} from '../src/store/store'
// import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  iconfont: 'mdi'
})
Vue.use(VueSidebarMenu)
Vue.use(VueRouter)
Vue.use(DataTable)
// Vue.component('v-select', vSelect)

const router = new VueRouter({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Facilities',
      name: 'Facilities',
      component: Facilities,
    },
    {
      path: '/Info',
      name: 'Info',
      component: Info,
    },
    {
      path: '/LogInfo',
      name: 'LogInfo',
      component: LogInfo,
    },
    {
      path: '/Thanks',
      name: 'Thanks',
      component: Thanks,
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs,
    },
    {
      path: '/EarlierInspections',
      name: 'EarlierInspections',
      component: EarlierInspections,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Logout',
      name: 'Logout',
      component: Logout,
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/Inspection',
      name: 'Inspection',
      component: Inspection,
      children: [
        {
          path: 'Inspection1',
          name: 'Inspection1',
          component: Inspection1
        },
        {
          path: '/Inspection2',
          name: 'Inspection2',
          component: Inspection2
        },
        {
          path: '/Inspection3',
          name: 'Inspection3',
          component: Inspection3
        },
        {
          path: '/Inspection4',
          name: 'Inspection4',
          component: Inspection4
        },
        {
          path: '/Inspection5',
          name: 'Inspection5',
          component: Inspection5
        },
        {
          path: '/Inspection6',
          name: 'Inspection6',
          component: Inspection6
        },
        {
          path: '/Inspection7',
          name: 'Inspection7',
          component: Inspection7
        },
        {
          path: '/Inspection8',
          name: 'Inspection8',
          component: Inspection8
        },
        {
          path: '/InspectionRes',
          name: 'InspectionRes',
          component: InspectionRes
        }
      ]
    },
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
