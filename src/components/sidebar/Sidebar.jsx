import React, { useState } from "react";
import HomeButton from "./HomeButton";
import SidebarFooter from "./SidebarFooter";

function Sidebar() {

    /* This will render: homeButton, sidebarFooter */ 

    return (
        <div>
            <div className="sidebar">
                <div className="homeButton">
                    <HomeButton />
                </div>
                <div className="sidebarFooter">
                    <SidebarFooter />
                </div>
            </div>
        </div>
    );

}
export default Sidebar;
