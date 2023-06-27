// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { useRouter } from 'next/router';
import * as S from './styles';

const Sidebar = () => {
  const router = useRouter();
  const options = [
    {
      name: 'Inicio',
      link: './'
    },
    {
      name: 'Como Jogar',
      link: './como-jogar'
    },
    {
      name: 'Patch Notes',
      link: './patch-notes'
    },
    {
      name: 'Cadastro de Patch Notes',
      link: './cadastro-patch-notes'
    }
  ];
  // console.log(router.pathname)
  function handleTrue(value: string) {
    return router.pathname == value.replace('.', '');
  }
  // console.log(router.pathname)
  return (
    <S.Wrapper>
      <div>
        <S.List>
          {options.map((option, index) => (
            <S.Line key={index}>
              <S.As color={handleTrue(option.link)} href={option.link}>
                {handleTrue(option.link) && (
                  <img
                    style={{ height: '1.2rem', marginRight: '5px' }}
                    src="./selecionado.svg"
                    alt=">"
                  />
                )}
                {option.name}
              </S.As>
            </S.Line>
          ))}
        </S.List>
      </div>
      <div style={{ textAlign: 'start' }}>
        <p>Copyright © 2023 - present</p>
        <p>BNHA hero’s legacy </p>
      </div>
    </S.Wrapper>
  );
};

export default Sidebar;
