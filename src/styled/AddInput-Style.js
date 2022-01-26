import styled, {css} from "styled-components";

export default styled.div`
    ${({ avg, textPercent }) => css`
      width:90%;
      height:10%;
      position: relative;
      left:50%;
      transform: translate(-50%, 0px);
      display:flex;
      align-items: center;

      &:before {
        content: "";
        width: ${textPercent}%;
        height: 3px;
        position: absolute;
        left: 0;
        top:calc(50% + 18.6px);
        transform: translateY(-50%);
        background: #B0E6CF;
        z-index: 99999;
        transition: .2s;
      }
      
      input {
        width:100%;
        height: 40px;
        position: relative;
        border:none;
        border-bottom: 3px solid rgba(19,19,19, .5);
        padding:0 37px 0px 0px;
        font-weight: bold;
        outline: none;

        //box-shadow: 0 0 10px 10px rgba(94,194,151,.2);
        //rgba(208,218,253,.5)
      }

      svg {
        position: absolute;
        font-size: 22px;
        right: 0px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 5;
        cursor: pointer;
        
        path {
          transition: .3s;
        }
        
        &:hover path {
          color:#73BF9E;
        }
      }
    `}
`;