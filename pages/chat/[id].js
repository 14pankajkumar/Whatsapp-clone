import { doc, getDoc } from "firebase/firestore";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import ChatScreen from "../../components/ChatScreen";
import Sidebar from "../../components/Sidebar";
import { auth, db } from "../../firebase";
import getRecipientEmail from "../../utils/getRecipientEmail";

const Chat = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [chatQuery, setChatQuery] = useState();

  const recipientEmail = getRecipientEmail(chatQuery, user);

  useEffect(async () => {
    await getDoc(doc(db, "chats", router.query.id)).then((res) => {
      setChatQuery(res.data().users);
    });
  }, [db, router]);

  return (
    <Container>
      <Head>
        <title>Chat with {recipientEmail}</title>
      </Head>

      <Sidebar />

      <ChatContainer>
        <ChatScreen chatQuery={chatQuery} />
      </ChatContainer>
    </Container>
  );
};

export default Chat;

const Container = styled.div`
  display: flex;
`;

const ChatContainer = styled.div`
  flex: 1;
`;
