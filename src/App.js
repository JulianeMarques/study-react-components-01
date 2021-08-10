import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";

function App() {
  const { pathname } = window.location;
  
  let Pagina = Home; 
  if(pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  );
};

export default App;
