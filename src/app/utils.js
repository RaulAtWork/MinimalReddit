export function getFormattedDateFromSeconds(seconds, format) {
  const date = new Date(seconds * 1000);

  const year = date.getFullYear();
  const month = addLeadingZero(date.getMonth() + 1);
  const day = addLeadingZero(date.getDate());
  const hours = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());
  const sec = addLeadingZero(date.getSeconds());

  let formattedDate = format
    .replace("YYYY", year)
    .replace("MM", month)
    .replace("DD", day)
    .replace("HH", hours)
    .replace("mm", minutes)
    .replace("ss", sec);

  return formattedDate;
}

function addLeadingZero(number) {
  return number < 10 ? "0" + number : number;
}
