import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    /* background-color: ${theme.colors.primary}; */
    display: flex;
    height: 100vh;
  `}
`;

export const Content = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xxlarge};
  `}
`;
