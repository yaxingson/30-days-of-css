import { mount } from 'svelte'
import BasicSyntax from './BasicSyntax.svelte'

const app = mount(BasicSyntax, {
  target:document.getElementById('app')!
})

export default app
