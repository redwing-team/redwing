// v-model does not support dynamic input types. Use v-if branches instead

export default {
    props: {
        type: {
            type: String,
            default: 'text',
            validator(value) {
                return (
                    [
                        'text',
                        'password',
                        'number',
                        'month',
                        'date',
                        'datetime-local',
                        'time',
                        'week'
                    ].indexOf(value) >= 0
                )
            }
        },
        value: [String, Number],
        placeholder: {
            type: String,
            default: '请输入'
        }
    },
    data() {
        return {
            currentValue: undefined
        }
    },
    watch: {
        value(value) {
            const type = typeof value
            this.currentValue = type !== 'undefined' && type !== null
                ? value
                : ''
        },
        currentValue(v) {
            this.$emit('input', v)
        }
    },
    methods: {
        input(ev) {
            this.currentValue = ev.target.value
        }
    },
    created() {
        const value = this.value
        const type = typeof value
        if (type !== 'undefined' && type !== null) {
            this.currentValue = value
        }
    }
}
