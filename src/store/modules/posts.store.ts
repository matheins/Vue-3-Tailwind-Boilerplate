import { Post } from '@/entities'
import { posts } from '@/services'
import { GetterTree, MutationTree, ActionTree } from 'vuex'

class State {
  loading = false
  error = ''
  posts: Post[] = []

  reset(): void {
    this.loading = false
    this.error = ''
    this.posts = []
  }
}

const getters = <GetterTree<State, any>>{
  getLoading(state): boolean {
    return state.loading
  },
  getError(state): string {
    return state.error
  },
  getPosts(state): Post[] {
    return state.posts
  },
}

const actions = <ActionTree<State, any>>{
  reset({ commit }) {
    commit('RESET')
  },
  async fetch({ commit }): Promise<void> {
    commit('SET_LOADING', true)
    try {
      const data: Post[] = await posts.fetch()
      commit('SET_POSTS', data)
    } catch (error) {
      commit('SET_ERROR', error.message)
    }
    commit('SET_LOADING', false)
  },
}

const mutations = <MutationTree<State>>{
  RESET(state) {
    state.reset()
  },
  SET_LOADING(state, data): void {
    state.loading = data
  },
  SET_POSTS(state, data): void {
    state.posts = data
  },
  SET_ERROR(state, data): void {
    state.error = data
  },
}

export default {
  namespaced: true,
  state: new State(),
  getters,
  actions,
  mutations,
}
