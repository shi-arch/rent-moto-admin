import Head from "next/head";
import SideNavbar from "../../components/SideNavbar";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { DropDown, InputBox, SimpleBackdrop } from "../../components/commonComponent";
import { useEffect, useState } from "react";
import { getApi, postApi } from "../api/response";
import { IoIosAddCircle } from "react-icons/io";
import { lowerCase } from "lodash";
import { addOrUpdate } from "../../utils/constants";

export default function Home() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [str, setStr] = useState("Add Vehicle")
  const { totalData, locationData, updatePacket } = useSelector((state) => state)
  const [packet, setPacket] = useState("")

  useEffect(() => {
    (async () => {
      let pickupLocation = ""
      let location = ""
      let cloneData = _.cloneDeep(updatePacket)
      if (router.query && !router.query._id) {
        if (!locationData.length) {
          dispatch({ type: "LOADING", payload: true })
          const response = await getApi('/getLocations')
          if (response && response.status == 200) {
            location = response.data[0].myLocation
            pickupLocation = response.data[0].subLocation[0].value
            dispatch({ type: "LOCATIONDATA", payload: response.data })
          }
          dispatch({ type: "LOADING", payload: false })
        }
      } else {
        const query = router.query._id
        setStr("Update Vehicle")
        const find = totalData.find(o => o._id == query)
        if (find) {
          pickupLocation = find.pickupLocation
          location = find.location
          dispatch({ type: "UPDATEPACKET", payload: find })
          setPacket(find)
        }
      }
    })()

  }, [router.query])
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
          <h1 style={{ fontWeight: "bolder", fontSize: "x-large" }}>{str}</h1>
        </div>
        {
          <div style={{ marginTop: "30px", border: "2.5px solid #737889", padding: "30px", borderRadius: "10px" }}>
            <div className="row" style={{ marginBottom: "20px" }}>
              <div className="col-md-4">
                <InputBox value={updatePacket.name} label={"Name"} placeholder={"name"} />
              </div>
              <div className="col-md-4">
                <InputBox value={updatePacket.url} label={"Url"} placeholder={"url"} />
              </div>
              <div className="col-md-4">
                <DropDown label={"Location"} />
              </div>
            </div>
            <div className="row" style={{ marginBottom: "20px" }}>
              <div className="col-md-4">
                <DropDown label={"Sub Location"} />
              </div>
              <div className="col-md-4">
                <InputBox value={updatePacket.pricePerday} label={"Price Per Day"} placeholder={"pricePerday"} />
              </div>
              <div className="col-md-4">
                <InputBox value={updatePacket.distanceLimit} label={"Distance Limit"} placeholder={"distanceLimit"} />
              </div>
            </div>
            <div className="row" style={{ marginBottom: "20px" }}>
              <div className="col-md-4">
                <InputBox value={updatePacket.accessChargePerKm} label={"Access Charge Per Km"} placeholder={"accessChargePerKm"} />
              </div>
              <div className="col-md-4">
                <InputBox readOnly={true} value={updatePacket.vehicleNumber} label={"Vehicle Number"} placeholder={"vehicleNumber"} />
              </div>
              <div className="col-md-4">
                <InputBox value={updatePacket.transmissionType} label={"Transmission Type"} placeholder={"transmissionType"} />
              </div>
            </div>
            <div className="row" style={{ marginBottom: "20px" }}>
              <div className="col-md-4">
                <InputBox value={updatePacket.brand} label={"Brand"} placeholder={"brand"} />
              </div>
              <div className="col-md-4">
              </div>
            </div>
            <button onClick={() => {
              addOrUpdate("/createVehicle")
            }} style={{ marginTop: "20px", width: "50%", padding: "12px", background: "black", color: "white", borderRadius: "12px" }}>{str}</button>
          </div>
        }

      </div>
    </div>
  );
}