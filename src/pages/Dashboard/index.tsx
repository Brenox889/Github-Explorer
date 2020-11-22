import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logo from '../../assets/logoGit.svg';
import Repository from '../Repository';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositorios no Github</Title>

      <Form>
        <input placeholder="Digite aqui" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/61329950?s=460&u=b1d454fdc4c0abdaaf9569866607b14a6a7e6677&v=4"
            alt="Breno Mendes"
          />
          <div>
            <strong>GoBarber</strong>
            <p>Lorem Ipsum é nois</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
