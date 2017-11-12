import Trees from '../pages/Trees.vue'
import Colors from '../pages/Colors.vue'
import Buildings from '../pages/Buildings.vue'

export default [
	{ path: '', component: Colors },
	{ path: '/colors', component: Colors },
	{ path: '/buildings', component: Buildings },
	{ path: '/trees', component: Trees }
]
