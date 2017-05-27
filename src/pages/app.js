import Router from 'vue-router'
import routes from './routes'

const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0)
    next()
})

export default {
    router
}
