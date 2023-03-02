import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        margin-left: 5rem;
        display: flex;
        gap: 1.5rem;
        
        a {
            text-decoration: none;
            font-size: 1.2rem;
            color: ${(props) => props.theme.white};
            line-height: 0.8;
            padding-left: 0.2rem;
            border-left: 2px solid transparent;

            &:hover {
                border-left: 2px solid ${(props) => props.theme.green};
            }
        }
    }

    .searchNav {
        display: flex;
    }

    div input, button {
        border: 0;
        height: 3rem;
    }

    div input {
        padding: 0rem 1.5rem;
        border-radius: 8px 0 0 8px;
        background: ${(props) => props.theme["dark-bg"]};

        &::placeholder {
            color: ${(props) => props.theme.white};
        }
    }

    div button {
        border-radius: 0 8px 8px 0;
        background: ${(props) => props.theme["button-bg"]};
        color: ${(props) => props.theme.white};
        padding: 0 1.5rem 0 1.5rem;
        cursor: pointer;
        box-sizing: border-box;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`