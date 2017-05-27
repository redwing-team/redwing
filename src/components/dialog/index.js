export default {
    props: {
        visible: Boolean,
        scroll: Boolean,
        mask: {
            type: Boolean,
            default: true
        },
        maskTransition: {
            type: String,
            default: 'ui-transition-mask'
        },
        boxTransition: {
            type: String,
            default: 'ui-transition-dialog'
        }
    },
    methods: {
        onTouchMove(ev) {
            if (!this.scroll) {
                ev.preventDefault()
            }
        },
        touchMask() {
            this.$emit('touch-mask')
        }
    }
}
