import cIcon from '../icon/index.vue'
import cDialog from '../dialog/index.vue'

export default {
    components: {
        cIcon,
        cDialog
    },
    model: {
        prop: 'visible',
        event: 'close'
    },
    props: {
        maskTransition: {
            type: String
        },
        boxTransition: {
            type: String
        },
        touchMaskClose: Boolean,
        visible: Boolean,
        type: {
            type: String,
            default: 'alert'
        },
        title: [String, Number],
        content: [String, Number],
        confirmText: {
            type: String,
            default: '确定'
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        async: Function // 必须是返回 Promise 对象
    },
    data() {
        return {
            loading: false
        }
    },
    methods: {
        touchMask() {
            if (this.touchMaskClose) {
                this.cancel()
            }
        },
        confirm() {
            this.$emit('confirm')
            if (typeof this.async === 'function') {
                if (this.loading) return
                this.loading = true
                this.async().then(
                    () => {
                        this.loading = false
                        this.$emit('close', false, 'confirm')
                    },
                    () => {
                        this.loading = false
                    }
                )
            } else {
                this.$emit('close', false, 'confirm')
            }
        },
        cancel() {
            this.$emit('close', false, 'cancel')
        }
    }
}
