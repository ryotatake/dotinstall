'use strict';

{
  const a = [1, 5, 10];

  a.unshift( 100 );
  a.push( 200, 300 );

  console.log( a );

  a.shift();
  a.pop();
  console.log( a );
}
