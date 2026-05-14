(function () {
  const qr = document.getElementById("qr");
  if (qr) {
    const size = 19;
    const finder = (row, col, startRow, startCol) => {
      const r = row - startRow;
      const c = col - startCol;
      if (r < 0 || c < 0 || r > 6 || c > 6) return false;
      return r === 0 || c === 0 || r === 6 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4);
    };

    for (let row = 0; row < size; row += 1) {
      for (let col = 0; col < size; col += 1) {
        const cell = document.createElement("i");
        const fixed =
          finder(row, col, 0, 0) ||
          finder(row, col, 0, 12) ||
          finder(row, col, 12, 0);
        const pattern = ((row * 7 + col * 11 + row * col) % 5 === 0) || ((row + col) % 7 === 0);
        if (!fixed && !pattern) {
          cell.className = "blank";
        }
        qr.appendChild(cell);
      }
    }
  }

  document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
})();
