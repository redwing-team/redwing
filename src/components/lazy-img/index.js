export default {
    props: {
        src: {
            type: String,
            require: true
        },
        defaultSrc: {
            type: String,
            default:
                'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=='
        },
        width: {
            type: Number,
            default: 100,
            validator(v) {
                return v > 0
            }
        },
        height: {
            type: Number,
            default: 100,
            validator(v) {
                return v > 0
            }
        },
        offset: {
            type: Number,
            default: 30,
            validator(v) {
                return v > 0
            }
        },
        delay: {
            type: Number,
            default: 100,
            validator(v) {
                return v >= 100
            }
        }
    },
    data() {
        return {
            visible: false
        }
    },
    methods: {
        show() {
            const el = this.$el
            const coords = el.getBoundingClientRect()
            return (
                (coords.top >= 0 && coords.left >= 0 && coords.top) <=
                (window.innerHeight || document.documentElement.clientHeight) +
                    this.offset
            )
        },
        scroll() {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                const visible = this.show()
                if (visible) {
                    this.visible = true
                    this.unbindScroll()
                }
            }, this.delay)
        },
        bindScroll() {
            window.addEventListener('scroll', this.scroll, false)
        },
        unbindScroll() {
            window.removeEventListener('scroll', this.scroll)
            clearTimeout(this.timer)
        },
        error(e) {
            this.$emit('error', e)
        }
    },
    mounted() {
        setTimeout(() => {
            const visible = this.show()
            if (visible) {
                this.visible = true
            } else {
                this.bindScroll()
            }
        }, 100)
    },
    destroy() {
        this.unbindScroll()
    }
}
