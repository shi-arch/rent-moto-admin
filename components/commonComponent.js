import { Input } from "@nextui-org/input";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { useDispatch, useSelector } from "react-redux";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from "react";
import { EditIcon, DeleteIcon } from "./icons";
import Link from "next/link";


export const InputBox = (props) => {
    const { type, placeholder, label, value } = props
    return (
        <>
            <label>{label}</label>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <input value={value} style={{ padding: "10px", border: "1px solid", width: "100%", borderRadius: "5px" }} type={type ? type : "text"} placeholder={placeholder} />
            </div>
        </>
    )
}

export const VehicleTableHeader = () => {
    return (
        <>
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

        </>
    )
}

export const LocationTableHeader = () => {
    return (
        <>
            <tr>
                <th></th>
                <th style={{textAlign: "center"}}>CITY LOCATION</th>
                <th style={{textAlign: "center"}}>SUB LOCATION</th>
                <th style={{textAlign: "center"}}>ACTIONS</th>
            </tr>

        </>
    )
}

export const UserTableHeader = () => {
    return (
        <tr>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>USER TYPE</th>
            <th>EMAIL</th>
            <th>CONTACT</th>
            <th>ACTIONS</th>
        </tr>
    )
}

export const DropDown = (props) => {
    const { locationData } = useSelector((state) => state)
    const { label, location, setPacket, packet } = props
    const [dropData, setDropData] = useState([])
    useEffect(() => {
        if (label !== "Location" && location) {
            debugger
            const find = locationData.find(ele => location == ele.myLocation)
            if (find) {
                debugger
                setDropData(find.subLocation)
            }
        }
    }, [location])
    return (
        <>
            <div className="dropdown">
                <label>{label}</label>
                <button className="dropbtn">{location}</button>
                <div className="dropdown-content">
                    {
                        label == "Location" && locationData && locationData.length ? locationData.map(ele => (
                            <a href="#" key={ele.myLocation} onClick={() => {
                                setPacket({ ...packet, location: ele.myLocation })
                            }}>{ele.myLocation}</a>
                        ))
                            :
                            dropData && dropData.length ? dropData.map(ele => (
                                <a href="#" key={ele.label} onClick={() => {
                                    setPacket({ ...packet, pickupLocation: ele.value })
                                }}>{ele.label}</a>
                            ))
                                : ""
                    }
                </div>
            </div>
        </>
    )
}

export const PaginationComp = () => {
    const dispatch = useDispatch()
    const { totalPages, totalData, currentPage } = useSelector((state) => state)
    useEffect(() => {
        if (totalData && totalData.length) {
            let cloneTotalData = JSON.parse(JSON.stringify(totalData))
            let data = []
            if (currentPage == 1) {
                data = cloneTotalData.slice(0, 10)
            } else {
                data = cloneTotalData.slice(((currentPage - 1) * 10), currentPage * 10)
            }
            dispatch({ type: "PARTIALDATA", payload: data })
        }
    }, [totalData, currentPage])

    useEffect(() => {
        if (totalData && totalData.length) {
            dispatch({ type: "TOTALPAGES", payload: Math.trunc(totalData.length / 10) + 1 })
        }
    }, [totalData])
    return (
        <div className="row" style={{ textAlign: "center" }}>
            <div className="col-md-4">
                <Stack spacing={2}>
                    <Pagination
                        onChange={(e, pgNo) => {
                            dispatch({ type: "CURRENTPAGE", payload: pgNo })

                        }}
                        count={totalPages} variant="outlined" shape="rounded" />
                </Stack>
            </div>
            <div className="col-md-4">
                <p>Total Page Count: {totalPages}</p>
            </div>
            <div className="col-md-4">
                <p>Selected Page: {currentPage}</p>
            </div>
        </div>
    )
}

export const ActionComp = (props) => {
    const { _id, path } = props
    return (
        <div className="relative flex items-center gap-2">
            <Tooltip content="Add or Update">
                <Link href={{
                    pathname: path,
                    query: { _id }
                }}>
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <EditIcon />
                    </span>
                </Link>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
                <Link href={{
                    pathname: '/addEditVehicle',
                    query: { _id }
                }}>
                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                        <DeleteIcon />
                    </span>
                </Link>
            </Tooltip>
        </div>
    )
}

export const SimpleBackdrop = () => {
    const { loading } = useSelector((state) => state)
    return (
        <div>
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}