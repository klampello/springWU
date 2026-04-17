const rows = document.querySelectorAll('.compare-row');

rows.forEach(row => {
  row.addEventListener('mouseover', () => {
    row.classList.add('row-highlight');
  });

  row.addEventListener('mouseout', () => {
    row.classList.remove('row-highlight');
  });
});
