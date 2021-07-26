import React, { useState } from 'react'
import { Container, GoBack } from '~/components'
import { useDataStore } from '~/services/stores'

export const WatchScreen = () => {
  const [playing, setPlaying] = useState(false)
  const { selectedData } = useDataStore()

  return (
    <Container align="flex-start" justify="center">
      <GoBack />
    </Container>
  )
}
