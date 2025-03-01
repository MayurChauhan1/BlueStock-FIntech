function addIPO() {
    const company = document.getElementById("company").value;
    const price = document.getElementById("price").value;
    const openDate = document.getElementById("openDate").value;
  
    if (company === "" || price === "" || openDate === "") {
      alert("Please fill all fields");
      return;
    }
  
    const ipoList = document.getElementById("ipoList");
    const li = document.createElement("li");
    li.innerHTML = `<span><strong>${company}</strong> - $${price} (Opens: ${openDate})</span> <button onclick="removeIPO(this)">❌ Remove</button>`;
    ipoList.appendChild(li);
  
    // Clear the form inputs after adding an IPO
    document.getElementById("company").value = "";
    document.getElementById("price").value = "";
    document.getElementById("openDate").value = "";
  }
  
  function removeIPO(button) {
    button.parentElement.remove();
  }
  
