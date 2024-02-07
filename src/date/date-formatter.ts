export const dateFormatter = (dateString: string): string => {
    const d = new Date(dateString);
    const year = d.getFullYear();
    const date = d.getDate();
    const monthIndex = d.getMonth();
    const monthName = months[monthIndex];
    const formatted = ` ${date} ${monthName} ${year}`;

    const uploaded = formatted.toString();
    return uploaded;
};

const months: Array<string> = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
