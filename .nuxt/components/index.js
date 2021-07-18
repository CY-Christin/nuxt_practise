import { wrapFunctional } from './utils'

export { default as Loading } from '../../components/loading.vue'

export const LazyLoading = import('../../components/loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c))
