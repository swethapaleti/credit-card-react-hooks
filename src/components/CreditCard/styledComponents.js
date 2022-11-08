import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const CardContainer = styled.div`
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 23px;
  border-bottom: 2px solid #ffd773;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`

export const CreditContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  height: 30vh;
  @media screen and (min-width: 768px) {
    height: 45vh;
    margin: auto;
  }
`
export const CardNumber = styled.p`
  color: #ffffff;
  font-size: 23px;
  height: 50px;
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`

export const Title = styled.p`
  color: #d3d9e0;
  font-size: 16px;
  height: 50px;
`

export const Name = styled.p`
  color: #ffffff;
  font-size: 21px;
  height: 50px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`

export const InputContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin: 10px;
`

export const InputTitle = styled.h1`
  color: #3b4b69;
  font-size: 21px;
`

export const InputField = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 2px 8px 0px #d3d9e0;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80%;
  padding: 30px;
  border-radius: 10px;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #c3cad9;
  margin-bottom: 30px;
`
