import Home from './index/index.vue'
import Button from './button/index.vue'
import Icon from './icon/index.vue'
import Form from './form/index.vue'
import Dialog from './dialog/index.vue'
import Toast from './toast/index.vue'
import Modal from './modal/index.vue'
import Editor from './editor/index.vue'
import LazyImg from './lazy-img/index.vue'

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/button',
        component: Button
    },
    {
        path: '/icon',
        component: Icon
    },
    {
        path: '/form',
        component: Form
    },
    {
        path: '/dialog',
        component: Dialog
    },
    {
        path: '/toast',
        component: Toast
    },
    {
        path: '/modal',
        component: Modal
    },
    {
        path: '/editor',
        component: Editor
    },
    {
        path: '/lazy-img',
        component: LazyImg
    }
]
