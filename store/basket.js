export const state = () => ({
  basket: []
})

export const actions = {
  addToBasket({ commit }, product) {
    // const response = await this.$axios.$get(
    //   `http://localhost:5000/api/vsproducts?pageNumber=${currentPage}&pageSize=${numberOfResults}`
    // )
    const data = {
      id: product.id,
      title: "Culotte brésilienne",
      description: "Description",
      size: "XS",
      quantity: 1,
      image: require('~/assets/img/home/6.jpg'),
      price: Math.floor(Math.random() * (100 - 1) + 1)
    }
    commit('addToBasket', data)
  },
  removeToBasket({ commit }, product) {
    // const response = await this.$axios.$get(
    //   `http://localhost:5000/api/vsproducts?pageNumber=${currentPage}&pageSize=${numberOfResults}`
    // )
    const data = {
      id: product.id,
      quantity: -1
    }
    commit('removeToBasket', { product: data, all: product.all},)
  }
}

export const mutations = {
  addToBasket(state, command) {
    const product = state.basket.find(product => product.id === command.id)
    if (!product) state.basket.push(command)
    else product.quantity += command.quantity
  },
  removeToBasket(state, command) {
    const product = state.basket.find(product => product.id === command.product.id)
    if (product) {
      product.quantity += command.product.quantity
      if (!product.quantity || command.all) state.basket.splice(state.basket.indexOf(product), 1)
    }
  }
}

export const getters = {
  getTotal(state) {
    let total = 0
    state.basket.forEach(product => {
      total += product.quantity * product.price
    })
    return total
  }
}
