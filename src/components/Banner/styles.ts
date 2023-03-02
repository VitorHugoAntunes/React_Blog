import styled from "styled-components";

export const ContainerDiv = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 6rem;
    flex: 1;
    .bannerPost {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 37rem;

        h1 {
            font-size: 2.2rem;
            color: ${(props) => props.theme["button-bg"]};
            text-align: left;
            line-height: 1.5;
        }

        p {
            color: ${(props) => props.theme.white};
            font-size: 1.1rem;
        }

        .bannerPostLink {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            a {
                text-decoration: none;
                font-size: 1rem;
                font-weight: bold;
                color: ${(props) => props.theme["button-bg"]};
            }

            svg {
                color: ${(props) => props.theme.green};
            }
        }
    }
`;