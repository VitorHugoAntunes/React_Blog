import { ContainerDiv } from "./styles";
import featuredImage from '../../assets/featured-image.png'
import {FiArrowRight} from 'react-icons/fi';

export function Banner(){
    return(
        <ContainerDiv>
            <div className="bannerPost">
              <h1>Veja o guia definitivo para conquistar seus objetivos como DEV em 2023</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum vitae rerum iure facere expedita ab autem magni porro, fuga cumque sapiente cum quo temporibus.</p>
              <div className="bannerPostLink">
                <a href="">Veja mais</a>
                <FiArrowRight size={20} />
              </div>
            </div>
            <img src={featuredImage} alt="" className="bannerImage" />
        </ContainerDiv>
    )
}