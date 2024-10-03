import SideNavbar from "../../components/SideNavbar";
import { useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { InputBox, SimpleBackdrop } from "../../components/commonComponent";
import { useEffect } from "react";
import { addOrUpdate, populateData } from "../../utils/constants";

export default function Home() {
  const router = useRouter()
  const { updatePacket, str } = useSelector((state) => state)

  useEffect(() => {
    populateData()
  }, [router.query])

  return (
    <div className="bg-blue-800">
      <SimpleBackdrop />
      <SideNavbar />
      <div style={{ padding: "24px 20px 31px 267px", background: "white" }}>
        <div style={{ display: "flex" }}>
          <h1 style={{ fontWeight: "bolder", fontSize: "x-large" }}>{str}</h1>
        </div>
        {
          <div style={{ marginTop: "30px", border: "2.5px solid #737889", padding: "30px", borderRadius: "10px" }}>
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
            <button onClick={() => {
              addOrUpdate("/profile")
            }} style={{ marginTop: "20px", width: "50%", padding: "12px", background: "black", color: "white", borderRadius: "12px" }}>{str}</button>
          </div>
        }

      </div>
    </div>
  );
}
