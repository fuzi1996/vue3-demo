import { setupDevtoolsPlugin } from '@vue/devtools-api'

export function setupDevtools (app) {
  setupDevtoolsPlugin({
    id: 'my-awesome-devtools-plugin',
    label: 'My Awesome Plugin',
    packageName: 'my-awesome-plugin',
    homepage: 'https://vuejs.org',
    app
  }, api => {
    api.on.visitComponentTree((payload) => {
      const node = payload.treeNode
      if (payload.componentInstance.$options.meow) {
        node.tags.push({
          label: 'meow',
          textColor: 0x000000,
          backgroundColor: 0xff984f
        })
      }
    })
  })
}