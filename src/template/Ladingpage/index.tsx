import * as S from './styles';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';

type LandingPageProps = {
  children: React.ReactNode;
};

export default function LandingPage({ children }: LandingPageProps) {
  return (
    <S.Wrapper>
      <S.Content>
        <Header />
        <Sidebar />
      </S.Content>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
}
