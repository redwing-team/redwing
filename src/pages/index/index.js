import routes from '../routes'

export default {
    data() {
        return {
            items: routes
                .map(item => {
                    const path = item.path
                    const name = item.path.substr(1)
                    if (name) {
                        return {
                            name,
                            path
                        }
                    }
                    return null
                })
                .filter(item => item)
        }
    },
    methods: {
        to(item) {
            this.$router.push({
                path: item.path
            })
        }
    }
}
