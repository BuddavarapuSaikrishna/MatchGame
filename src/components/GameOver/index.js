import {
  GameOverContainer,
  GameOverImageContainer,
  TrophyImage,
  YourScore,
  ScoreText,
  CustomResetBtn,
  ResetImg,
  ResetContainer,
} from './StyledComponents'

const GameOver = props => {
  const {Score, Reset} = props

  const OnClickPlayAgain = () => {
    Reset()
  }

  return (
    <GameOverContainer>
      <GameOverImageContainer>
        <TrophyImage
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
        />
        <YourScore>YOUR SCORE</YourScore>
        <ScoreText>{Score}</ScoreText>
        <ResetContainer>
          <ResetImg
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <CustomResetBtn type="button" onClick={OnClickPlayAgain}>
            PLAY AGAIN
          </CustomResetBtn>
        </ResetContainer>
      </GameOverImageContainer>
    </GameOverContainer>
  )
}

export default GameOver
