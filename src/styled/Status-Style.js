import styled, {css} from "styled-components";

export default styled.div`
  ${({ avg }) => css`
    flex:4;
    height:100%;

    &:before {
      //content: "";
      //position:absolute;
      //width: 40%;
      //height: 100%;
      //background: rgba(0,0,0, .25);
      //right:0;
      //top:0;
    }
    
    &:after {
      content: "";
      width:60%;
      height:5px;
      background: #2EBAEE;
      position: absolute;
      bottom: 0;
      left: 0;
      
      transition: .3s;
    }

    .chart_container {
      display:flex;
      justify-content:center;
      align-content: center;
      height:100px;
    }
  `}
`;