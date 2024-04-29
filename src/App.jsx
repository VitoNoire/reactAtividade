import  './Styles.css'
import Tabela from './components/Tabela'

function App() {
  const produtos = [
    {
        id: 1,
        nome: 'Picanha',
        preco: 'R$ 199,99',
        estoque: 2
    },
    {
        id: 2,
        nome: 'Costela',
        preco: 'R$ 39,99',
        estoque: 12
    },
    {
        id: 3,
        nome: 'Fraldinha',
        preco: 'R$ 59,99',
        estoque: 4
    },
    {
        id: 4,
        nome: 'Contra-Filé',
        preco: 'R$ 19,99',
        estoque: 2
    },
    {
        id: 5,
        nome: 'Acém',
        preco: 'R$ 17,99',
        estoque: 21
    },
    {
        id: 6,
        nome: 'Cúpim',
        preco: 'R$ 49,99',
        estoque: 2
    }
// Os itens da tabela
];
  return (
<>

  <Tabela produtos={produtos} />
    </>
  )
}

export default App
