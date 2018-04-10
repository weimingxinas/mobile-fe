import Vue from 'vue';
import Router from 'vue-router';
import orderSuccess from '@/components/ordersuccess';
import order from '@/components/order';
import sellerHeader from '@/components/common/sellerHeader/sellerHeader';

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
            path: '/sellerHeader',
            name: 'sellerHeader',
            component: sellerHeader
        }
    ]
});
