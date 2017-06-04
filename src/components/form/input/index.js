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
            this.currentValue = value
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
        if (value !== undefined) {
            this.currentValue = value
        }
    }
}
