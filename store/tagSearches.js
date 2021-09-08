export const state = () => ({
    tags: []
  })
  
  export const mutations = {
    add(state, tag) {
      if (!state.tags.some(t => t == tag)) {
        state.tags.push(tag)
      } else {
        state.tags.splice(state.tags.indexOf(tag), 1)
      }
    },
  }


  export const actions = {
    contains(state, tag) {
      return state.tags.filter(t => t != tag);
    }
  }