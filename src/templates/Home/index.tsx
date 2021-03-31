import dynamic from 'next/dynamic'
import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import Button from '@material-ui/core/Button'
import { MapProps } from 'components/Map'
import { NextSeo } from 'next-seo'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import { Container } from '@material-ui/core'

const Map = dynamic(() => import('components/Map'), {
  ssr: false
})

export default function HomeTemplate({ places }: MapProps) {
  return (
    <Container maxWidth="xl">
      <Typography variant="h3">Mapas de Localização ADEB</Typography>
      <Typography variant="subtitle1" color={'textSecondary'}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>

      <Map places={places} />

      <Link href="/about">
        <Button component="a" variant="contained" color="primary">
          Baiahkshagsjkh
        </Button>
      </Link>
    </Container>
  )
}
