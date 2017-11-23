import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// 导入组件对象
import layout from './components/layout.vue';
import login from './components/account/login.vue';
// 商品相关组件
import goodslists from './components/goods/goodslists.vue';
var router = new VueRouter({
    routes: [
        { name: 'default', path: '/', redirect: '/admin' },
        { name: 'login', path: '/login', component: login },
        {
            name: 'layout', path: '/admin', component: layout,
            children: [
                { name: 'goodslists', path: 'goodslists', component: goodslists }
            ]
        }
    ]
})
// 导入element-ui
import elementUi from 'element-ui';
// 导入默认样式
import 'element-ui/lib/theme-default/index.css';
// 覆盖默认样式
import '../statics/theme_rms/index.css';
// 全局样式
import '../statics/css/site.css';
// 绑定到vue
Vue.use(elementUi);
// 导入axios包
import axios from 'axios';
// 设置默认请求域名
axios.defaults.baseURL = "http://127.0.0.1:8899";
// 绑定axios到vue的原型上
Vue.prototype.$ajax = axios;
new Vue({
    el: '#app',
    router,
    render: create => create(App)
})