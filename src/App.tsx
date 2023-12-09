import "./App.css";
import Avaliacao from "./components/Avaliacao";
import Botao from "./components/Botao";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import Grafico from "./components/Grafico";
import Rodape from "./components/Rodape";
import Subtitulo from "./components/Subtitulo";
import Tabela from "./components/Tabela";
import Titulo from "./components/Titulo";
import useDadosConsulta from "./useDadosConsulta";
import useDadosProfissional from "./useDadosProfissionais";

function App() {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional();

  if(consultasErro || profissionaisErro){
    console.log("Ocorreu um erro na requisição")
  }

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área administrativa</Titulo>
        <Botao>Cadastrar especialista</Botao>
        <Tabela consultas={consultas} />
        <Titulo>Consultas mensais por especialista</Titulo>
        <Subtitulo>Dezembro/23</Subtitulo>
        <Grafico consultas={consultas} profissionais={profissionais} />
        <Botao>Ver Mais</Botao>
        <Titulo>Avaliações de especialista</Titulo>
        <Subtitulo>Dezembro/23</Subtitulo>
        <Avaliacao profissionais={profissionais} />
        <Botao>Ver Mais</Botao>
      </Container>
      <Rodape />
    </>
  );
}

export default App;
