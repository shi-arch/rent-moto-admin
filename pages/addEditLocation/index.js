import SideNavbar from "../../components/SideNavbar";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { InputBox, SimpleBackdrop } from "../../components/commonComponent";
import { useEffect } from "react";
import { addOrUpdate, populateData } from "../../utils/constants";

export default function Home() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { updatePacket, str, gotu } = useSelector((state) => state)

  useEffect(() => {
    populateData()
  }, [router.query])
  
  useEffect(() => {
    return () => {
      dispatch({ type: "CHECKERROR", payload: false })
    };
  }, []);
  useEffect(() => {
    if(gotu){
      dispatch({type: "GOTU", payload: false})
      router.push("/locations")      
    }    
  }, [gotu]);
  
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
                <InputBox value={updatePacket.location} label={"City Location"} placeholder={"location"} />
              </div>
              <div className="col-md-4">
                <InputBox value={updatePacket.subLocation} label={"Sub Location"} placeholder={"subLocation"} />
              </div>
              <div className="col-md-4">
                <InputBox value={updatePacket.url} label={"Url"} placeholder={"url"} />
              </div>
            </div>
            <button onClick={async () => {
              addOrUpdate("/createLocation")
              //let redirect = pathName.includes("addEditLocation") ? "locations" : pathName.includes("addEditUser") ? "users" : "vehicles"
              
            }} style={{ marginTop: "20px", width: "50%", padding: "12px", background: "black", color: "white", borderRadius: "12px" }}>{str}</button>
          </div>
        }
      </div>
    </div>
  );
}
