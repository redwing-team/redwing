import '../icon/index.vue'

export default {
    props: {
        access: Boolean,
        align: {
            type: String
        }
    },
    computed: {
        classList() {
            return [
                'ui-cell',
                {
                    [`ui-cell--${this.align}`]: this.align,
                    'ui-cell--access': this.access
                }
            ]
        }
    }
}
