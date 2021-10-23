import React from 'react'
import { Nav } from './NavbarElements'
import { NavbarContainer } from './NavbarElements'
import { NavLogo } from './NavbarElements'
import { MobileIcon } from './NavbarElements'
import { NavMenu } from './NavbarElements'
import { NavItem,NavLinks,NavBtn,NavBtnLink } from './NavbarElements'
import {FaBars} from 'react-icons/fa'


const Navbar = ({toggle}) => {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        Dolla
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="sign-up">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>

                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
