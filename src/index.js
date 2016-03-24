const cmify = require('cmify')
const styles = cmify.load('./styles.css')

const component = `<div class="${styles.root}">
  <h2 class="${styles.heading}">CSS Modules</h2>
  <div class="${styles.content}">is fun</div>
</div>`

if (process.browser) {
  const root = document.getElementById('root')
  root.innerHTML = component
  require('insert-css')(cmify.getAllCss())
} else {
  console.log('----\nTOKENS\n----\n', styles, '\n')
  console.log('----\nHTML\n----\n', component, '\n')
  console.log('----\nCSS\n----\n', cmify.getAllCss(), '\n')
}
