export function relativer(timestamp: Date) {
  if (Math.abs(Date.now() - timestamp.getTime()) < 300000) {
    return 'recently';
  } else {
    let mm: string | number = timestamp.getMonth() + 1;
    let dd: string | number = timestamp.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const result = dd + '/' + mm;
    return result
  }
}
