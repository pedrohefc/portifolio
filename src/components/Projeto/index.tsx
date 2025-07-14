import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, Botao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJs</Paragrafo>
    <Botao>Vizualizar</Botao>
  </Card>
)

export default Projeto
