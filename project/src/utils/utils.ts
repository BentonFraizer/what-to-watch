export const timeConvertation = (minutesAmount:number): string => {
  const hours = (minutesAmount / 60);
  const roundHours = Math.floor(hours);
  const minutes = (hours - roundHours) * 60;
  const roundMinutes = Math.round(minutes);
  if (roundHours === 0) {
    return `${roundMinutes}m`;
  }
  return `${roundHours}h ${roundMinutes}m`;
};
