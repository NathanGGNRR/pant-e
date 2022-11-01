export default ({ app }, inject) => {
  inject('addToBasket', (productId) => {
    app.store.dispatch("basket/addToBasket", {id: productId})
  })

  inject('removeToBasket', (productId, all = false) => {
    app.store.dispatch("basket/removeToBasket", {id: productId, all})
  })
}
