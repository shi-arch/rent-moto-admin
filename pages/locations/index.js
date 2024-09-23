import Head from "next/head";
import SideNavbar from "../../components/SideNavbar";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import DisplayTable from "../../components/table/locationTable";
import { SimpleBackdrop } from "../../components/commonComponent";
import { useEffect } from "react";
import { getApi, postApi } from "../api/response";
import { IoIosAddCircle } from "react-icons/io";

export default function Home() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { userDetails } = useSelector(state => state)
  useEffect(() => {
    (async () => {
      dispatch({ type: "LOADING", payload: true })
      const res = await getApi('/getLocations')
      if (res && res.status == 200) {
        dispatch({ type: "TOTALDATA", payload: res.data })
        dispatch({ type: "LOCATIONDATA", payload: res.data })
      }
      dispatch({ type: "LOADING", payload: false })
    })()
  }, [])
  return (
    <div className="bg-blue-800">
      <SimpleBackdrop />
      <Head>
        <title>Responsive Side-Navbar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <SideNavbar />
      <div style={{ padding: "24px 20px 31px 267px", background: "white" }}>
        <div style={{ display: "flex" }}>
          <h1 style={{ fontWeight: "bolder", fontSize: "x-large" }}>LOCATION LIST</h1>
          <button style={{ marginLeft: "auto", padding: "12px", background: "black", color: "white", borderRadius: "12px", display: "flex" }}><span style={{ marginRight: "5px" }}>ADD LOCATION </span> <IoIosAddCircle style={{ marginTop: "5px", marginRight: "5px" }} /></button>
        </div>
        <DisplayTable />
      </div>
    </div>
  );
}
