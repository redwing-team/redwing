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
            document.execCommand('insertHTML', false, html)
            this.input()
        },
        input() {
            const v = this.$el.innerHTML
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
