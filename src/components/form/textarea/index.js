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
            this.currentValue = value
        },
        currentValue(v) {
            this.$emit('input', v)
        }
    },
    created() {
        const value = this.value
        if (value !== undefined) {
            this.currentValue = value
        }
    }
}
