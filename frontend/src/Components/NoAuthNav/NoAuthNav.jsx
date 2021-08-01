import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import {NavContainer, NavLink, Spacer} from 'Components/Shared'

const NoAuthNav = () => {
    return (
        <NavContainer>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <Spacer />
            <NavLink to="/sign-in">Sign In</NavLink>
            <NavLink to="/sign-up">Sign Up</NavLink>
        </NavContainer>
    )
}

export default NoAuthNav
