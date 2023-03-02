import styled from "styled-components";

export const InitialContainer = styled.main`
    width: 100%;
    height: 37rem;
    background: ${(props) => props.theme["purple-bg"]};
    border-bottom: 6px solid ${(props) => props.theme.green};
    display: flex;
    flex-direction: column;
    padding: 4rem 8rem 3rem 8rem;
    gap: 4rem;
`