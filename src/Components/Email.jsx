import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast';
import cont from '../Assets/image.png'

const Contain = styled.div`
  @media (max-width:480px) {
    background-position: 70% 10%;
    padding: 2%;
  }
  width: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${cont});
  background-size: cover;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  -o-background-size:cover;
  background-position: 10% 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5%;
`
const Form = styled.form`
  @media (max-width:480px) {
    width: 100%;
    padding: 5%;
  }
  width: 60%;
  padding: 2%;
  min-height: 100%;
  background: #ffffffbd;
  margin: auto;
  input{
    @media (max-width:480px) {
      width: 100%;
      margin-left: 0%;
      height: 6vh;
      margin: auto!important;
    }
    width: 80%;
    margin-bottom: 5%;
    height: 8vh;
    border-radius: 5px;
    margin-left: 5%;
    border: .5px solid lightgrey;
    padding-left: 2%;
    &:focus{
      outline: none;
    }
    &::placeholder{
      @media (max-width:480px) {
        font-size: .8rem;
      }
      font-size: 1vw;
    }
  }
  textarea{
    @media (max-width:480px) {
      width: 100%;
      margin-left: 0%;
      margin-top: 5%;
    }
    width: 80%;
    border: .5px solid lightgrey;
    margin-left: 5%;
    padding: 2%;
    &:focus{
      outline: none;
    }
  }
  p{
    @media (max-width:480px) {
      margin-left: 0%;
    }
    margin-left: 5%;
  }
  button{
    @media (max-width:480px) {
      font-size: 1.2rem;
    }
    display: block;
    margin-left: 5%;
    margin-top: 5%;
    padding: 1% 4%;
    font-size: 1.2vw;
    border: none;
    background: #68120a;
    border-radius: 5px;
    color: #fff;
  }
`
function Email() {
  const [name,setName] = useState('')
  const [organization,setOrganization] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const [message,SetMessage] = useState('')
  const formRef = useRef()
  const [done, isDone] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(name,email,message)
    if(!email || !name || !message) {
      console.log('empty')
      toast.error('Please fill in the required Information')
      return
    }
    emailjs.sendForm('service_0mhvxbd', 'template_ic74q1b', formRef.current, '8RJySH7rZZrTznIBh')
  .then((result) => {
      console.log(result.text);
      isDone(true)
  }, (error) => {
      console.log(error.text);
  });
}
  return (
    <Contain>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <p>Organisation*</p>
        <input type="text" value={name} name="userName" onChange={(e)=>setName(e.target.value)} placeholder="organization" />
        <p>Name*</p>
        <input type="text" value={organization}  name="organization" onChange={(e)=>setOrganization(e.target.value)} placeholder="Name" />
        <p>Phone Number*</p>
        <input type="number" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone  Number" />
        <p>Email*</p>
        <input type="email" name="userEmail" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address" />
        <textarea value={message} name="message" onChange={(e)=>SetMessage(e.target.value)} placeholder="Description" cols="30" rows="10">
        </textarea>

        <button>Submit</button>
        {done && 'Your Mail has been sent'}
      </Form>
      <Toaster/>
    </Contain>
  )
}

export default Email