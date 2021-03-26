import Link from 'next/link'
import * as S from './styles'

interface LinkWrapperProps {
  href: string
  children: React.ReactNode
  color?: string
}

const LinkWrapper = ({ href, children, color }: LinkWrapperProps) => (
  <S.Wrapper color={color}>
    <Link href={href}>{children}</Link>
  </S.Wrapper>
)

export default LinkWrapper
