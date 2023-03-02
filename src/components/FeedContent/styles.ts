import styled from "styled-components";

export const MainContent = styled.main`
    padding: 4rem 8rem;
    background: ${(props) => props.theme["light-purple"]};
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .primaryPosts {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6rem;

        .firstPost p {
            max-width: 36rem;
        }

        .otherPosts div + div {
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid #F2E7FA;
        }
    }

    .secondaryPosts {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        & > div {
            display: flex;
            gap: 1.5rem;
        }
    
        img {
            width: 27rem;
        }
    }
`;