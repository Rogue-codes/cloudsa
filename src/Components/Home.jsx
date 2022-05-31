import React, { useEffect } from 'react'
import styled from 'styled-components'
import cld from '../Assets/cldsa.png'
import {FaHeadset} from 'react-icons/fa'
import {MdTask} from 'react-icons/md'
import {RiQuestionAnswerFill} from 'react-icons/ri'
import {RiSettings5Fill} from 'react-icons/ri'
import {FiFacebook,FiInstagram,FiLinkedin} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'
import Aos from 'aos'
import "aos/dist/aos.css"
import MyVerticallyCenteredModal2 from './MyVerticallyCenteredModal2'
import MyVerticallyCenteredModal3 from './MyVerticallyCenteredModal3'
import MyVerticallyCenteredModal4 from './MyVerticallyCenteredModal4'

const Container = styled.div`
    min-height: 100vh;
    background-color:#0000006a;
    background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-repeat: no-repeat;
    background-position: center; 
    position: relative;
    border: 11px solid #de1313;
`
const Top = styled.div`
   width: 100%;
   height: 10vh;
   display: flex;
   justify-content: flex-start;
   gap: .5%;
   align-items: center;
`
const Logo = styled.div`
    width: 15%;
    height: 100%;
    background: url(${cld});
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
`
const Text = styled.p`
    font-size: 1.3vw;
    color: white;
    margin-top: 2.5%;
    margin-left: -1.5%;
`
const Texxt = styled.h1`
    font-size: 4vw;
    font-weight: 900;
    color: #9c3233;
    font-family: 'Raleway', sans-serif;
    padding-left: 8%;
    span{
        color: white;
        font-size: 2.5vw;
        font-family: 'Raleway', sans-serif;
    }
`
const Mid = styled.div`
    width: 100%;
    height: auto;
    margin-top: 10%;
`
const Bottom = styled.div`
    width: 95%;
    margin: auto;
    position: absolute;
    height: 10vh;
    margin-top: 10%;
    margin-left: 2%;
    display: flex;
    justify-content: space-between;
`
const Card = styled.div`
    width: 22%;
    height: 100%;
    border-radius: 12px;
    background: #fff;
    border-top: 3px solid #9c3233;
    transition: all .2s linear;
    cursor: pointer;
    &:hover{
        transform: scale(1.05)
    }
    &:nth-child(2){
        border-top: 4px solid black;
    }
    &:nth-child(3){
        border-top: 4px solid green;
    }
    &:nth-child(4){
        border-top: 4px solid orange;
    }
`
const Element = styled.div`
    display: flex;
    height: 100%;
    gap: 5%;
    justify-content: center;
    align-items: center;
`
const ElementText = styled.p`
    font-size: 1.5vw;
    color: #9c3233;
`
const Land = styled.video`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100vh;
    /* Make video to at least 100% wide and tall */
    min-width: 100%; 
    min-height: 100%; 
    /* Setting width & height to auto prevents the browser from stretching or squishing the video */
    width: auto;
    height: auto;
    /* Center the video */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: -1;
    width: 100%; 
    height: 100%;
    object-fit: cover;
` 
const Social = styled.div`
    width: 4%;
    position: fixed;
    top: 25%;
    display: flex;
    flex-direction: column;
    background: #9c3233;
    transition: all .3s linear;
    &:hover{
      span{
        transition: all .3s linear;
        &:nth-child(1){
          background: #3b579d;
        }
        &:nth-child(2){
          transition: all .3s linear;
          background: #68120a;
        }
        &:nth-child(3){
          transition: all .3s linear;
          background: #00aced;
        }
        &:nth-child(4){
          transition: all .3s linear;
          background: #3b579d;
        }
      }
    }
    span{
      width: 100%;
      height: 8vh;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon{
        font-size: 1.5vw;
        color: white;
      }
      &:hover{
        width: 120%;
      }
    }
`
const Whatsapp = styled.a`
  @media (max-width:480px) {
    left: 80%;
  }
  cursor: pointer;
  position: fixed;
  left: 92%;
  top: 70%;
  width:5%;
  height: 10%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all .5s linear;
  border: none;
  &:hover{
    transform: scale(1.1)
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`

function Home() {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(false);
    useEffect(()=>{
        Aos.init({duration : 3000})
      },[])
  return (
    <Container>
        <Land autoPlay muted loop id="myVideo">
            <source src="BGI.mp4" type="video/mp4"/>
        </Land>
        <Top>
            <Logo></Logo>
            <Text>Service Request Portal</Text>
        </Top>

        <Mid>
            <Texxt data-aos="fade-left">
                AFRICAN CLOUD COMPANY
            </Texxt>

            <Texxt data-aos="fade-left">
                a subsidiary of<br/> <span>Signal  Alliance Technology Holding</span> 
            </Texxt>
        </Mid>

        <Bottom data-aos="fade-down"
     data-aos-anchor-placement="bottom-bottom">
            <Card onClick={() => setModalShow(true)} >
                <Element>
                    <span><FaHeadset size='2.5rem' color='#9c3233'/></span>
                    <ElementText>Support Request</ElementText>
                </Element>
            </Card>
            <Card onClick={() => setModalShow2(true)}>
                <Element>
                    <span><RiQuestionAnswerFill size='2.5rem' color='black'/></span>
                    <ElementText style={{color:'black'}}>Product Enquiry</ElementText>
                </Element>
            </Card>
            <Card onClick={() => setModalShow3(true)}>
                <Element>
                    <span><MdTask size='2.5rem' color='green'/></span>
                    <ElementText style={{color:'green'}}>Solution Assessment</ElementText>
                </Element>
            </Card>
            <Card onClick={() => setModalShow4(true)}>
                <Element>
                    <span><RiSettings5Fill size='2.5rem' color='orange'/></span>
                    <ElementText style={{color:'orange'}}>Others</ElementText>
                </Element>
            </Card>
        </Bottom>

        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

        <MyVerticallyCenteredModal2
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      />

        <MyVerticallyCenteredModal3
        show={modalShow3}
        onHide={() => setModalShow3(false)}
      />

        <MyVerticallyCenteredModal4
        show={modalShow4}
        onHide={() => setModalShow4(false)}
      />
        
        <Social data-aos="fade-down">
                <span><a href="https://www.facebook.com/cloudsa.africa"><FiFacebook size='1.2rem' color='#fff'/></a></span>
                <span><a href="https://www.twitter.com/cloudsa_africa"><FiTwitter size='1.2rem' color='#fff'/></a></span>
                <span><a href="https://www.instagram.com/cloudsa_africa"><FiInstagram size='1.2rem' color='#fff'/></a></span>
                <span><a href="https://www.Linkedin.com/company/cloudsa-tech/"><FiLinkedin size='1.2rem' color='#fff'/></a></span>
        </Social>

        <Whatsapp href="https://api.whatsapp.com/send?phone=2347049216299">
          <img src='/wat.png' alt=''/>
        </Whatsapp>
    </Container>
  )
}

export default Home