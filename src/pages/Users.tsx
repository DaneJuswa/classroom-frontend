import React from 'react'
import {ListView} from "@/components/refine-ui/views/list-view.tsx";
import {Breadcrumb} from "@/components/refine-ui/layout/breadcrumb.tsx";

const Users = () => {
    return (
        <ListView>
            <Breadcrumb>
                <div>Users</div>
            </Breadcrumb>

        </ListView>

    )
}
export default Users
