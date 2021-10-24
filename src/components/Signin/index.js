import React from 'react'
import { FormButton, FormInput, FormWrap, Container, FormLabel, Form, FormH1, Icon, FormContent, Text} from './SigninElements'

const SignIn = () => {
    return (
        <>
          <Container>
            <FormWrap>
            <Icon to="/">Dolla</Icon>
            <FormContent>
                <Form actipn="#">
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type="email" required/>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot password</Text>
                </Form>
            </FormContent>
            </FormWrap>    
          </Container>  
        </>
    )
}

export default SignIn
