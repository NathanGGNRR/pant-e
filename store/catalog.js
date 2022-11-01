export const state = () => ({
  products: [],
  currentPage: 1,
  numberOfResults: 10,
  showDetails: true,
  totalPages: 1,
  totalCount: 10,
  currentCategory: null,
  hasPreviousPage: false,
  hasNextPage: false,
  searchResults: [],
  aggregations: [],
  search: ''
})

export const actions = {
  async getCatalog({ commit, state }) {
    const currentPage = state.currentPage ? state.currentPage : 1

    const numberOfResults = state.numberOfResults ? state.numberOfResults : 10

    const response = await this.$axios.$get(
      `http://localhost:5000/api/vsproducts?pageNumber=${currentPage}&pageSize=${numberOfResults}`
    )

    commit('setProducts', response.items)
    commit('setCurrentPage', response.pageIndex)
    commit('setTotalPages', response.totalPages)
    commit('setTotalCount', response.totalCount)
    commit('setHasPreviousPage', response.hasPreviousPage)
    commit('setHasNextPage', response.hasNextPage)
    return response.items
  },
  updateCurrentPage({ commit }, pageNumber) {
    commit('setCurrentPage', pageNumber)
  },
  updateNumberOfResults({ commit }, numberOfResults) {
    commit('setNumberOfResults', numberOfResults)
  },
  async search({ commit }, searchText) {
    const response = await this.$axios.$get(
      `http://localhost:5000/api/search?query=${searchText}&size=${6}`
    )

    commit('setSearch', searchText)
    commit('setSearchResults', response)
  },
  async searchByCategory({ commit, state }, category) {
    const response = await this.$axios.$get(
      `http://localhost:5000/api/search/category?query=${category}&search=${state.search}`
    )

    commit('setSearchResultsProducts', response)
  }
}

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
  setCurrentPage(state, currentPage) {
    state.currentPage = currentPage
  },
  setTotalPages(state, totalPages) {
    state.totalPages = totalPages
  },
  setTotalCount(state, totalCount) {
    state.totalCount = totalCount
  },
  setHasPreviousPage(state, hasPreviousPage) {
    state.hasPreviousPage = hasPreviousPage
  },
  setHasNextPage(state, hasNextPage) {
    state.hasNextPage = hasNextPage
  },
  setCurrentCategory(state, currentCategory) {
    state.currentCategory = currentCategory
  },
  setNumberOfResults(state, numberOfResults) {
    state.numberOfResults = numberOfResults
  },
  setSearchResults(state, searchResults) {
    state.searchResults = searchResults
  },
  setSearchResultsProducts(state, products) {
    state.searchResults.products = products
  },
  setSearch(state, search) {
    state.search = search
  }
}
