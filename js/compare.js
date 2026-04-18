
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
  document.getElementById("sidebar").style.display = "block";
  console.log("open")
}

function closeSidebar() {
  document.getElementById("sidebar").style.display = "none";
  console.log("closed")
}

function openSidebarRight() {
  document.getElementById("sidebar-right").style.display = "block";
  console.log("open right")
}

function closeSidebarRight() {
  document.getElementById("sidebar-right").style.display = "none";
  console.log("closed right")
}
