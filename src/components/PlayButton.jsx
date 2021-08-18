import styled from 'styled-components';

const StyledButton = styled.button``;

function PlayButton({ playerState, togglePlayButton }) {
  return (
    <StyledButton
      onClick={() => {
        togglePlayButton(playerState);
      }}
    >
      <i>{playerState}</i>
    </StyledButton>
  );
}

export default PlayButton;
