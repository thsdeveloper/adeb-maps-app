import LinkWrapper from '../../components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import Image from 'next/image'
import * as S from './style'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), {
  ssr: false
})

export type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    ativo: boolean
    date_foundation: string
    location: {
      latitude: string
      longitude: string
    }
    description: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - AdebSystem Maps`}
        description={
          place.description?.text ||
          'Um projeto simples de mostrar em um mapa as igrejas da ADEB Brasília.'
        }
        canonical="https://maps.adebriachofundo.com.br"
        openGraph={{
          url: 'https://maps.adebriachofundo.com.br',
          title: `${place.name} - Adebsystem Maps`,
          description:
            place.description?.text ||
            'Um projeto simples de mostrar em um mapa as igrejas da ADEB Brasília.',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />
      <LinkWrapper href="/" color="white">
        <CloseOutline size={54} aria-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          {place.location.longitude}
          <div>Data de Fundação: {place.date_foundation}</div>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
