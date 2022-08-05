export default class Board {
  constructor() {
    this.board = [];
  }

  generate(size) {
    this.board = [...Array(size)]
    .map((el, j) => [...Array(size)]
    .map((el, i) => i + 1 + size * j)
    );
    return this;
  }

  getBoard() {
    return this.board;
  }

  getNum([x, y]) {
    return this.board[x][y];
  }
}
