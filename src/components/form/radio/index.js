import Icon from '../../icon/index.vue'

const prefix = 'ui-radio'

export default {
    components: { Icon },
    model: {
        prop: 'model',
        event: 'input'
    },
    props: {
        disabled: Boolean,
        model: {},
        value: {}
    },
    computed: {
        checked() {
            return this.model === this.value
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
            if (!this.checked) {
                this.$emit('input', this.value)
            }
        }
    }
}
