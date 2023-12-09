import { Rating } from "@mui/material";
import IProfissional from "../../../types/IProfissional";
import styled from "styled-components";

const ContainerEstilizado = styled.div`
  flex: 40%;
  max-width: 100%;
  background-color: #fff;
  padding: 1em;
  box-shadow: 2px 2px 8px rgb(0, 0, 0, 0.15);
  border-radius: 8px;
  color: var(--cinza);
  margin: 1em 2em 1em;
`;

const CardEstilizado = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoCard = styled.li`
display: flex;
  list-style-type: none;
  justify-content: center;
`;

const InfoCardImg = styled.li`
  display: flex;
  list-style-type: none;
`;

const InfoCardName = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  justify-content: center;
  height: 10px;
`;

const ItemInformacoesEstilizado = styled(InfoCard)`
  flex-grow: 1;
`;

const ImageCard = styled.img`
  border-radius: 100%;
  width: 64px;
  object-fit: cover;
  height: 64px;
  border: 2px solid var(--azul-claro);
  margin-right: 1em;
`;

const NomeCliente = styled.p`
    font-weight: bold;
`
const ParagrafoEstilizado = styled.p`
  margin: 0.5em 0;
  font-size: 14px;
`;


function Card({ profissional }: { profissional: IProfissional }) {
  return (
    <ContainerEstilizado>
      <CardEstilizado>
        <InfoCardImg>
          <ImageCard
            src={profissional.imagem}
            alt={`Foto de perfil do profissional ${profissional.nome}`}
          />
        </InfoCardImg>
        <InfoCardName>
          <NomeCliente>{profissional.nome}</NomeCliente>
          <ParagrafoEstilizado>
            {profissional.especialidade}
          </ParagrafoEstilizado>
        </InfoCardName>
        <ItemInformacoesEstilizado>
          <Rating
            name="simple-controlled"
            value={profissional.nota}
            readOnly={true}
          />
        </ItemInformacoesEstilizado>
      </CardEstilizado>
    </ContainerEstilizado>
  );
}

export default Card;
