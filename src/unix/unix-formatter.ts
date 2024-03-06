// converts unix to 'time ago' format to string
export const unixFormatter = (date: number): string => {
    const now: Date = new Date();
    const dateParser: Date = new Date(date * 1000);

    return timeFunc(Number(now) - Date.parse(String(dateParser)));
};

const timeFunc = (elapsed: number): string => {
    const msPerMinute: number = 60 * 1000;
    const msPerHour: number = msPerMinute * 60;
    const msPerDay: number = msPerHour * 24;
    const msPerMonth: number = msPerDay * 30;
    const msPerYear: number = msPerDay * 365;

    switch (true) {
        case elapsed < msPerMinute:
            return elapsed < 1000 ? "Just now" : `${Math.round(elapsed / 1000)} seconds ago`;
        case elapsed < msPerHour:
            return Math.round(elapsed / msPerMinute) > 1
                ? `${Math.round(elapsed / msPerMinute)} minutes ago`
                : `${Math.round(elapsed / msPerMinute)} minute ago`;
        case elapsed < msPerDay:
            return Math.round(elapsed / msPerHour) > 1
                ? `${Math.round(elapsed / msPerHour)} hours ago`
                : `${Math.round(elapsed / msPerHour)} hour ago`;
        case elapsed < msPerMonth:
            return Math.round(elapsed / msPerDay) > 1
                ? `About ${Math.round(elapsed / msPerDay)} days ago`
                : `About ${Math.round(elapsed / msPerDay)} day ago`;
        case elapsed < msPerYear:
            return Math.round(elapsed / msPerMonth) > 1
                ? `About ${Math.round(elapsed / msPerMonth)} months ago`
                : `About ${Math.round(elapsed / msPerMonth)} month ago`;
        default:
            return Math.round(elapsed / msPerYear) > 1
                ? `About ${Math.round(elapsed / msPerYear)} years ago`
                : `About ${Math.round(elapsed / msPerYear)} year ago`;
    }
};
