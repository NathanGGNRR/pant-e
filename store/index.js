export const state = () => ({
  colors: []
})

export const mutations = {
  addColors(state) {
    state.colors = [
      { hex: "#00F475", name:"vert-cyan"},
      { hex: "#FF0B8A", name: "magenta-rose"}
    ]
  },
}


export const getters = {
  isAuthenticated(state) {
    return Boolean(state.auth.user)
  }
}
