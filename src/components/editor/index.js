export default {
    props: {
        value: String
    },
    data() {
        return {
            html: ''
        }
    },
    methods: {
        paste(e) {
            e.preventDefault()
            const html = e.clipboardData.getData('text/html')
            document.execCommand(
                'insertHTML',
                false,
                html.replace(/>\s+</g, '><')
            )
            this.input()
        },
        input() {
            const v = this.$el.innerHTML.replace(/[\n\r]/gi, '<br>')
            this.html = v
            this.$emit('input', v)
        }
    },
    watch: {
        value(v) {
            if (v !== this.html) {
                this.$el.innerHTML = v
                this.html = v
            }
        }
    },
    mounted() {
        const v = this.value
        if (v) {
            this.$el.innerHTML = v
            this.html = v
        }
    }
}
