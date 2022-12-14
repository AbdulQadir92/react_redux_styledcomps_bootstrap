import styled from "styled-components"


export const NavbarStyled = styled.nav`
    position: fixed;
    top: 0;

    display: flex;
    align-items: center;

    padding: 0 5%;
    background-color: darkgray;
    width: 100%;
    height: 70px;

    ul {
        display: flex;
        justify-content: center;
        align-items: center;

        list-style-type: none;

        li {
            margin-right: 15px;

            a {
                text-decoration: none;
                color: ${({ theme }) => theme.colors.darkText};
            }
        }
    }
`

export const IconContainer = styled.div`
    position: absolute;
    right: 20px;
    
    cursor: pointer;
`