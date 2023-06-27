import { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import Avatar from 'react-avatar-editor';
import AvatarEditor from 'react-avatar-editor';
import { api } from 'lib/axios';
import { useQuery } from 'react-query';

const CardHeroPatchNotes = () => {
  const [skill, setSkill] = useState('');
  // const cropRef = useRef(null);
  // const [slideValue, setSlideValue] = useState(10);
  // const fetchSkills = async () => {
  //   const response = await ;
  //   // setSkill(response.data);
  // };
  const { data, error, isLoading } = useQuery(
    'skills',
    async () => await api.get('skill.php')
  );

  const result = data?.data?.data;

  return (
    <S.Wrapper>
      <S.Avatars>
        <S.AvatarImag
          src="https://media.discordapp.net/attachments/1113255817374863360/1122897557547405312/images_-_2023-06-26T104402.279.jpg"
          alt=""
        />
        <div>
          <S.Tittle>Amari</S.Tittle>
          <S.Text>Fumacense</S.Text>
        </div>
      </S.Avatars>
      <S.Hr className="hr anim" />
      <S.Text> Skills:</S.Text>
      <br />
      {isLoading ? (
        <p> Carregando ... </p>
      ) : (
        result?.map((v: any) => (
          <>
            <S.Text>
              {v.name}: <span>{v.descricao}</span>
            </S.Text>
            <S.Hr className="hr anim" />
          </>
        ))
      )}
    </S.Wrapper>
  );
};

export default CardHeroPatchNotes;
