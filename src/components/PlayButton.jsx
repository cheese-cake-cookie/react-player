import { IoPlayCircleOutline, IoPauseCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';

const StyledButton = styled.button``;

function PlayButton({ playerState, onClick }) {
  function getPlayerIcon(playerState) {
    switch (playerState) {
      case 'PLAYING':
        return <IoPauseCircleOutline />;
      default:
        return <IoPlayCircleOutline />;
    }
  }

  return (
    <StyledButton
      onClick={() => {
        onClick(playerState);
      }}
    >
      <i>{getPlayerIcon(playerState)}</i>
    </StyledButton>
  );
}

export default PlayButton;
