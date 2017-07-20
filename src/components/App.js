import React, { Component } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  render() {
    return (<div>
      <header>React Workshop</header>
      <section className="content">
        {this.props.children}
      </section>
      <footer>Tokopedia @ 2017</footer>
    </div>)
  }
}

export default App