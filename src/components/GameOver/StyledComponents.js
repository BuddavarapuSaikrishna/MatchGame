import styled from 'styled-components'

export const GameOverContainer = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 20px;
  width: 80%;
  justify-content: center;
`

export const GameOverImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 30px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/match-game-score-card-sm-bg.png');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 576px) {
    width: 65%;
    background-image: url('https://assets.ccbp.in/frontend/react-js/match-game-score-card-lg-bg.png');
    height: 1000px;
  }
`

export const TrophyImage = styled.img`
  width: 200px;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  @media screen and (min-width: 576px) {
    width: 350px;
  }
`

export const YourScore = styled.p`
  color: #ffffff;
  font-size: 25px;
  font-weight: bold;
`

export const ScoreText = styled(YourScore)`
  font-size: 30px;
`
export const ResetContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #cf60c8;
  border-radius: 15px;
  padding: 15px;
  align-items: center;
`
export const ResetImg = styled.img`
  width: 25px;
`
export const CustomResetBtn = styled.button`
  outline: none;
  border: none;
  padding: 10px 20px;
  font-size: 20px;
  color: #ffffff;
  background-color: transparent;
`
