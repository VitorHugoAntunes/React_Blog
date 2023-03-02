import { HeaderContainer } from "./styles";
import logo from '../../assets/logo.svg';
import {FiSearch} from 'react-icons/fi';

export function Header(){
    return(
        <HeaderContainer>
          <img src={logo} alt="The Blog" />
          <nav>
            <a href="#">Home</a>
            <a href="#">Sobre</a>
            <a href="#">Categorias</a>
            <a href="#">Contato</a>
          </nav>
          <div className="searchNav">
            <input type="text" placeholder='Buscar'/>
            <button>
              <FiSearch size={24} />
            </button>
          </div>
        </HeaderContainer>
    )
}