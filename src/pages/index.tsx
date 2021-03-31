import HomeTemplate from 'templates/Home'
import { MapProps } from 'components/Map'
import { GetStaticProps } from 'next'
import client from '../graphql/client'
import { GetPlacesQuery } from '../graphql/generated/graphql'
import { GET_PLACES } from '../graphql/queries'
import { NextSeo } from 'next-seo'

export default function Home({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Mapa de Localização da ADEB Brasília"
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

      <HomeTemplate places={places} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  // if (!places) return { notFound: true }

  return {
    revalidate: 5,
    props: { places }
  }
}
