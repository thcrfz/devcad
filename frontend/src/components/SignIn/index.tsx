import {
  BackgroundContainer,
  MainContainer,
  MainButton
} from '../../styles/globalSyles';
import { Intro, DivButton, Description } from './style';

export type SignInProps = {
  handleSingIn: () => void;
};

export default function SignIn({ handleSingIn }: SignInProps) {
  return (
    <BackgroundContainer>
      <MainContainer>
        <Intro>
          <h2>Bem-vindo ao </h2>
          <Description>
            <ul>
              <li>Cadastre</li>
              <li>Update</li>
              <li>Consulte</li>
              <li>Apague</li>
            </ul>
            <p>Gerencie os seus desenvolvedores com suas competências.</p>
          </Description>

          <DivButton>
            <MainButton onClick={handleSingIn}>SignIn</MainButton>
          </DivButton>
        </Intro>
      </MainContainer>
    </BackgroundContainer>
  );
}
