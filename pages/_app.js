import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from "../components/Login";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";

const MyApp = ({ Component, pageProps }) => {
  const [user, loading] = useAuthState(auth);

  useEffect(async () => {
    if (user) {
      await setDoc(
        doc(collection(db, "users"), user.uid),
        {
          name: user.displayName,
          email: user.email,
          lastSeen: serverTimestamp(),
          photoURL: user.photoURL,
        },
        { merge: true }
      );
    }
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <Login />;

  return <Component {...pageProps} />;
};

export default MyApp;
