import React, { useState } from "react";
import AboutButton from "./AboutButton";
import ImpressumButton from "./ImpressumButton";

function SidebarFooterContent() {

    /* This will render: aboutButton, impressumButton */

    return (
        <div>
            <div className="sidebarFooter">
                <ul>
                    <li>
                        <AboutButton />
                    </li>
                    <li>
                        <ImpressumButton />
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default SidebarFooterContent;