import styled from 'styled-components'
import facebook from  './assets/facebook.png'
import google from './assets/google.png'
import instagram from './assets/instagram.png'
import whatsapp from './assets/whatsapp.png'


const RodapeEstilizado = styled.footer`
height: 100%;
color: white;
padding: 1em;
background-color: var(--azul-escuro);
text-align: center;
`
const ListaEstilizada = styled.ul`
display: flex;
justify-content: space-around;
width: 10%;
margin: 1em auto;
`

const ItemEstilizado = styled.li`
list-style-type: none;
`


function Rodape(){
    return (
      <RodapeEstilizado>
        <ListaEstilizada>
          <ItemEstilizado>
            <a href="#">
              <img src={facebook} alt="Logo do facebook" />
            </a>
          </ItemEstilizado>

          <ItemEstilizado>
            <a href="#">
              <img src={google} alt="Logo do google" />
            </a>
          </ItemEstilizado>

          <ItemEstilizado>
            <a href="#">
              <img src={instagram} alt="Logo do instagram" />
            </a>
          </ItemEstilizado>

          <ItemEstilizado>
            <a href="#">
              <img src={whatsapp} alt="Logo do whatsapp" />
            </a>
          </ItemEstilizado>
        </ListaEstilizada>
        <p>Projeto fictício para fins comerciais</p>
      </RodapeEstilizado>
    );
}

export default Rodape;