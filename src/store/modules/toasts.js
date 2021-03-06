const ADD_TOAST = 'ADD_TOAST'
const DELETE_TOAST = 'DELETE_TOAST'

const state = {
  toasts: []
}

const getters = {
  toasts: state => state.toasts
}

const actions = {
  addToast ({ commit }, toast) {
    if (typeof toast === 'string') {
      toast = {
        name: 'Error',
        message: toast
      }
    }
    toast._id = Date.now()
    commit(ADD_TOAST, toast)
    setTimeout(() => {
      commit(DELETE_TOAST, toast)
    }, 3000)
  }
}

const mutations = {
  [ADD_TOAST] ({ toasts }, payload) {
    if (toasts.length) {
      setTimeout(() => {
        toasts.push(payload)
      }, 3000)
    }
  },

  [DELETE_TOAST] ({ toasts }, payload) {
    const index = toasts.findIndex(toast => toast === payload)
    if (index !== -1) {
      toasts.splice(index, 1)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
