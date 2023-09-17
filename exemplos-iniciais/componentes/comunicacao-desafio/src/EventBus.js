import Vue from 'vue'
export default new Vue({
    methods: {
        getClickedUser(user){
            this.$emit("clickedUser", user)
        },
        onUserChanged(callback) {
            this.$on("clickedUser", callback)
        }
    }
})