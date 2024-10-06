import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ActionComp, PaginationComp, OrderTableHeader } from "../commonComponent";

export default function DisplayTable() {
    const { partialData } = useSelector((state) => state)
    return (
        <>
            <div style={{ overflow: "scroll", margin: "40px 0px" }}>
                <table>
                    <tbody>
                        <OrderTableHeader />
                        {
                            partialData && partialData.length ?
                                partialData.map((o) => {
                                    const { vehicleNumber, vehicleName, endDate, endTime, startDate, startTime, pickupLocation, location,
                                        paymentStatus, paymentMethod, userName, email, contact, submittedDocument, _id, vehicleImage } = o
                                    return < tr key={o.vehicleNumber}>
                                        <td style={{ textAlign: "left", display: "flex" }}>
                                            <div style={{ textAlign: "left", display: "flex" }}>
                                                <img style={{ width: "100px!important" }} src={vehicleImage} />
                                                <div className="inline-flex flex-col items-start" style={{ marginLeft: "5px" }}>
                                                    <span className="text-small text-inherit">
                                                        {vehicleName}
                                                    </span>
                                                    <span className="text-small text-inherit">
                                                        {vehicleNumber}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div style={{ display: "ruby-text", marginTop: "37px" }}>
                                                {userName}
                                            </div>
                                        </td>
                                        <td>{location}</td>
                                        <td>
                                            <div style={{ display: "ruby-text", marginTop: "37px" }}>
                                                {pickupLocation}
                                            </div>
                                        </td>
                                        <td>
                                            <div style={{ display: "ruby-text", marginTop: "37px" }}>
                                                {startDate}
                                            </div>
                                        </td>
                                        <td>
                                            <div style={{ display: "ruby-text", marginTop: "37px" }}>
                                                {startTime}
                                            </div>
                                        </td>

                                        <td>
                                            <div style={{ display: "ruby-text", marginTop: "37px" }}>
                                                {endDate}
                                            </div>
                                        </td>
                                        <td>
                                            <div style={{ display: "ruby-text", marginTop: "37px" }}>
                                                {endTime}
                                            </div>
                                        </td>
                                        <td>{paymentMethod}</td>
                                        <td>{paymentStatus}</td>
                                        <td>{email}</td>
                                        <td>{contact}</td>
                                        <td>{submittedDocument}</td>
                                        <td>
                                            <ActionComp path={"/addEditOrder"} _id={_id} />
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
