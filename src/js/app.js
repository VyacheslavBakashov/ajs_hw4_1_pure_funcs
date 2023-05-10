export default function checkHealth(obj) {
  let res;
  if (obj.health > 50) {
    res = 'healthy';
  } else if (obj.health >= 15 && obj.health <= 50) {
    res = 'wounded';
  } else {
    res = 'critical';
  }
  return res;
}
