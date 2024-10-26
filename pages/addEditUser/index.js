import SideNavbar from "../../components/SideNavbar";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { InputBox, SimpleBackdrop } from "../../components/commonComponent";
import { useEffect, useState } from "react";
import { addOrUpdate, populateData } from "../../utils/constants";


export default function Home(props) {
  const router = useRouter()
  const dispatch = useDispatch()
  const { updatePacket, str, gotu } = useSelector((state) => state)
  const [form, setForm] = useState([])

  useEffect(() => {
    if (gotu) {
      dispatch({ type: "GOTU", payload: false })
      router.push("/users")
    }
  }, []);

  useEffect(() => {
    if (gotu) {
      dispatch({ type: "GOTU", payload: false })
      router.push("/users")
    }
  }, [gotu]);

  useEffect(() => {
    populateData()
  }, [router.query])

  useEffect(() => {
    setForm([
      <div key={1} style={{ marginTop: "30px", border: "2.5px solid #737889", padding: "30px", borderRadius: "10px" }}>
        <div className="row" style={{ marginBottom: "20px" }}>
          <div className="col-md-4">
            <InputBox value={updatePacket.userType} label={"User Type"} placeholder={"userType"} />
          </div>
          <div className="col-md-4">
            <InputBox value={updatePacket.firstName} label={"First Name"} placeholder={"firstName"} />
          </div>
        </div>
        <div className="row" style={{ marginBottom: "20px" }}>
          <div className="col-md-4">
            <InputBox value={updatePacket.lastName} label={"Last Name"} placeholder={"lastName"} />
          </div>
          <div className="col-md-4">
            <InputBox value={updatePacket.email} label={"Email"} placeholder={"email"} />
          </div>
        </div>
        <div className="row" style={{ marginBottom: "20px" }}>
          <div className="col-md-4">
            <InputBox value={updatePacket.contact} label={"Contact"} placeholder={"contact"} />
          </div>
          <div className="col-md-4">
          </div>
          <div className="col-md-4">
          </div>
        </div>
        <button onClick={async () => {
          await addOrUpdate("/profile")
        }} style={{ marginTop: "20px", width: "50%", padding: "12px", background: "black", color: "white", borderRadius: "12px" }}>{str}</button>
      </div>
    ])
  }, [updatePacket])

  return (
    <div className="bg-blue-800">
      <SimpleBackdrop />
      <SideNavbar />
      <div style={{ padding: "24px 20px 31px 267px", background: "white" }}>
        <div style={{ display: "flex" }}>
          <h1 style={{ fontWeight: "bolder", fontSize: "x-large" }}>{str}</h1>
        </div>
        {form}
      </div>
    </div>
  );
}
