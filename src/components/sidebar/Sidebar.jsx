import React, { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";

function Sidebar() {

    /* This will render: homeButton, sidebarFooter */ 

    return (
        <div>
            <div className="sidebar">
                <SidebarHeader />
                <SidebarFooter />
            </div>
        </div>
    );

}
export default Sidebar;
