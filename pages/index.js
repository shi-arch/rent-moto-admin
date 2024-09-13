import Head from "next/head";
import SideNavbar from "../components/SideNavbar";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";

export default function Home() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { userDetails } = useSelector(state => state)
  return (
    <div className="bg-blue-800">
      <Head>
        <title>Responsive Side-Navbar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <SideNavbar />
      <div style={{padding: "1px 396px"}}>
        <h1>Hello Shivram : {userDetails.userType}</h1>
      </div>
    </div>
  );
}