export default function getRandomLpn(lpn) {
  const chars = lpn.slice(0, 2);
  const numbers = lpn.slice(2) - Math.round(Math.random() * 1);
  return chars + numbers;
}
