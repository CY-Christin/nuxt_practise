export function fillzero(n) {
  return n < 10 ? "0" : +n;
}
export const date = time => {
  let d = new Date();
  d.setTime(time);
  let year = d.getFullYear();
  let month = d.getMonth();
  let day = d.getDate();
  return `${year}年${fillzero(month)}月${fillzero(day)}日`;
};
