import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={54} />
    </LinkWrapper>

    <S.Heading>ADEB Maps Location</S.Heading>

    <S.Body>
      <p>
        O Aplicativo ADEB Maps Location mostra todas as igrejas que são
        associadas a ADEB - Brasília. (Assembleia de Deus de Brasília)
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
