'use strict';

{
  // setInterval(関数, ミリ秒);
  let i = 0;

  const showTime = () => {
    console.log( new Date() );
    i++;
    if( i > 2 ) clearInterval( timerId );
  };

  let timerId = setInterval( showTime, 1000 );
}
