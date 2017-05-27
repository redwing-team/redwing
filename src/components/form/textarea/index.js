export default {
    props: {
        value: String,
        placeholder: {
            type: String,
            default: '请填写'
        }
    },
    data() {
        return {
            currentValue: ''
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
    created() {
        const value = this.value
        if (value) {
            this.currentValue = value
        }
    }
}
