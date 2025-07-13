import styled from 'styled-components'
import { Props } from '.'

export const Titulo = styled.h3<Props>`
  color: #282a35;
  margin-bottom: 16px;
  font-size: ${(props) =>
    typeof props.fontSize === 'number'
      ? `${props.fontSize}px`
      : props.fontSize || '14px'};
  font-weight: bold;
`
