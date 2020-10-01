import React from 'react'

import { ExampleComponent, Button, Container } from 'y8z-amzing-components'
import 'y8z-amzing-components/dist/index.css'

const App = () => {
  return (
    <Container>
      <ExampleComponent text='Create React Library Example 😄' />
      <Button>hello</Button>
      <Button text='yo' />
    </Container>
  )
}

export default App
