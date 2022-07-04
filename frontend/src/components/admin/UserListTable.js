import { DataGrid } from '@mui/x-data-grid'
import moment from 'moment'
import React from 'react'
import { CustomToolbar, CustomPagination } from "../CustomFunction";

const UserListTable = ({users}) => {


    const columns = [
        { field: 'id', headerName: 'SN', width: 65 },
        { field: 'fullname', headerName: 'FullName', width: 250 },
        {
            field: 'username', headerName: 'UserName', type: 'string', width: 250,
        },
        {
            field: "avatar",
            headerName: 'Avatar',
            width: 120,
            sortable: false,
            filter: false,
            renderCell: ({ value }) => {
                return <img src={value ? value : ""} alt="avatar" style={{ width: '80px', height: "80px", backgroundColor: "white", borderRadius: "50%" }} />
            }
        },
        {
            field: 'email', headerName: 'Email', type: 'string', width: 300,
        },
        {
            field: 'address', headerName: 'Address', type: 'string', width: 180, align: 'center',
        },
        {
            field: 'phone', headerName: 'Phone', type: 'string', width: 120, align: 'center',
        },

        { field: 'registerdAt', headerName: 'Registered At', width: 220, align: 'center' },
        {
            field: 'role', headerName: 'Role', width: 80
        },


    ]

   

export default UserListTable