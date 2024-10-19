import { Input } from "@nextui-org/input";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { useDispatch, useSelector } from "react-redux";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from "react";
import { EditIcon, DeleteIcon, LocationIcon } from "./icons";
import Link from "next/link";
import _ from 'lodash'
import { Grid } from "@mui/material";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { apiCall } from "../utils/constants";
import { getApi, postApi } from "../pages/api/response";
import { LocationTableIcon, OrderIcon, Test, UserTableIcon } from "../utils/icons";
import swal from 'sweetalert';


export const InputBox = (props) => {
    const dispatch = useDispatch()
    const { type, placeholder, label, value, readOnly } = props
    const { updatePacket, checkError } = useSelector((state) => state)
    return (
        <>
            <label>{label}</label>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <input readOnly={readOnly} onChange={(e) => {
                    let cloneData = _.cloneDeep(updatePacket)
                    const { value } = e.target
                    if (cloneData && cloneData[placeholder]) {
                        cloneData = { ...cloneData, [placeholder]: value }
                    } else {
                        cloneData[placeholder] = value
                    }
                    dispatch({ type: "UPDATEPACKET", payload: cloneData })
                }} value={value} style={{ padding: "10px", border: "1px solid", width: "100%", borderRadius: "5px" }} type={type ? type : "text"} placeholder={placeholder} />
                <span style={{ marginTop: "-25px", color: "red", fontSize: "smaller" }}>{checkError && !updatePacket[placeholder] ? 'Please enter the value' : ""}</span>
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
                <th style={{ textAlign: "center" }}>CITY LOCATION</th>
                <th style={{ textAlign: "center" }}>SUB LOCATION</th>
                <th style={{ textAlign: "center" }}>ACTIONS</th>
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

export const OrderTableHeader = () => {
    return (
        <tr>
            <th>NAME</th>
            <th>USER NAME</th>
            <th>LOCATION</th>
            <th>PICKUP LOCATION</th>
            <th>START DATE</th>
            <th>START TIME</th>
            <th>END DATE</th>
            <th>END TIME</th>
            <th>PAYMENT METHOD</th>
            <th>PAYMENT STATUS</th>
            <th>EMAIL</th>
            <th>CONTACT</th>
            <th>SUBMITTED DOCUMENT</th>
        </tr>
    )
}

export const DropDown = (props) => {
    const dispatch = useDispatch()
    const { locationData, updatePacket } = useSelector((state) => state)
    const { label } = props
    const [subData, setSubData] = useState("")

    useEffect(() => {
        if(locationData && !locationData.length){
            (async () => {
                const res = await getApi('/getLocations')
                debugger
                dispatch({type: "LOCATIONDATA", payload: res.data})
            })()
        }
    }, [locationData])

    useEffect(() => {
        if (locationData && locationData.length) {
            const locationStr = updatePacket?.location ? updatePacket?.location : locationData[0].myLocation
            const pickupLocation = updatePacket.pickupLocation ? updatePacket.pickupLocation : locationData[0].subLocation[0].label
            let location = locationStr ? locationStr : locationData[0].myLocation
            const find = locationData.find(ele => ele.myLocation == location)
            if (find) {
                setSubData(
                    <select onChange={(e) => {
                        const { value } = e.target
                        let cloneData = _.cloneDeep(updatePacket)
                        dispatch({ type: "UPDATEPACKET", payload: { ...cloneData, pickupLocation: value } })
                    }}>
                        {
                            find && find.subLocation.map(ele => (
                                <option selected={ele.value == pickupLocation ? true : false} key={ele.value}>{ele.label}</option>
                            ))
                        }
                    </select>
                )
            }
        }
    }, [updatePacket, locationData])

    return (
        <>
            <div style={{ display: 'grid' }}>
                <label>{label}</label>
                {
                    label == "Location" ?
                        <select onChange={(e) => {
                            const { value } = e.target
                            let cloneData = _.cloneDeep(updatePacket)
                            const find = locationData.find(ele => ele.myLocation == value)
                            dispatch({ type: "UPDATEPACKET", payload: { ...cloneData, location: value, pickupLocation: find.subLocation[0].label } })
                        }}>
                            {
                                locationData && locationData.length ? locationData.map(ele => (
                                    <option selected={ele.myLocation == updatePacket.location ? true : false} key={ele.myLocation}>{ele.myLocation}</option>
                                )) : ""
                            }
                        </select> : subData ? subData : ""
                }

            </div>
        </>
    )
}

export const CardComponent = (props) => {
    const { name } = props
    const { apiData, vehicleCount } = useSelector(state => state)
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (apiData && apiData.length) {
            if (name == "VEHICLES") {
                setCount(vehicleCount)
            } else {
                let str = name == "USERS" ? "userData" : name == "LOCATIONS" ? "locationData" : name == "ORDERS" ? "orderData" : ""
                const find = apiData.find(ele => ele[str])
                if (find) {
                    setCount(find[str].length)
                }
            }
        }
    }, [apiData])
    return (
        <div style={{ padding: "0px 50px" }}>
            <Card style={{ background: "#1e40af", color: "white" }} className="py-4">
                <CardBody className="overflow-visible py-2">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <span>TOTAL {name} : </span><span style={{ marginLeft: "10px" }}>{count}</span>
                    </div>
                    <div style={{ margin: "0 auto" }}>
                        {
                            name == "VEHICLES" ? <Test /> : name == "USERS" ? <UserTableIcon /> : name == "LOCATIONS" ? <LocationTableIcon /> : name == "ORDERS" ? <OrderIcon /> : ""
                        }
                    </div>
                </CardBody>
            </Card>
        </div>

    )
}

export const DropDownData = (props) => {
    const dispatch = useDispatch()
    const { selectedDuration, durationData } = useSelector((state) => state)
    const { label, _id } = props

    return (
        <>
            <div style={{ display: 'grid' }}>
                <label>{label}  (Optional)</label>
                <select style={{ background: "rosybrown" }} onChange={(e) => {
                    const { value } = e.target
                    if (value !== "Please select the duration") {
                        dispatch({ type: "SELECTEDDURATION", payload: value })
                        dispatch({ type: "LOADING", payload: true })
                        postApi('/createBookingDuration', { bookingDuration: { label: value }, bookingId: _id })
                        dispatch({ type: "LOADING", payload: false })
                    }
                }}>
                    <option>Please select the duration</option>
                    {
                        durationData && durationData.length ? durationData.map(ele => (
                            <option selected={ele.bookingDuration.label == selectedDuration ? true : false} key={ele.bookingDuration.label}>{ele.bookingDuration.label}</option>
                        )) : ""
                    }
                </select>

            </div>
        </>
    )
}

export const PaginationComp = () => {
    const dispatch = useDispatch()
    const { totalPages, currentPage, apiData, userData, vehicleData, locationData, orderData, vehicleCount, totalData } = useSelector((state) => state)
    const [totalDatas, setTotalData] = useState([])

    useEffect(() => {
        if (totalData.length) {
            setTotalData(totalData)
        }
    }, [totalData])    

    useEffect(() => {
        if (apiData && apiData.length) {
            let pathName = window.location.pathname
            const data = pathName.includes("location") ? locationData : pathName.includes("user") ? userData : pathName.includes("order") ? orderData : vehicleData
            dispatch({type: "TOTALDATA", payload: data})
        }
    }, [apiData])

    useEffect(() => {
        if (totalDatas.length) {
            let cloneTotalData = JSON.parse(JSON.stringify(totalDatas))
            let data = []
            if (currentPage == 1) {
                data = cloneTotalData.slice(0, 10)
            } else {
                data = cloneTotalData.slice(((currentPage - 1) * 10), currentPage * 10)
            }
            dispatch({ type: "PARTIALDATA", payload: data })
        }
    }, [totalDatas, currentPage])

    useEffect(() => {
        if (totalDatas && totalDatas.length) {
            dispatch({ type: "TOTALPAGES", payload: Math.trunc(totalData.length / 10) + 1 })
        }
    }, [totalDatas])
    return (
        <div className="row" style={{ textAlign: "center" }}>
            <div className="col-md-4">
                <Stack spacing={2}>
                    <Pagination
                        onChange={async (e, pgNo) => {
                            dispatch({ type: "CURRENTPAGE", payload: pgNo })
                            if (window.location.pathname == "/") {
                                const vehicleRes = await postApi('/getAllVehicles', { limit: 10, page: pgNo })
                                let cloneApiData = JSON.parse(JSON.stringify(apiData))
                                cloneApiData.splice(cloneApiData.findIndex(ele => ele.vehicleData), 1)
                                let apiCompiledData = cloneApiData.concat({ "vehicleData": vehicleRes.data })
                                dispatch({ type: "APIDATA", payload: apiCompiledData })
                            }
                        }}
                        count={vehicleCount && window.location.pathname == "/" ? Math.trunc(vehicleCount / 10) + 1 : totalPages} variant="outlined" shape="rounded" />
                </Stack>
            </div>
            <div className="col-md-4">
                <p>Total Page Count: {vehicleCount && window.location.pathname == "/" ? Math.trunc(vehicleCount / 10) + 1 : totalPages}</p>
            </div>
            <div className="col-md-4">
                <p>Selected Page: {currentPage}</p>
            </div>
        </div>
    )
}

export const ActionComp = (props) => {
    const { _id, path, orId, strToDelete } = props
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
                <div onClick={async () => {
                    const willDelete = await swal({
                        title: "Are you sure?",
                        text: "Are you sure that you want to delete this file?",
                        icon: "warning",
                        dangerMode: true,
                    });
                    if (willDelete) {
                        const res = await postApi('/deleteData', {
                            _id: orId ? orId : _id, type: path.includes("User") ? 'user' : path.includes("Vehicle") ? 'vehicle' : path.includes("Location") ? 'location' : "order", strToDelete
                        })
                        if (res && res.status == "201") {
                            swal("Deleted!", "Your imaginary file has been deleted!", "success").then(res => {
                               window.location.reload()
                            })                            
                        } else {
                            swal("Sorry!", "Your imaginary file has been deleted!", "success");
                        }                       
                    }
                }}>
                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                        <DeleteIcon />
                    </span>
                </div>
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