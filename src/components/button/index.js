import Icon from '../icon/index.vue'

const prefix = 'ui-btn'
const iconLoadingName = 'loading'

export default {
    components: {
        Icon
    },
    props: {
        icon: String,
        loading: Boolean,
        inline: Boolean,
        theme: {
            validator(value) {
                return ['primary', 'danger', 'ghost'].indexOf(value) >= 0
            }
        },
        size: {
            validator(value) {
                return ['small'].indexOf(value) >= 0
            }
        }
    },
    computed: {
        classList() {
            return [
                prefix,
                {
                    [`${prefix}--${this.theme}`]: this.theme,
                    [`${prefix}--${this.size}`]: this.size,
                    [`${prefix}--${iconLoadingName}`]: this.loading,
                    [`${prefix}--inline`]: this.inline || this.size === 'small'
                }
            ]
        },
        iconType() {
            if (this.loading) {
                return iconLoadingName
            }
            return this.icon
        }
    }
}
