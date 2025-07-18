import styled from 'styled-components'

import { Props } from './index'

export const P = styled.p<Props>`
  font-size: ${(props) =>
    typeof props.fontSize === 'number'
      ? `${props.fontSize}px`
      : props.fontSize || '14px'};
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
`
