export default {
    userId(state) {
        return state.userId;
    },
    token(state) {
        return state.token
    },
    isAuthendicated(state) {
        return !!state.token
    },

}