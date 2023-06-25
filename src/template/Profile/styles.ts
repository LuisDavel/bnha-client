import styled, { css } from 'styled-components';
// import media from 'styled-media-query';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: antiquewhite;
    display: flex;
    font-family: ${theme.font.family.author};
    height: 100vh;
    width: 100vw;
  `}
`;

export const RightSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: ${theme.colors.secondary};
  `}
`;

export const LeftSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: end;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    margin-left: 2rem;
    width: 100%;
    /* background-color: ${theme.colors.secondary}; */
  `}
`;

export const ContentCardPet = styled.section`
  min-height: 90%;
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: 400;
    span {
      color: ${theme.colors['orange+10']};
      font-weight: 600;

      a {
        text-decoration: underline;
        color: ${theme.colors['orange+10']};
      }
    }
  `}
`;
