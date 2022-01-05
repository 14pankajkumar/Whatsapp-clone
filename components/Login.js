import { Button } from "@material-ui/core";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import logo from "../assets/whatsapp.svg";
import { auth, provider } from "../firebase";

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((err) => alert(err));
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Image src={logo} height={200} width={200} />
        <Button onClick={signIn} style={{ marginTop: 50 }}>
          SignIn with Google
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;
