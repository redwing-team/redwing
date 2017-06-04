export default {
    props: {
        items: {
            type: Array,
            default: []
        },
        value: {
            default: ''
        },
        placeholder: {
            type: String,
            default: '请选择'
        }
    },
    data() {
        return {
            currentValue: ''
        }
    },
    watch: {
        value(value) {
            this.currentValue = value
        },
        currentValue(v) {
            this.$emit('input', v)
            this.$emit('change', v)
        }
    },
    methods: {
        focus() {
            this.$emit('focus', this.currentValue)
        },
        blur() {
            this.$emit('blur', this.currentValue)
        }
    },
    created() {
        const value = this.value
        if (value !== undefined) {
            this.currentValue = value
        }
    }
}
