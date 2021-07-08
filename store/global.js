export const state = () => ({
  snackbar: {
    status: false,
    text: '',
    color: '',
    timeout: 2000,
    top: false,
    bottom: false,
    left: false,
    right: false,
  },
})
export const getters = {
  GET_SNACKBAR(state) {
    return state.snackbar
  },
}
export const mutations = {
  SET_SNACKBAR(state, payload) {
    state.snackbar = payload
  },
}
