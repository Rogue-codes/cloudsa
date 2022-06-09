import React from 'react'
import styled from 'styled-components'
import {ImConnection} from 'react-icons/im'
import {SiAzureartifacts} from 'react-icons/si'
import {GoIssueReopened} from 'react-icons/go'
import cont from '../Assets/onprem.webp'
import AnimatedText from 'react-animated-text-content';
import {RiSettings5Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    height: auto;
    background: linear-gradient(90deg, #067fbc62 42%, #067fbc62 77%, #067fbc62 100%),url(${cont});
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-position: 10% 50%;
    h1{
        text-align: center;
        color: #fff;
        padding-top: 2%;
        font-weight: 900;
    }
    .home{
        @media (max-width:480px) {
            margin-top: 2%;
        }
        position: absolute;
        top: 0;
        text-decoration: none;
        background: #9c3233;
        padding:.5% 2%;
        color: #fff;
    }
`
const CardContainer = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 2%;
    align-items: center;
`
const Card = styled.div`
    width: 22%;
    height: 15%;
    padding: 1%;
    display: flex;
    justify-content: center;
    gap: 5%!important;
    align-items: center !important;
    border-top: 3px solid #9c3233;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    font-size: 1.2vw;
    font-weight: 900;
    font-family: 'Raleway', sans-serif;
    transition: all .2s linear;
    background: #fff;
    cursor: pointer;
    p{
        margin-top: 10%;
    }
    &:hover{
        transform: scale(1.05)
    }
    &:nth-child(2){
        border-top: 4px solid black;
        p{
            color: #000;
        }
    }
    &:nth-child(3){
        border-top: 4px solid green;
    }
    &:nth-child(4){
        border-top: 4px solid orange;
    }
`

function OnPrem() {
  return (
    <Container>
        <Link className='home' to="/">Home</Link>
        <h1>
        <AnimatedText
                    type="words" // animate words or chars
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                    }}
                    animationType="float"
                    interval={0.06}
                    duration={0.8}
                    tag="h1"
                    className="animated-paragraph"
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                >
                    On-Premise Solution(Exchange Server, Active Directory)
                </AnimatedText>
        </h1>

        <CardContainer>
            <Card><GoIssueReopened color='#9c3233' size='2rem'/>
                <p style={{color:'#9c3233'}}>
                <AnimatedText
            type="words" // animate words or chars
            animation={{
                x: '200px',
                y: '-20px',
                scale: 1.1,
                ease: 'ease-in-out',
            }}
            animationType="bounce"
            interval={0.06}
            duration={0.8}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
            >
               Azure Active Directory Connect
                </AnimatedText>
                </p>
            </Card>

            <Card>
                <SiAzureartifacts size='2rem'/>
                <p>
                <AnimatedText
            type="words" // animate words or chars
            animation={{
                x: '200px',
                y: '-20px',
                scale: 1.1,
                ease: 'ease-in-out',
            }}
            animationType="bounce"
            interval={0.06}
            duration={0.8}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
            >
               Active directory
                </AnimatedText>
                </p>
            </Card>
            <Card>
                <ImConnection color='green' size='2rem'/>
                <p style={{color:'green'}}>
                <AnimatedText
            type="words" // animate words or chars
            animation={{
                x: '200px',
                y: '-20px',
                scale: 1.1,
                ease: 'ease-in-out',
            }}
            animationType="bounce"
            interval={0.06}
            duration={0.8}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
            >
               Exchange Server On-Premise
                </AnimatedText>
                </p>
            </Card>
            <Card><RiSettings5Fill size='2.5rem' color='orange'/><p style={{color:'orange'}}>Others</p></Card>
        </CardContainer>
    </Container>
  )
}

export default OnPrem