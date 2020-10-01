import React from 'react'
import styles from './styles.module.css'

import Button from './components/Button'
import Container from './/components/Container'

// export Foo and Bar as named exports
export { Button, Container }

// alternative, more concise syntax for named exports
// export { default as Container } from './Container'
// export { default as Button } from './Button'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
