import styled from "styled-components";
import blueMountain from "../images/blue_mountain.jpg";
import forestRoad from "../images/road4.png";

export default styled.div`
    max-width: 800px;
    width:100%;
    height:100%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    .top {
      width:100%;
      height:300px;

      .title {
        width: 100%;
        height:100%;
        position: relative;
        display:flex;
        border-radius: 9px;
        overflow: hidden;
        align-items:center;
        justify-content: space-between;
        margin-bottom: 10px;
        z-index: 5;
        padding:0 10px;

        p.leftText {
          color:#fff;
          font-size:32px;
          font-weight: bold;
          letter-spacing: .5px;
          display:block;
          flex:6;
        }

        &:before {
          content: "";
          width:100%;
          height:100%;
          position:absolute;
          left:0;
          top:0;
          background-image: url(${forestRoad});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 0 60%;

          z-index: -5;
        }

        &:after {
          content: "";
          width:100%;
          height:100%;
          position: absolute;
          left:0;
          top:0;
          background: rgb(59, 66, 60, .25);

          z-index: -3;
        }

        * {
          z-index: 2;
        }
      }
    }
  
  .bottom{
    width: 97%;
    height: 100%;
    position: relative;
    left: 50%;
    transform: translate(-50%, -82px);
    //background: #fff7ed;
    background: #fff;
    border-radius: 60px 60px / 61px 61px;
    box-shadow: 0px 0px 24px 2px rgb(0 0 0 / 30%);
    padding: 25px 10px 5px 10px;
    z-index: 5;
    
    &:before {
      content:"";
      width:100%;
      height:150px;
      position: absolute;
      top: -10px;
      left:0;
      background: rgba(255,255,255, .4);
      border-radius: 60px 60px / 61px 61px;
      z-index: -90;
    }

    &:after {
      content:"";
      width:100%;
      height:150px;
      position: absolute;
      top: -20px;
      left:0;
      background: rgba(255,255,255, .4);
      border-radius: 60px 60px / 61px 61px;
      z-index: -90;
    }
  }

`;