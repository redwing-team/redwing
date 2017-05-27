const prefix = 'ui-icon'

export default {
    props: {
        type: {
            type: String,
            require: true
        },
        spin: Boolean
    },
    computed: {
        classList() {
            return [
                prefix,
                `${prefix}--${this.type}`,
                {
                    [`${prefix}--spin`]: this.spin
                }
            ]
        }
    }
}
