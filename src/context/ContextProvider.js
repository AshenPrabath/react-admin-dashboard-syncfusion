import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [adddialogVisible, setAddDialogVisible] = useState(false);
    const [orderInfodialogVisible, setOrderInfoDialogVisible] = useState(false);
    const [customerInfoDialogVisible, setCustomerInfoDialogVisible] = useState(false);
    const [trackingInfoDialogVisible, setTrackingInfoDialogVisible] = useState(false);
    

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        console.log(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    }
    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false);

    }

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true });
    }
    const handleClose = () => {
        setIsClicked({ ...initialState});
    }
    return (
        <StateContext.Provider
            value={{
                activeMenu,setActiveMenu,
                isClicked,setIsClicked,
                handleClick,handleClose,
                screenSize,setScreenSize,
                currentColor,
                currentMode,themeSettings, 
                setThemeSettings,
                setMode,setColor,
                dialogVisible, setDialogVisible,
                adddialogVisible, setAddDialogVisible,
                orderInfodialogVisible, setOrderInfoDialogVisible,
                customerInfoDialogVisible, setCustomerInfoDialogVisible,
                trackingInfoDialogVisible, setTrackingInfoDialogVisible
                

            }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);