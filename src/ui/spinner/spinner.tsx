import * as React from "react";
import styled from "styled-components";

interface ISpinnerProps {}

const Spinner: React.FunctionComponent<ISpinnerProps> = (props) => {
  React.useEffect(() => {
    setTimeout(() => {}, 5000);
  }, []);
  return (
    <Container>
      <Basketball>
        <div className="ball">
          <div className="lines"></div>
        </div>
        <div className="shadow"></div>
        <div className="text">loading...</div>
      </Basketball>
    </Container>
  );
};

export default Spinner;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: 20;
  background: rgba(255, 255, 255, 0.7);
`;
const Basketball = styled.div`
  position: relative;
  top: 50px;
  left: 0;

  .ball {
    position: absolute;
    background-color: #e76f51;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    overflow: hidden;
    border: 3px solid #333;
    animation: bounce 1s ease-in infinite;
  }

  @keyframes bounce {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
    25% {
      transform: translate3d(0, -185px, 0) rotate(90deg);
    }
    50% {
      transform: translate3d(0, 0, 0) rotate(180deg);
    }
    75% {
      transform: translate3d(0, -185px, 0) rotate(270deg);
    }
    100% {
      transform: translate3d(0, 0, 0) rotate(360deg);
    }
  }

  .ball:before,
  .ball:after {
    content: "";
    position: absolute;
    background-color: #333;
    width: 110px;
    height: 3px;
    top: 50px;
    left: -5px;
  }

  .ball:before {
    transform: rotate(45deg);
  }

  .ball:after {
    transform: rotate(-45deg);
  }

  .lines {
    position: absolute;
    border-radius: 50%;
    border: 3px solid #333;
    width: 70px;
    height: 70px;
    left: -20px;
    top: -20px;
  }

  .lines:before {
    content: "";
    position: absolute;
    border-radius: 50%;
    border: 3px solid #333;
    width: 70px;
    height: 70px;
    top: 65px;
    left: 60px;
  }

  .shadow {
    position: absolute;
    width: 100px;
    height: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    top: 95px;
    z-index: -1;
    left: 3px;
    animation: scale 1s ease-in infinite;
  }

  @keyframes scale {
    0% {
      transform: scaleX(0.7);
    }
    25% {
      transform: scaleX(0.2);
    }
    50% {
      transform: scaleX(0.7);
    }
    75% {
      transform: scaleX(0.2);
    }
    100% {
      transform: scaleX(0.7);
    }
  }

  .text {
    padding: 70px 25px;
    color: grey;
    font: 14px sans-serif;
  }
`;
