export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		initialize ({ commit }) {
			console.info('ModuleA initializing...')
			console.info('ModuleA initialized.')
		}
	}
}
