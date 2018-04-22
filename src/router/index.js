import Vue from 'vue';
import Router from 'vue-router';
import orderSuccess from '@/views/orderSuccess';
import order from '@/views/order';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/orderSuccess/:o_id',
            name: 'orderSuccess',
            component: orderSuccess
        },
        {
            path: '/order/:resid/:tableid',
            name: 'order',
            component: order
        }
    ]
});
