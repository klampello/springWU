
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
  document.getElementById("sidebar").classList.add("open");
  console.log("open")
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  console.log("closed")
}

function openSidebarRight() {
  document.getElementById("sidebar-right").classList.add("open");
  console.log("open right")
}

function closeSidebarRight() {
  document.getElementById("sidebar-right").classList.remove("open");
  console.log("closed right")
}
