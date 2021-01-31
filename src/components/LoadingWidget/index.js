import React from 'react';

import Widget from '../Widget';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h3>
          Vamos começar...
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'scale-down',
        }}
        src="https://media.giphy.com/media/10ADhj1QPawFna/giphy.gif"
      />
    </Widget>
  );
}

export default LoadingWidget;