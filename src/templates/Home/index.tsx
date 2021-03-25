import dynamic from 'next/dynamic'
import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { MapProps } from 'components/Map'
import { NextSeo } from 'next-seo'

const Map = dynamic(() => import('components/Map'), {
  ssr: false
})

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Adebsystem - Mapa de Localização das Igrejas da ADEB Brasília"
        description="Um simples aplicativo para listar de forma dinâmica as igrejas da ADEB Brasília"
        canonical="https://maps.adebriachofundo.com.br"
        openGraph={{
          url: 'https://maps.adebriachofundo.com.br',
          title: 'Adebsystem - Mapa de localização das igrejas',
          description:
            'Um simples aplicativo para geração de pontos de localização das igrejas da ADEB Brasília, listando os seus detalhes pernitentes.',
          images: [
            {
              url: 'https://maps.adebriachofundo.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Adebsystem - Mapas de localização das igrejas'
            }
          ],
          site_name: 'Adebsystem - Mapas'
        }}
      />

      <LinkWrapper href="/about">
        <InfoOutline size={54} aria-label="About" />
      </LinkWrapper>

      <Map places={places} />
    </>
  )
}
