import Vue from 'vue'
import VueRouter from 'vue-router'

// modules
import Index from '../components/Index'
import Test1 from '../components/Test1';
import Product from '../components/Product';
import Divide from '../components/Divide';
import NotFound from '../components/NotFound';

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Test1
        },
        {
            path: '/product',
            component: Product
        },
        {
            path: '/test',
            component: Test1
        },
        {
            path: '/divide',
            component: Divide,
            children: [
                {
                    path: 'test', // /divide/test
                    components: {
                        default: Test1,
                        content: Product
                    }
                },
                {
                    path: 'product', // /divide/product
                    components: {
                        default: Product,
                        content: Test1
                    }
                },
            ]
        },
        {
            path: '/404',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})