export default {
    data() {
        return {
            radio: {
                value: 1,
                items: [1, 2, 3, 4]
            },
            checkbox: {
                array: [],
                boolean: false,
                boolean2: 2,
                items: [1, 2, 3, 4]
            },
            switchData: {
                array: [],
                boolean: false,
                boolean2: 2,
                items: [1, 2, 3, 4]
            },
            textarea: null,
            input: {
                text: '',
                number: 123,
                month: '',
                week: '',
                date: '',
                'datetime-local': '',
                time: ''
            },
            select: {
                value: '',
                items: [
                    {
                        value: 1,
                        label: 'option 1'
                    },
                    {
                        value: '2',
                        label: 'option 2'
                    },
                    {
                        value: { a: 1 },
                        label: 'option 3'
                    }
                ]
            }
        }
    }
}
