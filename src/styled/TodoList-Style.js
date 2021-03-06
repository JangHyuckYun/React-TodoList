import styled from "styled-components";

export default styled.div`
  width: 100%;
  height: 100%;
  max-height: 700px;
  overflow-y: auto;
  position: relative;
  padding: 0 39px;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .todo {
    margin: 15px 0;
    padding: 5px 0;
    min-height: 41px;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .text_box {
      flex: 1;
      min-height: 100%;
      text-align: left;
      padding: 0 10px;

      input {
        width: 100%;
        height: 100%;
        border-radius: 25px;
        border: 1px solid black;
        padding: 5px 0 5px 10px;

        outline: none;
      }

      p.selected {
        text-decoration: line-through;
        font-weight: normal;
        color: #cbcbcb;
      }

      p {
        font-weight: bold;
        white-space: break-spaces;
        word-break: break-all;
      }
    }

    .input_box {
      input {
        display: none;

        & + label {
          transition: .3s;
        }

        &:checked + label {
          background: #B0E6CF;

          path {
            color: #FEFBFA;
            transition: .3s;
          }
        }
      }

      label {
        width: 31px;
        height: 31px;
        border-radius: 25px;
        background: #E2E2E2;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px 0 0 0;

        path {
          color: #afafaf;
        }
      }
    }

    .button_box {
      button {
        width: auto;
        height: auto;

        path {
          transition: .3s;
        }

        &:hover path {
          color: #ff5959;
        }
      }
    }
  }
`;