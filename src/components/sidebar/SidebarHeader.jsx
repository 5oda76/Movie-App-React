import React, { useState } from "react";
import HomeButton from "./HomeButton";

function SidebarHeader() {

    /* This will render: aboutButton, impressumButton */

    return (
        <div className="sidebarHeader">
            <HomeButton />
        </div>
    );
}
export default SidebarHeader;