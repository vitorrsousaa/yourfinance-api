import Arrow from '../../assets/icons/arrow.svg';
import { Container, Content, Summary } from './styles';
import { useAuthContext } from '../../context/AuthContext';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { useState } from 'react';
import { PaginationItem } from '../Transactions/styles';

const itemsPerPage = 5;
const totalItems = 50;
const siblingsCounts = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

const Home = () => {
  const { user } = useAuthContext();
  const [page, setPage] = useState(1);

  const lastPage = Math.ceil(totalItems / itemsPerPage);

  const nextPages = page < lastPage ? generatePagesArray(page, lastPage) : [];

  const previousPages = page > 1 ? generatePagesArray(0, page - 1) : [];

  console.log('next', nextPages);
  console.log('previous', previousPages);

  function handlePageChange(page: number) {
    setPage(page);
  }

  return (
    <Container>
      <Sidebar />

      <Content>
        <Header />

        <div>
          {/* {previousPages.length > 0 &&
            previousPages.map((page) => (
              <PaginationItem
                isNotSelected
                key={page}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PaginationItem>
            ))} */}
          {page - siblingsCounts > 1 && <small>...</small>}

          <PaginationItem
            isNotSelected={false}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </PaginationItem>

          {page + siblingsCounts < lastPage && (
            <>
              <PaginationItem
                isNotSelected
                onClick={() => handlePageChange(page + siblingsCounts)}
              >
                {page + siblingsCounts}
              </PaginationItem>
              <small>....</small>
            </>
          )}

          {page < lastPage && (
            <PaginationItem
              isNotSelected
              onClick={() => handlePageChange(lastPage)}
            >
              {lastPage}
            </PaginationItem>
          )}

          {/* {nextPages.length > 0 &&
            nextPages.map((page) => (
              <PaginationItem
                isNotSelected
                key={page}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PaginationItem>
            ))} */}
        </div>

        <main>
          <div>
            <h1>Página inicial</h1>
            <h2>{user.name}</h2>
            <small>Acompanhe todas as suas finanças</small>
          </div>
          <small>X</small>
        </main>

        <Summary>
          <h1>Resumo da sua vida financeira</h1>
          <div className="containerSummary">
            <div>
              <h3>Minhas receitas</h3>
              <strong>R$12.253,70</strong>
            </div>
            <div>
              <h3>Minhas despesas</h3>
              <strong>R$12.253,70</strong>
            </div>
            <div>
              <h3>Meus cartões</h3>
              <strong>R$12.253,70</strong>
            </div>
          </div>
        </Summary>

        <div className="containerSections">
          <section>
            <header>
              <h1>Últimas transações</h1>
              <button>
                <small>Ver todas</small>
                <img src={Arrow} alt="Arrow" />
              </button>
            </header>
          </section>

          <section>
            <header>
              <h1>Meus cartões</h1>
              <button>
                <small>Ver todas</small>
                <img src={Arrow} alt="Arrow" />
              </button>
            </header>
          </section>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
