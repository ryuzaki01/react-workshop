const fs = require('fs')
const path = require('path')
const React = require('react')
const ReactDOMServer = require('react-dom/server')

const RootDir = path.resolve(__dirname, '..')

const markup = ReactDOMServer.renderToStaticMarkup(
  React.DOM.html({},
    React.DOM.head({}),
    React.DOM.body({},
      React.DOM.div({ id: 'root' }),
      React.DOM.script({ src: '/build/vendor.js' }),
      React.DOM.script({ src: '/build/main.js' })
    )
  )
)

fs.writeFileSync(path.join(RootDir, 'build', 'index.html'), markup)
