import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ActionComp, PaginationComp, VehicleTableHeader } from "../commonComponent";

export default function DisplayTable() {
    const { partialData } = useSelector((state) => state)
    return (
        <>
            <div style={{ overflow: "scroll", margin: "40px 0px" }}>
                <table>
                    <tbody>
                    <VehicleTableHeader />
                        {
                            partialData && partialData.length ?
                                partialData.map((o) => {
                                    const { _id, pickupLocation, location, vehicleNumber, name, url, pricePerday, distanceLimit, accessChargePerKm, transmissionType, brand, bookingCount, BookingEndDateAndTime, BookingStartDateAndTime } = o
                                    return < tr key={o.vehicleNumber}>
                                        <td style={{ textAlign: "left", display: "flex" }}>
                                            <img style={{width: "100px!important"}} src={url} />
                                            <div className="inline-flex flex-col items-start" style={{ marginLeft: "5px" }}>
                                                <span className="text-small text-inherit">
                                                    {name}
                                                </span>
                                                <span className="text-small text-inherit">
                                                    {brand}
                                                </span>
                                            </div>
                                        </td>
                                        <td>{pricePerday}</td>
                                        <td>{distanceLimit}</td>
                                        <td>{accessChargePerKm}</td>
                                        <td>{transmissionType}</td>
                                        <td>{bookingCount}</td>
                                        <td>{vehicleNumber}</td>
                                        <td>{location}</td>
                                        <td>{pickupLocation}</td>
                                        <td>{BookingStartDateAndTime ? BookingStartDateAndTime.startDate : ""}</td>
                                        <td>{BookingStartDateAndTime ? BookingStartDateAndTime.startTime : ""}</td>
                                        <td>{BookingEndDateAndTime ? BookingEndDateAndTime.endDate : ""}</td>
                                        <td>{BookingEndDateAndTime ? BookingEndDateAndTime.endTime : ""}</td>
                                        <td>
                                            <ActionComp path={"/addEditVehicle"} _id={_id} />
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