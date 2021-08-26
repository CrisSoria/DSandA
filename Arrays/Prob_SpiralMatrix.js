/* 
SPIRAL MATRIX
* given an m x n matrix, return all elements of the matrix in spiral order.

? ejem:
?
?   1 2 3
?   4 5 6 =>    [1,2,3,6,9,8,7,4,5]
?   7 8 9
*/

/*

spiralMatrix(matrix):
  list = new ArrayList();
  if matrix.length == 0:
    return list;

  r1=0, r2=matrix.length-1;
  c1=0, c2=matrix.length-1;

  while ( r1<=r2 && c1<=c2):
    for c from c1 to c2:
      ans.add(matrix[r1][c])
    for r from r1+1 to r2:
      ans.add(matrix[r][c2]);
    if ( r1<r2 && c1<c2>>)
      for c from c2-1 to c1+1:
        ans.add(matrix[r2][c]);
      for r from r2 to r1+1:
        ans.add(matrix[r][c1]);
    r1++; r2--; c1++; c2--;
  return list;

*/
//! TC: O[ m * n ]
//! SC: O[1]
