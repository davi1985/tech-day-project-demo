import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #212529;
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem;
`
export const Logo = styled.img`
  width: 20rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 1rem;
  width: 100rem;
`

export const Link = styled.a`
  padding: 1.5rem 4rem;
  margin-top: 1rem;
  font-size: 2rem;
  border: none;
  background: #de7034;
  color: white;

  transition: filter 0.2s;
  cursor: pointer;
  text-decoration: none;
  margin-top: 3rem;

  &:hover {
    filter: brightness(0.8);
  }
`
