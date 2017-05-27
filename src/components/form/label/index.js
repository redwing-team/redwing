const prefix = 'ui-label'

export default {
    props: {
        auto: Boolean
    },
    computed: {
        classList() {
            return [
                prefix,
                {
                    [`${prefix}--auto`]: this.auto
                }
            ]
        }
    }
}
