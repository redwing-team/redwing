import Vue from 'vue'
import Toast from '../../../dist/redwing'

const Constructor = Vue.extend(Toast)

function close(vm) {
    const el = vm.$el
    vm.$destroy(true)
    el.parentNode.removeChild(el)
}

function fn(message, duration, type) {
    let vm = new Constructor({
        created() {
            this.$on('close', () => {
                if (vm) {
                    close(vm)
                    vm = null
                }
            })
            this.message = message
            this.duration = duration || this.duration
            this.type = type || this.type
        }
    }).$mount()

    document.body.appendChild(vm.$el)
    vm.visible = true

    return () => {
        if (vm) {
            close(vm)
            vm = null
        }
    }
}

export default {
    info: (msg, duration) => fn(msg, duration),
    success: (msg, duration) => fn(msg, duration, 'success'),
    warn: (msg, duration) => fn(msg, duration, 'warn'),
    error: (msg, duration) => fn(msg, duration, 'error')
}
