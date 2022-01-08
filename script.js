const app = Vue.createApp({
    data() {
        return{
            name: 'jane',
            surname: 'harrison',
            email: 'jane@gmail.com',
            gender: 'female',
            content: '',
            start: 'Submit task name by hitting Enter button',
            svg: ``,
            list: []
        }
    },
    methods: {
        getData(){
            this.list.push({
                name: this.content
            })
            this.content = ''
            this.start = ''
        },
        remove(item){
            this.list = this.list.filter(items => items !== item)

        },

    }
})
app.mount('#app')