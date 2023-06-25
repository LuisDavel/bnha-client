import * as S from './styles';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';

export default function LandingPage() {
  return (
    <S.Wrapper>
      <S.Content>
        <Header />
        <Sidebar />
        {/* <S.></S.> */}
      </S.Content>
      <S.Content>EM BREVE</S.Content>
    </S.Wrapper>
  );
}
