function calculateWeek() {
  const start = document.getElementById("startDate").value;
  const end = document.getElementById("endDate").value;
  const weekDisplay = document.getElementById("weekDisplay");

  if (start && end) {
    const startDate = new Date(start);
    const day = startDate.getDate();
    const weekNum = Math.ceil(day / 7);
    const monthName = startDate.toLocaleString('default', { month: 'long' });
    weekDisplay.value = `Week ${weekNum} of ${monthName}`;
  }
}




