import React, { useEffect } from 'react'
import styled from 'styled-components'
import cld from '../Assets/cldsa.png'
import bg from '../Assets/image.png'
import {FaHeadset} from 'react-icons/fa'
import {MdTask} from 'react-icons/md'
import {RiQuestionAnswerFill} from 'react-icons/ri'
import {RiSettings5Fill} from 'react-icons/ri'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'
import Aos from 'aos'
import "aos/dist/aos.css"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 1%;
    background: url(${bg});
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
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
    span{
        color: black;
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
    width: 100%;
    height: 10vh;
    margin-top: 10%;
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
        padding-top: 1%;
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
function Home() {
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(()=>{
        Aos.init({duration : 3000})
      },[])
  return (
    <Container>
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

        <Bottom data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
            <Card onClick={() => setModalShow(true)} >
                <Element>
                    <span><FaHeadset size='2.5rem' color='#9c3233'/></span>
                    <ElementText>Support Request</ElementText>
                </Element>
            </Card>
            <Card>
                <Element>
                    <span><RiQuestionAnswerFill size='2.5rem' color='black'/></span>
                    <ElementText style={{color:'black'}}>Product Enquiry</ElementText>
                </Element>
            </Card>
            <Card>
                <Element>
                    <span><MdTask size='2.5rem' color='green'/></span>
                    <ElementText style={{color:'green'}}>Solution<br/> Assesment</ElementText>
                </Element>
            </Card>
            <Card>
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
        
    </Container>
  )
}

export default Home