import styled from 'styled-components'

export const TabListItems = styled.li`
  padding: 10px;
  list-style: none;
`

export const TabBtn = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-weight: bold;
  font-size: 20px;
  border-bottom: ${props => (props.active ? '3px solid orange' : '')};
  color: ${props => (props.active ? '#fec653' : '#ffffff')};
  cursor: pointer;
`
