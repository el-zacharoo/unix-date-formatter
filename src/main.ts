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

    if (elapsed < msPerMinute) {
        if (Math.round(elapsed / 1000) > 1) {
            return `${Math.round(elapsed / 1000)} seconds ago`;
        } else {
            return "Just now";
        }
    } else if (elapsed < msPerHour) {
        if (Math.round(elapsed / msPerMinute) > 1) {
            return `${Math.round(elapsed / msPerMinute)} minutes ago`;
        } else {
            return `${Math.round(elapsed / msPerMinute)} minute ago`;
        }
    } else if (elapsed < msPerDay) {
        if (Math.round(elapsed / msPerHour) > 1) {
            return `${Math.round(elapsed / msPerHour)} hours ago`;
        } else {
            return `${Math.round(elapsed / msPerHour)} hour ago`;
        }
    } else if (elapsed < msPerMonth) {
        if (Math.round(elapsed / msPerDay) > 1) {
            return `About ${Math.round(elapsed / msPerDay)} days ago`;
        } else {
            return `About ${Math.round(elapsed / msPerDay)} day ago`;
        }
    } else if (elapsed < msPerYear) {
        if (Math.round(elapsed / msPerMonth) > 1) {
            return `About ${Math.round(elapsed / msPerMonth)} months ago`;
        } else {
            return `About ${Math.round(elapsed / msPerMonth)} month ago`;
        }
    } else {
        if (Math.round(elapsed / msPerYear) > 1) {
            return `About ${Math.round(elapsed / msPerYear)} years ago`;
        } else {
            return `About ${Math.round(elapsed / msPerYear)} year ago`;
        }
    }
};
