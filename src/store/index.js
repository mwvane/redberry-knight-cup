import {createStore} from 'vuex'

export default createStore({
    state: {
        errorMessages: []
    },
    getters: {
        getErrorMessages: state => state.errorMessages
    },
    mutations: {
        addErrorMessage(state, error) {
            state.errorMessages.push(error)
        },
        removeErrorMessage(state, errorId) {
            state.errorMessages = state.errorMessages.filter(item => item.id !== errorId)
        },
    },
    actions: {
        addErrorMessage({commit}, error) {
            commit('addErrorMessage', error)
        },
        removeErrorMessage({commit}, errorId) {
            commit('removeErrorMessage', errorId)
        },
    },
})
