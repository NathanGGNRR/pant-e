export const state = () => ({
    product: {
        id: null,
        productName: '',
        imageUrl:'',
        category:'',
        description:'',
        brand:'',
        sizes:[],
        price:'',
        note:0,
        reviewNumber:0
    },
  })

export const actions = {
    async getDetails({ commit },id) {
      const response = await this.$axios.$get(
        `http://localhost:5000/api/vsproducts/${id}`
      )
      commit('setProduct', response)
    },
  }

  export const mutations = {
    setProduct(state, product) {
      state.product = product
    }
  }
  