import React, { useState } from "react";
import AboutButton from "./AboutButton";
import ImpressumButton from "./ImpressumButton";

function SidebarFooter() {

    /* This will render: aboutButton, impressumButton */

    return (
        <div>
            <div className="sidebarFooter">
                <ul>
                    <li className="footerElement">
                        <AboutButton />
                    </li>
                    <li className="footerElement">
                        <ImpressumButton />
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default SidebarFooter;