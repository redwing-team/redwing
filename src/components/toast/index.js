import Icon from '../icon/index.vue'

export default {
    components: {
        Icon
    },
    model: {
        prop: 'visible',
        event: 'close'
    },
    props: {
        visible: Boolean,
        message: [String, Number],
        type: String,
        duration: {
            type: Number,
            default: 2
        },
        maskTransition: {
            type: String,
            default: 'ui-transition-dialog'
        }
    },
    computed: {
        icon() {
            const type = this.type
            if (type === 'success') {
                return 'check-circle-o'
            }
            if (type === 'warn') {
                return 'exclamation-circle-o'
            }
            if (type === 'error') {
                return 'close-circle-o'
            }
            if (type === 'loading') {
                return 'loading'
            }
            return ''
        }
    },
    methods: {
        close() {
            if (this.visible) {
                this.$emit('close', false)
            }
        },
        startTimer() {
            if (this.duration > 0 && this.type !== 'loading') {
                this.timer = setTimeout(() => {
                    this.close()
                }, this.duration * 1000)
            }
        }
    },
    watch: {
        visible(v) {
            if (v) {
                this.startTimer()
            }
        }
    },
    mounted() {
        this.startTimer()
    }
}
