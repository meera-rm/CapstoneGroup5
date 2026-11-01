// School years run August to July, so from August on the school year starts this calendar year.
export function academicYearFor(date = new Date()) {
  const startYear = date.getMonth() >= 7 ? date.getFullYear() : date.getFullYear() - 1;
  return `${startYear}-${startYear + 1}`;
}

// The current year plus the year before, for the year picker
export function academicYearOptions(date = new Date()) {
  const current = academicYearFor(date);
  const startYear = Number(current.slice(0, 4));
  return [`${startYear - 1}-${startYear}`, current];
}
