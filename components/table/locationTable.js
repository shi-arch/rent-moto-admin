import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LocationTableHeader, PaginationComp, ActionComp } from "../commonComponent";

export default function DisplayTable() {
    const dispatch = useDispatch()
    const { totalData, locationData } = useSelector((state) => state)
    const [data, setData] = useState([])
    useEffect(() => {
        if (locationData && locationData.length) {
            const arr = []
            for (let i = 0; i < locationData.length; i++) {
                let obj = locationData[i]
                for (let j = 0; j < obj.subLocation.length; j++) {
                    let sLoca = obj.subLocation[j].label
                    if (sLoca !== 'Please select the nearby location') {
                        arr.push({ location: locationData[i].myLocation, subLocation: sLoca, url: locationData[i].url, _id: (Math.random() + 1).toString(36).substring(3), orId: obj._id })
                    }
                }
            }            
            setData(arr)
            dispatch({type: "TOTALDATA", payload: arr})
        }

    }, [locationData])
    return (
        <>
            <div style={{ overflow: "scroll", marginTop: "40px" }}>
                <table style={{ width: "100%" }}>
                    <tbody>
                        <LocationTableHeader />
                        {
                            data.length ?
                                data.map((o) => {
                                    const { location, subLocation, url, _id } = o
                                    return < tr key={o.vehicleNumber}>
                                        <td style={{ textAlign: "left" }}>
                                            <img style={{ width: "185px!important" }} src={url} />
                                        </td>
                                        <td>{location}</td>
                                        <td>{subLocation}</td>
                                        <td>
                                            <ActionComp path={"/addEditLocation"} _id={_id} />
                                        </td>
                                    </tr>
                                }) : ""
                        }
                    </tbody>

                </table>
            </div >
            <PaginationComp />
        </>
    );
}
