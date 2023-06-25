import styled, { css } from 'styled-components';
import { CardPetsProps } from '.';

type CardPetsStyleProps = Pick<CardPetsProps, 'typeAnimal'>;

export const Wrapper = styled.main<CardPetsStyleProps>`
  ${({ theme, typeAnimal }) => css`
    position: relative;
    background-color: ${typeAnimal == 1 ? '#9A4125' : theme.colors.white};
    /* border: 2px dashed ${typeAnimal == 1 ? 'red' : theme.colors.terciary}; */
    padding: 0.4rem;
    width: fit-content;
    height: fit-content;
    border-radius: 20px;
  `}
`;

export const Text = styled.p<CardPetsStyleProps>`
  ${({ theme, typeAnimal }) => css`
    font-size: ${theme.font.sizes.xlarge};
    margin-top: 1.8rem;
    font-family: ${theme.font.family.nunito};
    font-weight: 400;
    color: ${typeAnimal == 1 ? theme.colors.white : theme.colors.terciary};
    padding: ${theme.spacings.xxsmall} 0;
    text-align: center;
  `}
`;

export const Imag = styled.img<CardPetsStyleProps>`
  ${({ theme, typeAnimal }) => css`
    border: 1px dashed
      ${typeAnimal == 1 ? theme.colors.white : theme.colors.terciary};
    width: 274px;
    height: 135px;
    border-radius: 20px;
  `}
`;

export const ContainerNull = styled.div`
  ${({ theme }) => css`
    width: 274px;
    height: 135px;
    border-radius: 20px;
    background: ${theme.colors.lightGray};
  `}
`;

export const IconWrap = styled.section<CardPetsStyleProps>`
  ${({ theme, typeAnimal }) => css`
    position: absolute;
    top: 55%;
    left: 40%;
    background: ${typeAnimal == 1
      ? theme.colors['orange-10']
      : theme.colors.terciary};
    border: 5px solid ${typeAnimal == 1 ? '#9A4125' : theme.colors.white};
    width: fit-content;
    padding: 1.2rem 1.5rem;
    border-radius: 16px;
    /* ${theme.border.radius} ; */
  `}
`;
