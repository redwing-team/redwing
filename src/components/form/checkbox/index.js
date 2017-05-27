import Icon from '../../icon/index.vue'

const prefix = 'ui-checkbox'

export default {
    components: { Icon },
    model: {
        prop: 'model',
        event: 'input'
    },
    props: {
        disabled: Boolean,
        model: {},
        value: {},
        trueValue: {
            default: true
        },
        falseValue: {
            default: false
        }
    },
    computed: {
        checked() {
            const model = this.model
            if (Array.isArray(model)) {
                const v = this.value
                return model.some(item => item === v)
            }
            return model === this.trueValue
        },
        classList() {
            return [
                prefix,
                {
                    [`${prefix}--checked`]: this.checked,
                    [`${prefix}--disabled`]: this.disabled
                }
            ]
        }
    },
    methods: {
        change() {
            const model = this.model
            const checked = this.checked
            let newValue
            if (Array.isArray(model)) {
                const v = this.value
                if (checked) {
                    newValue = model.filter(item => item !== v)
                } else {
                    newValue = model.concat([v])
                }
            } else {
                newValue = checked ? this.falseValue : this.trueValue
            }
            this.$emit('input', newValue)
        }
    }
}
