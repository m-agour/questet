import React from 'react';

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
    const handel_logout =()=>{
        logout()

    }
    return (
        <>
           <Nav>
            <NavLogo to="/">
               Quest
            </NavLogo>
            <Bars />

            <NavMenu>

            {!isLoggedIn()&& (<NavBtn>
                    <NavBtnLink to="/auth">Log In</NavBtnLink>                
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
