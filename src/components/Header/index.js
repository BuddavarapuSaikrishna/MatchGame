import {
  HeaderContainer,
  Logo,
  ScoreTimerContainer,
  ScoreContainer,
  ScoreText,
  ScoreValue,
  TimerContainer,
  TimerImg,
  TimerCount,
} from './StyledComponents'

const Header = props => {
  const {Score, Timer} = props

  return (
    <HeaderContainer>
      <Logo
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <ScoreTimerContainer>
        <ScoreContainer>
          <ScoreText>Score : </ScoreText>
          <ScoreValue>{Score}</ScoreValue>
        </ScoreContainer>
        <TimerContainer>
          <TimerImg
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <TimerCount>{Timer} sec</TimerCount>
        </TimerContainer>
      </ScoreTimerContainer>
    </HeaderContainer>
  )
}

export default Header
