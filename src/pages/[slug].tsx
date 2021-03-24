import client from 'graphql/client'
import { GET_PAGE_BY_SLUG, GET_PAGES } from 'graphql/queries'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  //retorna um loading, enquanto cria a rota...
  if (router.isFallback) return null

  return <PageTemplate heading={heading} body={body} />
}

export const getStaticPaths = async () => {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}

// getStaticPaths => serve para gerar as urls em build time /about, /trip/petropolis
// getStaticProps => serve para buscar dados da página (props) - build time - estático
// getServerSideProps => serve para buscar dados da página (props) - runtime - toda requisição (bundle fica no server)
// getInitialProps => serve para buscar dados da página (props) - runtime - toda requisição (bundle também vem para o client) - hydrate
