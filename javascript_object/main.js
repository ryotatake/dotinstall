'use strict';

{
  let x = 1;
  let y = x;
  x = 5;
  console.log( x );
  console.log( y );

  let a = [1, 2];
  let b = a;
  a[0] = 5;
  console.log( a );
  console.log( b );
}
