function searchIPO() {
  let input = document.getElementById("search").value.toUpperCase();
  let table = document.getElementById("ipo-list");
  let rows = table.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
      let td = rows[i].getElementsByTagName("td")[0]; // Company Name column
      if (td) {
          let textValue = td.textContent || td.innerText;
          rows[i].style.display = textValue.toUpperCase().indexOf(input) > -1 ? "" : "none";
      }
  }
}

  