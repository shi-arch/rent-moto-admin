import Head from "next/head";
import SideNavbar from "../../components/SideNavbar";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { DropDown, InputBox, SimpleBackdrop } from "../../components/commonComponent";
import { useEffect, useState } from "react";
import { getApi, postApi } from "../api/response";
import { IoIosAddCircle } from "react-icons/io";

export default function Home() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { totalData } = useSelector((state) => state)
  const [packet, setPacket] = useState("")

  useEffect(() => {
    if (router.query) {
      const query = router.query._id
      const find = totalData.find(o => o._id == query)
      if (find) {
        setPacket(find)
      }
    }
  }, [router.query])
  return (
    <div className="bg-blue-800">
      <SimpleBackdrop />
      <SideNavbar />
      <div style={{ padding: "24px 20px 31px 267px", background: "white" }}>
        <div style={{ display: "flex" }}>
          <h1 style={{ fontWeight: "bolder", fontSize: "x-large" }}>ADD OR UPDATE LOCATION</h1>
        </div>
        {
          <div style={{ marginTop: "30px", border: "2.5px solid #737889", padding: "30px", borderRadius: "10px" }}>
            <div className="row" style={{ marginBottom: "20px" }}>
              <div className="col-md-4">
                <InputBox value={packet.location} label={"City Location"} placeholder={"City Location"} />
              </div>
              <div className="col-md-4">
                <InputBox value={packet.subLocation} label={"Sub Location"} placeholder={"Sub Location"} />
              </div>
              <div className="col-md-4">
                <InputBox value={packet.url} label={"Url"} placeholder={"url"} />
              </div>
            </div>
            <button style={{ marginTop: "20px", width: "50%", padding: "12px", background: "black", color: "white", borderRadius: "12px" }}>{packet ? "Update" : "Add"} Location</button>
          </div>
        }
      </div>
    </div>
  );
}
