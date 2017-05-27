export default {
    data() {
        return {
            visible1: false,
            visible2: false,
            visible3: false,
            visible4: false,
            visible5: false,
            visible6: false,
            visibleDl: false
        }
    },
    methods: {
        close(bl, type) {
            if (type === 'cancel') {
                alert('按下了取消按钮！')
            } else {
                alert('按下了确定按钮，但就是关不了！')
                this.visible3 = true
            }
        },
        close2() {
            this.visible4 = true
            setTimeout(() => {
                if (confirm('关闭吗')) {
                    this.visible4 = false
                }
            }, 3000)
        },
        close3() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve()
                }, 3000)
            })
        }
    }
}
