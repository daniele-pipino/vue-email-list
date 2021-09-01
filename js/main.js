// vue config tools

Vue.config.devtools = true;

// inizializazzione vue js
const app = new Vue({
    el: '#app',
    data: {
        email: [],
    },
    methods: {},
    created() {
        for (let i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    const result = res.data.response;
                    this.email.push(result);
                    console.log(this.email);
                });
        }
    }
});