import styled from "styled-components"


export const SignupStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100vh;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 50%;
    }
`

export const SignupForm = styled.form`
    width: 100%;
    padding: 30px;

    > div {
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: 7px;
        }

        input, button {
            padding: 3px 7px;
        }
    }

    > div:not(:last-child) {
        margin-bottom: 15px;
    }
`