import * as S from './styles';

import { ProfileProps } from 'pages/profile';
import CardPets from 'components/CardPets';
import Link from 'next/link';

type PropsProfilePage = {
  dataAnimal: ProfileProps['animal'];
  dataUser: string;
};

export default function ProfilePage({
  dataAnimal,
  dataUser
}: PropsProfilePage) {
  return (
    <S.Wrapper>
      <S.RightSection>
        <div>cabeçalho</div>
        <section>
          <input type="text" />
          <input type="text" />
        </section>
      </S.RightSection>
      <S.LeftSection>
        {dataAnimal && (
          <S.Text>
            Você tem <span> {dataAnimal.length} amiguinhos </span> cadastrados!
          </S.Text>
        )}
        <S.ContentCardPet>
          <div>
            {dataAnimal ? (
              dataAnimal.map((v) => (
                <CardPets
                  typeCard={1}
                  key={v.id}
                  name={v.name}
                  typeAnimal={v.type_animal_id}
                  image=""
                />
              ))
            ) : (
              <S.Text>
                Você não tem pets cadastrados 😢{' '}
                <span>
                  {' '}
                  <Link href={'./animalform'}> Deseja adicionar ? </Link>
                </span>
              </S.Text>
            )}
            <CardPets typeCard={0} name={'Registro'} typeAnimal={0} image="" />
          </div>
        </S.ContentCardPet>
      </S.LeftSection>
    </S.Wrapper>
  );
}
