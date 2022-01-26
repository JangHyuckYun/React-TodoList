import styled, {css} from "styled-components";

export default styled.div`
    ${({ viewType }) => css`
      display: flex;
      align-items: center;
      justify-content: center;
      
      button {
        transition: .3s;
        margin:0 10px;
      }
      
      button.${viewType} {
        transform: scale(1.2);
        font-weight: bold;
      }
    `}
`;