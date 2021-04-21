import { Navbar } from '../../components/navbar/styles';
import { signOut } from 'next-auth/client';
import { SignOutButton } from '../../components/SingOutButton';
import * as styled from './styled';
import { MainContainer } from '../../styles/globalSyles';

export default function Home() {
  return (
    <>
      <Navbar>
        <h2>devcad</h2>
        <styled.div>
          <ul>
            <li>
              <a href="#oi">Cadastrar</a>
            </li>
            <li>
              <a href="#ola">Desenvolvedores</a>
            </li>
          </ul>
          <SignOutButton onClick={() => signOut()} />
        </styled.div>
      </Navbar>
      <styled.descriptionSection>
        <div>
          <h1>Bem-vindo ao DEVCAD</h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            quia officiis, amet non esse omnis, aperiam qui inventore doloribus
            unde dicta labore ipsam ullam impedit? Vel corrupti soluta
            veritatis! Facere!
          </p>
        </div>
      </styled.descriptionSection>
      <MainContainer>
        <h3 id="oi">Cadastrar desenvolvedor</h3>
        <form>
          <div>
            <label>Nome:</label>
            <input type="text" placeholder="Ex: john" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" placeholder="Ex: example@example.coom" />
          </div>
          <div>
            <label>Idade:</label>
            <input type="number" placeholder="18" />
          </div>
          <div>
            <label>Linkedin:</label>
            <input type="url" placeholder="www.linkedin.com/seunome" />
          </div>
          <div>
            <label>Tecnologia:</label>
            <input
              type="text"
              placeholder="c++, c#, javascript, nodeJS, NextJS"
            />
          </div>
          <button>Cadastrar</button>
        </form>
      </MainContainer>
      <MainContainer>
        <h3 id="ola">Desenvolvedores</h3>
      </MainContainer>
    </>
  );
}
