import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'
import Typography from '@material-ui/core/Typography'
import { Container, Grid } from '@material-ui/core'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <Container maxWidth="xl">
    <Grid direction={'row'} justify="center" alignItems="center">
      <Typography variant={'h1'} align={'center'} color={'primary'}>
        {heading}
      </Typography>
      s
      <Typography align={'center'} color={'textSecondary'}>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </Typography>
    </Grid>
  </Container>
)

export default PageTemplate
