function pasteHtmlAtCaret(html) {
    let range
    const sel = window.getSelection()

    if (sel.getRangeAt && sel.rangeCount) {
        range = sel.getRangeAt(0)
        range.deleteContents()

        // Range.createContextualFragment() would be useful here but is
        // non-standard and not supported in all browsers (IE9, for one)
        const el = document.createElement('div')
        el.innerHTML = html
        const frag = document.createDocumentFragment()
        let node = el.firstChild
        let lastNode

        while (node) {
            lastNode = frag.appendChild(node)
            node = el.firstChild
        }
        range.insertNode(frag)

        // Preserve the selection
        if (lastNode) {
            range = range.cloneRange()
            range.setStartAfter(lastNode)
            range.collapse(true)
            sel.removeAllRanges()
            sel.addRange(range)
        }
    }
}

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

            const c = e.clipboardData
            const types = c.types
            let type = 'text/plain'

            if (types.some(item => item === 'text/html')) {
                type = 'text/html'
            }

            const html = e.clipboardData.getData(type)
            pasteHtmlAtCaret(html)
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
