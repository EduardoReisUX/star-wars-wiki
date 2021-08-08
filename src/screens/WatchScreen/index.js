import React, { useMemo, useState, useCallback } from 'react'
import { Container, GoBack } from '~/components'
import { useDataStore } from '~/services/stores'
import { theme } from '~/styles'

import YoutubePlayer from 'react-native-youtube-iframe'

export const WatchScreen = () => {
  const [playing, setPlaying] = useState(false)
  const { selectedData } = useDataStore()

  const youtubeId = useMemo(() => {
    const id = selectedData.trailer_url.split('v=')[1].substring(0, 11)
    return id
  }, [selectedData])

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false)
    }
  }, [])

  return (
    <Container align="flex-start" justify="center">
      <YoutubePlayer
        height={theme.metrics.px(300)}
        width={theme.metrics.width}
        play={playing}
        videoId={youtubeId}
        onChangeState={onStateChange}
      />
      <GoBack />
    </Container>
  )
}
