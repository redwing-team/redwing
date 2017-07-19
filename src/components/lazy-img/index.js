export default {
    props: {
        parents: {
            type: Array
        },
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
        preLoad: {
            type: Number,
            default: 1,
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
            const rect = el.getBoundingClientRect()
            const preLoad = this.preLoad
            return (
                rect.top < window.innerHeight * preLoad &&
                rect.bottom > 0 &&
                (rect.left < window.innerWidth * preLoad && rect.right > 0)
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
            const parent = this.$el.parentNode
            if (parent) {
                parent.addEventListener('scroll', this.scroll, false)
            }
            let parents = this.parents
            if (parents && parents.length) {
                parents = [...parents]
                parents.forEach(item => {
                    item.addEventListener('scroll', this.scroll, false)
                })
            }
        },
        unbindScroll() {
            clearTimeout(this.timer)
            window.removeEventListener('scroll', this.scroll)
            const parent = this.$el.parentNode
            if (parent) {
                parent.removeEventListener('scroll', this.scroll)
            }
            const parent2 = this.parent
            if (parent2) {
                parent2.removeEventListener('scroll', this.scroll)
            }
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
