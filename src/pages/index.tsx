import dynamic from 'next/dynamic'
import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

const Map = dynamic(() => import('components/Map'), {
  ssr: false
})

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={54} aria-label="About" />
      </LinkWrapper>
      <Map
        places={[
          {
            id: '2',
            name: 'Reykjavik',
            slug: 'reykjavik',
            location: {
              latitude: -15.7801,
              longitude: -47.9292
            }
          }
        ]}
      />
    </>
  )
}
