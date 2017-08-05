import styled from 'styled-components'
import { themedConfig } from '../config'

const HeaderDiv = styled.div`
  color: ${props => themedConfig(props.theme).textColor};
  background-color: ${props => themedConfig(props.theme).primaryColor};
  width: 100%;
  text-align: center;
  font-size: .9rem;
`

export default HeaderDiv
