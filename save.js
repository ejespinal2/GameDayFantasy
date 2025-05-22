function saveData() {
    const inputValue = document.getElementById('inputValue').value;
    localStorage.setItem('userData', inputValue);
}