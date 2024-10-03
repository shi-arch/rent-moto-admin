import React from "react";
import { useSelector } from "react-redux";
import { ActionComp, PaginationComp, UserTableHeader } from "../commonComponent";
import Profile from '../../utils/images/Profile.png'
import Image from 'next/image';


export default function DisplayTable() {
    const { partialData } = useSelector((state) => state)

    return (
        <>
            <div style={{ overflow: "scroll", marginTop: "40px" }}>
                <table>
                    <tbody>
                        <UserTableHeader />
                        {
                            partialData.length ?
                                partialData.map((o) => {
                                    const { userType, firstName, lastName, contact, email, _id } = o
                                    return < tr key={o.vehicleNumber}>
                                        <td style={{ textAlign: "left", display: "flex" }}>
                                            <Image src={Profile} />
                                            <div className="inline-flex flex-col items-start" style={{ marginLeft: "5px" }}>
                                                <span className="text-small text-inherit">
                                                    {firstName}
                                                </span>
                                                <span className="text-small text-inherit">
                                                    {email}
                                                </span>
                                            </div>
                                        </td>
                                        <td>{lastName}</td>
                                        <td>{userType}</td>
                                        <td>{email}</td>
                                        <td>{contact}</td>
                                        <td>
                                            <ActionComp path={"/addEditUser"} _id={_id} />
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
