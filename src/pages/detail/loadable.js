import React from 'react'
import Loadable from 'react-loadable'

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading: () => <p style={{textAlign: 'center', marginTop: '50px'}}>loading...</p>
});

export default () => <LoadableComponent/>