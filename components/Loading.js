import { Circle } from "better-react-spinkit";
import Image from "next/image";
import logo from "../assets/whatsapp.svg";

const Loading = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <Image src={logo} height={200} width={200} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Circle color="#3CBC28" size={60} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
