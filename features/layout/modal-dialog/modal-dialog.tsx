import styled, { css } from "styled-components";
import { color, textFont } from "@styles/theme";
import Image from "next/image";

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(52, 64, 84, 0.6);
`;

const ModalContainer = styled.div`
  width: 352px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 24px;
`;

const ModalImage = styled.div`
  height: 48px;
  width: 48px;
  margin-bottom: 20px;
`;

const ModalTitle = styled.span`
  ${textFont("lg", "medium")};
  color: ${color("gray", 900)};
  margin-bottom: 8px;
`;

const ModalBody = styled.span`
  text-align: center;
  ${textFont("sm", "regular")};
  color: ${color("gray", 500)};
`;

const ModalButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`;

const ModalButton = styled.button<ButtonProps>`
  width: calc(50% - 6px);
  border-radius: 8px;
  padding: 10px 18px;
  font-size: ${textFont("md", "medium")};

  ${({ highlighted }) =>
    highlighted
      ? css`
          color: white;
          background: ${color("primary", 600)};
          border: none;
          &:hover {
            background: ${color("primary", 700)};
          }
        `
      : css`
          border: 1px solid ${color("gray", 300)};
          background: white;
          &:hover {
            background: ${color("gray", 100)};
          }
        `}
`;

type ButtonProps = {
  key: number | string;
  text: string;
  onClick: () => void;
  highlighted: boolean;
};

type Props = {
  image?: string;
  title?: string;
  body?: string;
  buttons?: ButtonProps[];
};

export const ModalDialog = ({ image, title, body, buttons }: Props) => {
  return (
    <ModalBackground>
      <ModalContainer>
        {image && (
          <ModalImage>
            <Image src={image} alt="modal img" />
          </ModalImage>
        )}
        <ModalTitle>{title}</ModalTitle>
        <ModalBody>{body}</ModalBody>
        {buttons && (
          <ModalButtons>
            {buttons.map((button) => (
              <ModalButton
                key={button.key}
                onClick={button.onClick}
                highlighted={button.highlighted}
                text={button.text}
              >
                {button.text}
              </ModalButton>
            ))}
          </ModalButtons>
        )}
      </ModalContainer>
    </ModalBackground>
  );
};
