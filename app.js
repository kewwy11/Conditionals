const app = Vue.createApp({
    data(){
        return{
            enteredValue: '',
            tasks: [],
            addedTask: true
        }
    },

    computed:{
        buttonContent(){
            return this.addedTask ? 'Hide List' : 'Show List'
        }
    },

    methods:{
        addTask(){
            this.tasks.push(this.enteredValue)
        },
        addedTaskList(){
            this.addedTask = !this.addedTask
        }
    }
})

app.mount('#assignment');