
const rows = document.querySelectorAll('.compare-row');

rows.forEach(row => {
  row.addEventListener('mouseover', () => {
    row.classList.add('row-highlight');
  });

  row.addEventListener('mouseout', () => {
    row.classList.remove('row-highlight');
  });
});




function openSidebar() {
  document.getElementById("Sidebar").style.display = "block";
  console.log("open")
}

function closeSidebar() {
  document.getElementById("sidebar").style.display = "none";
  console.log("closed")
}
