import styled, { css } from 'styled-components';
import theme from 'styles/theme';

// type Props = {
//   color: boolean
//   theme: Theme
// }

export const Wrapper = styled.section`
  width: fit-content;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const List = styled.ul`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    padding: ${theme.spacings.small};
  `}
`;

export const Line = styled.li`
  ${({ theme }) => css`
    /* padding: ${theme.spacings.xsmall} 0; */
    list-style: none;
  `}
`;

export const As = styled.a`
  ${({ theme, color }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.medium};
    color: ${color ? theme.colors.secondary : theme.colors.terciary};
    text-decoration: none;
    font-weight: ${theme.font.bold};

    :hover {
      color: ${theme.colors.secondary};
    }
  `}
`;
