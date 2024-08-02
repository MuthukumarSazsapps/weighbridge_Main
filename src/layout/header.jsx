import React, { useState } from 'react'
import { Popover, Tooltip } from 'antd';
import { RiAccountPinCircleFill } from 'react-icons/ri';


import { HiMiniXMark } from "react-icons/hi2";
import Settings from '../pages/auth/logout/settings';
{/* <HiMiniXMark /> */}
const MainHeader = () => {
    const [open, setOpen] = useState(false);
    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Popover
                    content={<div onClick={hide}>
                        <Settings/>
                    </div>}
                    title="Settings"
                    trigger="click"
                    open={open}
                    onOpenChange={handleOpenChange}
                >
                    <Tooltip title="Account">
                        <RiAccountPinCircleFill style={{ fontSize: '34px', color: "grey", margin: '10px 15px 0 0' }} />
                    </Tooltip>
                </Popover>
            </div>
        </>
    )
}

export default MainHeader