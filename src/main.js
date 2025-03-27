import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import { renderHeaderFooter } from './js/utils'

const app = mount(App, {
  target: document.getElementById('app'),
})

renderHeaderFooter();

export default app
