import React from 'react'

import bemify from '../../utils/bemify'

import styles from '@sodalife/soui-css/src/helpers/clearfix/style.pcss'

const bem = bemify(styles, 'soui').b('clearfix')

const Clearfix = () => {
  return (<div className={bem()}></div>)
}

export default Clearfix
