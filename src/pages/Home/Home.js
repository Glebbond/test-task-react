import React from 'react';
import './styles.scss';
import SearchForm from '../../components/SearchForm/SearchForm';
import ListRepos from '../../components/ListRepos/ListRepos';
import { Container, Divider } from '@material-ui/core';
import GithubLogo from '../../assets/icons/Github/Github';

const Home = () => {
  return (
    <div className="home-page">
      <Container maxWidth="md">
        <h3 className="home-page__header"><GithubLogo className="logo"/> GitHub Search</h3>
        <SearchForm />
        <Divider variant="middle" />
        <ListRepos />
      </Container>
    </div>
  );
}

export default Home;
