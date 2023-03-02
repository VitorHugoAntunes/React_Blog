import styled from "styled-components";

export const PostLink = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        color: ${(props) => props.theme["purple-bg"]};
        cursor: pointer;
    }
`;