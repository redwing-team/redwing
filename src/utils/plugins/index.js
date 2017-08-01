import uiComponents from '../../../dist/redwing'
import '../../../dist/redwing.css'
import pageComponents from '../../pages/components'
import Toast from '../plugins/toast'

console.log(uiComponents)
export default {
    install(Vue) {
        Vue.prototype.$toast = Toast

        Object.keys(uiComponents).forEach(item => {
            Vue.component(`u${item}`, uiComponents[item])
        })

        Object.keys(pageComponents).forEach(item => {
            Vue.component(`x${item}`, pageComponents[item])
        })
    }
}
