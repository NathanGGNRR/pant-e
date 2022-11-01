export default function ({ store }) {
  if (!store.state.colors.length) {
    store.commit("addColors")
  }
}
