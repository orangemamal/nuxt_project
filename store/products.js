export const state = () => ({
  items: []
})

export const mutations = {
  addItems(state, item) {
    state.items.push(item);
  }
}
