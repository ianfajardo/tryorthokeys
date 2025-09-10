import { parseISO, format, isValid } from "date-fns";

export default function Date({ dateString }) {
  // Handle undefined or null dateString
  if (!dateString) {
    return <time dateTime="">No date available</time>;
  }
  
  const date = parseISO(dateString);
  
  // Check if the parsed date is valid
  if (!isValid(date)) {
    console.warn(`Invalid date string: ${dateString}`);
    return <time dateTime={dateString}>{dateString}</time>;
  }
  
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
