import { ref } from 'vue'
export default {
    data() {
        return {
            "message" : "So stupid."
        }
    },
    setup() {
        const count = ref(0);
        return {count}
    },
    template: `<div>Count is: {{ count }}</div>`
}