import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { media, transitions, theme } from '@styles'
import { Container, Logo } from '@components'

const animateButtonLine = keyframes`
  0% {
      width: 0;
  }
  50% {
      width: 70%;
  }
  100% {
      width: 70%;
      left: 100%;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  width: 30rem;
  margin: 0 auto;

  ${media.large`
    height: 88vh;
    grid-template-columns: repeat(2, 1fr [col-start]);
    width: 100%;
  `};
`

const LogoContainer = styled.div`
  max-width: 10rem;
  margin-bottom: 4rem;

  ${transitions.fadeUp};

  ${media.large`
    max-width: 16rem;
    margin-bottom: 0;
  `};
`

const NarativeVideoContainer = styled.div`
  clip-path: polygon(0 36%, 0 0, 100% 64%, 100% 100%);
  height: auto;
  width: 30rem;
  margin-top: 2rem;
  pointer-events: none;
  overflow: hidden;
  align-self: flex-end;

  ${media.large`
    height: 53rem;
    width: 49rem;
  `};
`

const NarativeVideo = styled.video`
  position: relative;
  height: 30rem;
  ${transitions.blurIn};

  ${media.large`
    height: 53rem;  
  `};
`

const TextContainer = styled.div`
  ${transitions.fadeUp};
`

const WelcomeHeader = styled.h1`
  color: ${props => props.theme.colors.grey};
  font-size: 1.8rem;
  margin-bottom: 2rem;

  ${media.large`
    font-size: 3.6rem;
  `};
`

const MainText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${props => props.theme.colors.grey};
  margin-bottom: 2rem;
`

const ContactActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 40rem;
`

const ContactButton = styled(Link)`
  position: relative;
  height: 45px;
  width: 195px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 3px;
  font-weight: 500;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0px 3px 18px rgba(0, 0, 0, 0.28);
    opacity: 0;
    pointer-events: none;
    transform: scale(0.8);
    transition: all 300ms ease-out;
  }

  &:hover::after {
    transform: scale(1);
    opacity: 1;
  }
`

const ContactText = styled(Link)`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  font-weight: 600;
  color: #000;

  ${media.medium`
    flex-direction: row;
  `};

  svg {
    margin-left: 1rem;
    transition: transform 300ms ${props => props.theme.transitions.in};
  }
`

const HideOnMobile = styled.span`
  display: none;

  ${media.medium`
    display: block;
  `};
`
const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;

  ${media.large`
    justify-content: space-between;
    max-width: 36rem;
    height: 53rem;
  `};
`

const RightContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 4rem;

  ${media.large`
    align-items: center;
    justify-content: flex-end;
    height: 53rem;
  `};
`

const NotFoudImage = styled.img`
  width: 800px;
  position: fixed;
  right: 0;
`

const ArrowRight = () => (
  <svg width="35" height="7" viewBox="0 0 35 7" version="1.1">
    <g id="Canvas" fill="none">
      <g id="arrow-left-icon">
        <path
          id="triangle"
          d="M 3.5 0L 6.53109 5.25L 0.468911 5.25L 3.5 0Z"
          transform="matrix(0 1 -1 0 35 0)"
          fill="black"
        />
        <line
          id="Line"
          y1="-0.5"
          x2="30"
          y2="-0.5"
          transform="translate(0 4)"
          stroke="black"
        />
      </g>
    </g>
  </svg>
)

const ArrowAnimation = styled.div`
  position: relative;
  display: inline-block;
  padding: 0rem 3rem 0 0rem;
  overflow-x: hidden;

  ${media.medium`
    padding: 0 3rem 0 0.5rem;   
  `};

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 12px;
    height: 1px;
    width: 0;
    background: #000;
    opacity: 0;
    z-index: 100;
  }

  svg {
    transition: all 300ms cubic-bezier(0.77, 0, 0.175, 1);
  }

  &:hover svg {
    transform: translateX(3rem);
  }

  &:hover span::after {
    animation: ${fadeInOut} 1s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  }

  &:hover::after {
    opacity: 1;

    ${media.medium`
      animation: ${animateButtonLine} 1s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    `};
  }
`

const ContactUsContainer = styled(Link)`
  position: absolute;
  right: 0;
  top: 0;
  color: white;
  color: ${props => props.theme.colors.grey};
  font-weight: 500;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    transform: scale(0);
    height: 2px;
    background: ${props => props.theme.colors.grey};
    transform-origin: left;
    transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    transition: all 300ms ease;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 12px;
    height: 2px;
    background: ${props => props.theme.colors.grey};
  }

  &:hover::before {
    transform: scale(1);
  }
`

const CopyRightContainer = styled.div`
  display: none;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${props => props.theme.colors.grey};
  ${transitions.fadeUp};

  ${media.large`
    display: block;
  `};
`

class NotFound extends Component {
  state = { animation: '' }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animation: 'start' })
    })
  }

  render() {
    const { animation, view } = this.state

    return (
      <ThemeProvider theme={theme}>
        <Container background="light">
          <GridContainer>
            <LeftContainer>
              <LogoContainer animation={animation}>
                <Logo color="dark" />
              </LogoContainer>
              <TextContainer animation={animation} transitionDelay={600}>
                <WelcomeHeader>Oh, nooo!</WelcomeHeader>
                <MainText>
                  This page is like those old school "404" when something goes
                  wrong, but dont worry, we're still live and well.
                </MainText>
                <MainText>
                  If you have any questions or a billion dollar idea for a
                  project, just contact us. We love ideas.
                </MainText>
                <ContactActionsContainer>
                  <ContactButton>Contact us</ContactButton>
                  <ContactText to="/">
                    <ArrowAnimation>
                      Go back home .
                      <ArrowRight />
                    </ArrowAnimation>
                  </ContactText>
                </ContactActionsContainer>
              </TextContainer>
              <CopyRightContainer animation={animation} transitionDelay={800}>
                © {new Date().getFullYear()} Narative Studio Inc.
              </CopyRightContainer>
              <div />
            </LeftContainer>
            <RightContainer>
              <ContactUsContainer to="/contact">Contact us</ContactUsContainer>
              <NotFoudImage
                src="http://res.cloudinary.com/narative/image/upload/v1526049042/4042x.jpg"
                alt="404, Page Not Found"
              />
            </RightContainer>
          </GridContainer>
        </Container>
      </ThemeProvider>
    )
  }
}

export default NotFound
