import React from 'react'
import Header from '../../components/Header'

export const CoreLayout = ({ children }) => (
  <div className='container text-center' style={{height: '100%'}}>
    <Header />
    <div>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
