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
export default function Topbar(){






    return (
        <>
           <Nav>
            <NavLogo to="/">
               Quest
            </NavLogo>
            <Bars />

            <NavMenu>

                <NavBtn>
                    <NavBtnLink to="/auth">Log In</NavBtnLink>                
                </NavBtn>
                <NavLink 
                  to="#" 
                  activeStyle={{ color: 'black' }}
                >
                    Log Out
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
    }
