import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    color: ${props => props.theme.secondary};
    font-family: ${props => props.theme.defaultFonts}
`

const Error404Page = () => {
    return (
        <StyledDiv>
            Error 404 Page not Found
        </StyledDiv>
    )
}

export default Error404Page
