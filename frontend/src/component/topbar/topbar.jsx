import React from 'react';
import { useNavigate, Navigate } from "react-router-dom";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./navbar";
import {logout,isLoggedIn}from "../../services/authService"

export default function Topbar(){
    const navigate = useNavigate();
    const handel_logout =(event)=>{
        event.preventDefault();
        logout()
        navigate("/")
    }
    return (
        <>
           <Nav>
            <NavLogo activeStyle={{ color: 'black' }} to="/">
               Quest
            </NavLogo>
            <Bars />

            <NavMenu>

            {!isLoggedIn()&& (<NavBtn>
                    <NavBtnLink to="/auth">Log In</NavBtnLink>                
                </NavBtn>)}
                {isLoggedIn()&& (<NavBtn>
                    <NavBtnLink to="/Profile">Profile</NavBtnLink>                
                </NavBtn>)}
                {isLoggedIn()&& (<NavLink onClick={handel_logout}
                  to="/" 
                  activeStyle={{ color: 'black' }}
                >
                    Log Out
                </NavLink>)}
            </NavMenu> 
           </Nav> 
        </>
    );
    }
