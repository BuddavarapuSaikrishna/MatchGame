import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #2c0e3a;
  padding: 20px;
  width: 100%;
`

export const Logo = styled.img`
  width: 120px;
  height: 50px;
`
export const ScoreTimerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 25%;
  }
`
export const ScoreContainer = styled.div`
  display: flex;
`

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ScoreText = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`

export const ScoreValue = styled(ScoreText)`
  margin-left: 10px;
  color: #fec653;
`

export const TimerImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`
export const TimerCount = styled.p`
  color: #fec653;
  font-weight: bold;
  font-size: 18px;
`
