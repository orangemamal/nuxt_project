
export const state = () => ({
  user: {}
})

export const mutations = {
  setUser(state, user) {
    state.user = user;
  }
}

export const actions = {
  async fetchUser(context) {
    const response = await this.$axios.get('https://jsonplaceholder.typicode.com/users/1');
    context.commit('setUser', response.data);
  }
}
