import React from 'react';
import {signInWithGoogle} from './firebase'
import { signInWithFacebook } from './firebase';
import {signInWithGithub} from './firebase'

const SignIn = () => {
  const btnStyle = {margin: 20, height: '40px', borderRadius: '10px', backgroundColor:'#4CAF50', color: 'white', fontWeight: 'bold', padding: '7px 7px'}
  return (
    <div style={{marginTop: 40}}>
      <button onClick={signInWithGoogle} style={btnStyle}>Sign In With Google</button>
      <button onClick={signInWithFacebook} style={btnStyle}>Sign In With Facebook</button>
      <button onClick={signInWithGithub} style={btnStyle}>Sign In With Github</button>
    </div>
  )
}

export default SignIn