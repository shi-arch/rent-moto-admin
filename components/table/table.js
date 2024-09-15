import React, { useEffect, useReducer } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/table";
import { Chip } from "@nextui-org/chip";
import { User } from "@nextui-org/user";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { EyeIcon, EditIcon, DeleteIcon } from "../icons";
import { Pagination, PaginationItem, PaginationCursor } from "@nextui-org/pagination";
import { columns, users } from "./data";
import { useSelector } from "react-redux";

const statusColorMap = {
    active: "success",
    paused: "danger",
    vacation: "warning",
};

export default function DisplayTable() {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [customVehicleData, setCustomVehicleData] = React.useState([]);
    const [totalPages, setTotalPages] = React.useState(0);
    const { totalVehicleData } = useSelector((state) => state)
    useEffect(() => {
        let cloneTotalVehicleData = JSON.parse(JSON.stringify(totalVehicleData))
        if (currentPage == 1) {
            let aa = cloneTotalVehicleData.splice(0, 10)
            setCustomVehicleData(aa)
        } else {
            //let bb = cloneTotalVehicleData.splice(0,10)            
            let rec1 = cloneTotalVehicleData.splice(((currentPage-1) * 10) + 1, currentPage * 10)
            setCustomVehicleData(rec1)
        }
    }, [currentPage])

    useEffect(() => {
        if(!totalPages){
            setTotalPages((totalVehicleData.length/10).toFixed())
        } 
    }, [totalVehicleData])

    return (
        <>
            <div style={{ overflow: "scroll", marginTop: "40px" }}>
                <table>
                    <tbody>
                        <tr>
                            <th>NAME</th>
                            <th>PRICE/DAY</th>
                            <th>DISTANCE LIMIT</th>
                            <th>ACCESS CHARGE/KM</th>
                            <th>TRANSMISSION TYPE</th>
                            <th>BOOKING COUNT</th>
                            <th>BOOKING AMOUNT</th>
                            <th>VEHICLE NUMBER</th>
                            <th>CITY LOCATION</th>
                            <th>PICKUP LOCATION</th>
                            <th>BOOKING START DATE</th>
                            <th>BOOKING START TIME</th>
                            <th>BOOKING END DATE</th>
                            <th>BOOKING END TIME</th>
                            <th>ACTIONS</th>
                        </tr>
                        {
                            customVehicleData.length ?
                                customVehicleData.map((o) => {
                                    const { pickupLocation, location, vehicleNumber, name, url, pricePerday, distanceLimit, accessChargePerKm, transmissionType, brand, bookingCount, BookingEndDateAndTime, BookingStartDateAndTime, bookingAmount } = o
                                    return < tr key={o.vehicleNumber}>
                                        <td style={{ textAlign: "left" }}>
                                            <User
                                                name={name}
                                                description={brand}
                                                avatarProps={{
                                                    size: "sm",
                                                    src: url
                                                }}
                                            />
                                        </td>
                                        <td>{pricePerday}</td>
                                        <td>{distanceLimit}</td>
                                        <td>{accessChargePerKm}</td>
                                        <td>{transmissionType}</td>
                                        <td>{bookingCount}</td>
                                        <td>{bookingAmount}</td>
                                        <td>{vehicleNumber}</td>
                                        <td>{location}</td>
                                        <td>{pickupLocation}</td>
                                        <td>{BookingStartDateAndTime ? BookingStartDateAndTime.startDate : ""}</td>
                                        <td>{BookingStartDateAndTime ? BookingStartDateAndTime.startTime : ""}</td>
                                        <td>{BookingEndDateAndTime ? BookingEndDateAndTime.endDate : ""}</td>
                                        <td>{BookingEndDateAndTime ? BookingEndDateAndTime.endTime : ""}</td>
                                        <td>
                                            <div className="relative flex items-center gap-2">
                                                <Tooltip content="Details">
                                                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                                        <EyeIcon />
                                                    </span>
                                                </Tooltip>
                                                <Tooltip content="Edit user">
                                                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                                        <EditIcon />
                                                    </span>
                                                </Tooltip>
                                                <Tooltip color="danger" content="Delete user">
                                                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                                        <DeleteIcon />
                                                    </span>
                                                </Tooltip>
                                            </div>
                                        </td>
                                    </tr>
                                }) : ""
                        }
                    </tbody>

                </table>
            </div >
            <div className="flex flex-col gap-5">
                <p className="text-small text-default-500">Selected Page: {currentPage}</p>
                <p className="text-small text-default-500">Total Page Count: {totalPages}</p>
                <div style={{ background: "black", color: "white", padding: "5px", borderRadius: "10px" }}>
                    <Pagination
                        size="lg"
                        total={totalPages}
                        color="secondary"
                        page={currentPage}
                        onChange={setCurrentPage}
                    />
                </div>
                <div className="flex gap-2">
                    <Button
                        style={{ background: "black", color: "white", padding: "10px", borderRadius: "5px" }}
                        size="sm"
                        variant="flat"
                        color="red"
                        onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
                    >
                        Previous
                    </Button>
                    <Button
                        style={{ background: "black", color: "white", padding: "10px", borderRadius: "5px" }}
                        size="sm"
                        variant="flat"
                        color="secondary"
                        onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </>
    );
}
