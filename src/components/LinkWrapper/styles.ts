import styled from 'styled-components'
interface Props {
  color?: string
}

export const Wrapper = styled.div<Props>`
  position: fixed;
  z-index: 1100; // bigger than leaflet
  top: var(--medium);
  right: var(--medium);
  color: ${(props: Props) => (props.color ? `${props.color}` : `#030518`)};
  cursor: pointer;
  svg {
    transition: color 0.3s ease-in-out;
  }
  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`
