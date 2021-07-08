export const state = () => ({
  dialog: false,
})
export const getters = {
  GET_DIALOG(state) {
    return state.dialog
  },
}
export const mutations = {
  SET_DIALOG(state, payload) {
    state.dialog = payload
  },
}
