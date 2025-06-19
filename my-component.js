import { ref } from 'vue'
export default {
    setup() {
        const count = ref(0);
        return { count }
    },
    template: `<div>This is from Vue.js
    <p><RouterLink to = "/home">This is a link to home. </RouterLink></p></div>`
}