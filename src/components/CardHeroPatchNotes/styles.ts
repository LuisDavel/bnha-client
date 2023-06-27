import styled, { css, keyframes } from 'styled-components';

const bg = '#ffff';
const barsize = 15;

const hrAnimation = keyframes`
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 200%;
  }
`;

export const Wrapper = styled.main`
  ${({ theme }) => css`
    height: fit-content;
    min-width: 400px;
    width: 50%;
    border-radius: 4px 20px 4px 4px;
    border: 1px solid rgba(0, 0, 0, 0.14);
    padding: ${theme.spacings.small};
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 6px;
    transition: 0.2s all;
    transition-delay: 0.1s;
    :hover {
      border: 1px solid rgba(0, 0, 0, 0.24);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 6px;
      transition-delay: 0s;
    }
  `}
`;

export const Avatars = styled.section`
  height: fit-content;
  align-items: center;
  gap: 2rem;
  width: 100%;
  display: flex;
`;

export const AvatarImag = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 99999px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
`;

export const Skill = styled.main`
  height: fit-content;
  width: 50%;
  background-color: red;
`;

export const Tittle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.secondary};

    span {
      color: black;
    }
  `}
`;

export const Hr = styled.div`
  width: 100%;
  height: 1px;
  display: block;
  position: relative;
  margin-bottom: 0;
  padding: 2em 0;

  &:after,
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 50%;
    left: 0;
  }

  &:before {
    background: linear-gradient(
      90deg,
      ${bg} 0%,
      ${bg} 50%,
      transparent 50%,
      transparent 100%
    );
    background-size: ${barsize};
    background-position: center;
    z-index: 1;
  }

  &:after {
    transition: opacity 0.3s ease, animation 0.3s ease;
    background: linear-gradient(
      to right,
      #555555 5%,
      #666666 15%,
      #666666 25%,
      #777777 35%,
      #777777 45%,
      #888888 55%,
      #888888 65%,
      #999999 75%,
      #999999 85%,
      #555555 95%
    );
    background-size: 200%;
    background-position: 0%;
    animation: ${hrAnimation} 15s linear infinite;
  }

  &.anim {
    &:before {
      background: linear-gradient(
        90deg,
        ${bg} 0%,
        ${bg} 5%,
        transparent 5%,
        transparent 10%,
        ${bg} 10%,
        ${bg} 15%,
        transparent 15%,
        transparent 20%,
        ${bg} 20%,
        ${bg} 25%,
        transparent 25%,
        transparent 30%,
        ${bg} 30%,
        ${bg} 35%,
        transparent 35%,
        transparent 40%,
        ${bg} 40%,
        ${bg} 45%,
        transparent 45%,
        transparent 50%,
        ${bg} 50%,
        ${bg} 55%,
        transparent 55%,
        transparent 60%,
        ${bg} 60%,
        ${bg} 65%,
        transparent 65%,
        transparent 70%,
        ${bg} 70%,
        ${bg} 75%,
        transparent 75%,
        transparent 80%,
        ${bg} 80%,
        ${bg} 85%,
        transparent 85%,
        transparent 90%,
        ${bg} 90%,
        ${bg} 95%,
        transparent 95%,
        transparent 100%
      );
      background-size: ${barsize * 10}px;
      background-position: center;
      z-index: 1;
      animation: ${hrAnimation} 120s linear infinite;
    }

    &:hover {
      &:before {
        animation-duration: 20s;
      }
      &:after {
        animation-duration: 2s;
      }
    }
  }
`;
