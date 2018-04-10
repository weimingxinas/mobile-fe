import Vue from 'vue';
import Router from 'vue-router';
import orderSuccess from '@/components/ordersuccess';
import order from '@/components/order';
import seller_header from '@/components/common/seller-header/seller_header';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/orderSuccess',
            name: 'orderSuccess',
            component: orderSuccess
        },
        {
            path: '/order/:resid/tableid',
            name: 'order',
            component: order
        },
        {
            path: '/seller_header',
            name: 'seller_header',
            component: seller_header
        }
    ]
});
