import { Banner } from "../Banner";
import { Header } from "../Header";

import {InitialContainer} from './styles';

export function InitialSection(){
    return (
        <InitialContainer>
            <Header />
            <Banner />
        </InitialContainer>
    )
}