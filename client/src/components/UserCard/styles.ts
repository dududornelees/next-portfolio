import styled from "styled-components";
import { shade } from "polished";

export const UserCardStyle = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  height: 80px;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .user-card__name {
    display: flex;
    justify-content: center;
    flex-direction: column;

    p:first-child {
      margin-bottom: 5px;
    }
  }

  .user-card__buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
      background-color: ${(props) => props.theme.colors.secondary};
      transition: ${(props) => props.theme.transition};
      border: none;
      border-radius: 5px;
      width: 26px;
      height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        background-color: ${(props) =>
          shade(0.3, props.theme.colors.secondary)};
      }

      &:last-child {
        margin-left: 8px;
        background-color: #ff0000;

        &:hover {
          background-color: ${shade(0.5, "#FF0000")};
        }
      }

      svg {
        color: white;
        display: flex;
      }
    }
  }

  .modal__text {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
    text-align: center;

    button {
      color: ${(props) => props.theme.colors.text};
      font-size: ${(props) => props.theme.fontSize.medium};
      transition: ${(props) => props.theme.transition};
      background-color: #ff0000;
      padding: 8px;
      border-radius: 5px;
      border: 1px solid #252525;
      cursor: pointer;
      font-family: "Josefin Sans", sans-serif;
      width: 100%;

      &:hover {
        background-color: ${shade(0.5, "#FF0000")};
      }
    }

    .modal__message {
      border: 1px solid ${(props) => props.theme.colors.secondary};
      transition: ${(props) => props.theme.transition};
      border-radius: 5px;
      height: 34px;
      display: none;

      &.modal__message--active {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
