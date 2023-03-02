import { PostLink } from "./styles";

interface PostProps {
    title: string;
    date: string;
    description: string;
}

export function Post({title, description, date}: PostProps){
    return(
        <PostLink>
            <time>{date}</time>
            <h2>{title}</h2>
            <p>{description}</p>
        </PostLink>
    )
}