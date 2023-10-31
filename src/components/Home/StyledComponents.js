import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/match-game-bg.png');
  background-size: cover;
`

export const ItemDisplayContainer = styled.img`
  margin-top: 60px;
  width: 70%;
`
export const TabsListContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
`

export const ImagesListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
`
