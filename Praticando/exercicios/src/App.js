import './App.css';
import Home from './Components/Home';
import Produtos from './Components/Produtos';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];
const { pathname } = window.location;

function App() {
  return (
    <section>
      <header>
        <nav>
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="Produtos">Produtos</a>
          </li>
        </nav>
      </header>

      {pathname === '/Home' ? <Home /> : <Produtos produtos={produtos} />}
    </section>
  );
}

export default App;
