import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Overlay = styled(motion.div)`
  position: fixed;
  display: none;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  padding: 24px;

  background: rgba(0, 0, 0, 0.75);

  z-index: 1000;
`;

export const InfoBox = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  top: 50%;
  left: 50%;

  padding: 24px;

  background: ${({ theme }) => theme.colors.backgroundOne};
  border-radius: 12px;

  /* transform: translate(-50%, -50%); */
  opacity: 0;

  & strong {
    margin-bottom: 12px;

    color: ${({ theme }) => theme.colors.title};
    font-size: 1.87rem;
    font-weight: 500;
  }

  & span {
    margin-bottom: 24px;

    font-size: 1.2rem;
  }
`;
