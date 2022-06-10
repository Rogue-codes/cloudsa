import React from 'react'
import styled from 'styled-components'
import {ImConnection} from 'react-icons/im'
import {SiAzureartifacts} from 'react-icons/si'
import {GoIssueReopened} from 'react-icons/go'
import cont from '../Assets/m356.jpeg'
import AnimatedText from 'react-animated-text-content';
import { Link } from 'react-router-dom'
import {RiSettings5Fill} from 'react-icons/ri'

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
        @media (max-width:480px) {
            font-size: 1.8rem;
            padding-top: 5%;
        }
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
    @media (max-width:480px) {
        flex-direction: column;
        flex-wrap: nowrap;
        height: auto;
    }
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 2%;
    align-items: center;
`
const Card = styled.div`
    @media (max-width:480px) {
        width: 95%;
        margin-bottom: 2%;
    }
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
        @media (max-width:480px) {
            font-size: 1rem;
        }
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


function AzureInfra() {
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
                    Azure(Infrastructure)
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
            Storage and backup
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
            Site to Site Disconnection
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
            Slow Application/ Connection Issue
            </AnimatedText>
            </p>
            </Card>
            <Card>
            <RiSettings5Fill size='2.5rem' color='orange'/>
                <p style={{color:'orange'}}>
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
            Security
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
            SQL DB inaccessible Drive
            </AnimatedText>
            </p>
            </Card>
            <Card>
            <RiSettings5Fill size='2.5rem' color='orange'/>
                <p style={{color:'orange'}}>
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
            Screenshot error on Bot diagnosis
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
            Billing Issue
            </AnimatedText>
            </p>
            </Card>
            <Card>
            <RiSettings5Fill size='2.5rem' color='orange'/>
                <p style={{color:'orange'}}>
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
            Reservation mismatch / refund
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
            One Drive
            </AnimatedText>
            </p>
            </Card>
            <Card>
            <RiSettings5Fill size='2.5rem' color='orange'/>
                <p style={{color:'orange'}}>
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
            Security
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
            One Drive
            </AnimatedText>
            </p>
            </Card>
        </CardContainer>
    </Container>
  )
}

export default AzureInfra