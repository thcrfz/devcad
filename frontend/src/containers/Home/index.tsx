import { Navbar } from '../../components/navbar/styles';
import { signOut } from 'next-auth/client';
import { SignOutButton } from '../../components/SingOutButton';
import * as styled from './styled';
import { MainContainer } from '../../styles/globalSyles';
import { Form } from '../../components/form';
import React from 'react';

export default function Home() {
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [age, setAge] = React.useState<string>('');
  const [url, setUrl] = React.useState<string>('');
  const [tech, setTech] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault;
    console.log(name);
    console.log(email);
    console.log(age);
    console.log(url);
    console.log(tech);
  };

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
        <h5 id="oi">Cadastrar desenvolvedor</h5>
        <Form onSubmit={handleSubmit}>
          <styled.formControl>
            <label>Nome:</label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Ex: john"
            />
          </styled.formControl>
          <styled.formControl>
            <label>Email:</label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Ex: example@example.coom"
            />
          </styled.formControl>
          <styled.formControl>
            <label>Idade:</label>
            <input
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
              placeholder="18"
            />
          </styled.formControl>
          <styled.formControl>
            <label>Linkedin:</label>
            <input
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              type="url"
              placeholder="www.linkedin.com/seunome"
            />
          </styled.formControl>
          <styled.formControl>
            <label>Tecnologia:</label>
            <input
              id="technology"
              value={tech}
              onChange={(e) => setTech(e.target.value)}
              type="text"
              placeholder="c++, c#, javascript, nodeJS, NextJS"
            />
          </styled.formControl>
          <styled.button>Cadastrar</styled.button>
        </Form>
      </MainContainer>
      <MainContainer>
        <h3 id="ola">Desenvolvedores</h3>
      </MainContainer>
    </>
  );
}
