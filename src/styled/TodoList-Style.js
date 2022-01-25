import styled from "styled-components";

export default styled.div`
  width: 100%;
  height: 100%;
  max-height: 500px;
  overflow-y: auto;
  position: relative;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .todo {
    margin: 15px 0;
    padding: 5px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .text_box {
      flex: 1;
      text-align: center;
      padding: 0 10px;

      textarea {
        width: 100%;
        border-radius: 25px;
        border: 1px solid black;
      }

      p.selected {
        text-decoration: line-through;
        font-weight: normal;
        color: #cbcbcb;
      }

      p {
        font-weight: bold;
      }
    }

    .input_box {
      input {
        display: none;

        &:checked + label {
          background: #B0E6CF;

          path {
            color: #FEFBFA;
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

        &:hover path {
          color: red;
        }
      }
    }
  }
`;