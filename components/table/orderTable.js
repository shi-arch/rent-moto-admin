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
                                            <img style={{width: "100px!important"}} src={vehicleImage} />
                                            <div className="inline-flex flex-col items-start" style={{ marginLeft: "5px" }}>
                                                <span className="text-small text-inherit">
                                                    {vehicleName}
                                                </span>
                                                <span className="text-small text-inherit">
                                                    {vehicleNumber}
                                                </span>
                                            </div>
                                        </td>
                                        <td>{userName}</td>
                                        <td>{location}</td>
                                        <td>{pickupLocation}</td>
                                        <td>{startDate}</td>
                                        <td>{startTime}</td>
                                        <td>{endDate}</td>
                                        <td>{endTime}</td>
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
