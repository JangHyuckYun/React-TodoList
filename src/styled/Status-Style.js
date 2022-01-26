import styled, {css} from "styled-components";

export default styled.div`
  ${({ avg }) => css`
    flex:4;
    height:37%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-bottom: 10px;

    &:before {
      //content: "";
      //position:absolute;
      //width: 40%;
      //height: 100%;
      //background: rgba(0,0,0, .25);
      //right:0;
      //top:0;
    }

    .chart_container {
      display:flex;
      justify-content:center;
      align-content: center;
      
      p {
        display: flex;
        align-items: center;
        
        &, b {
          color:white;
        }
        
        b {
          padding-right: 4px;
        }
      }
      
      svg {
        width: 36px;
        margin-right: 5px;
      }
    }
    
    .text_container {
      position: relative;
      height:50%;
      display: flex;  
      align-items: center;
      justify-content: center;
      
      p {
        padding: 0;
        color:white;
      }
      
      .line {
        width: 1px;
        height: 100%;
        background: rgba(255, 255, 255, .6);
        margin:0 10px;
      }
    }
  `}
`;