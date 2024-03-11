export class DateFormatter {
    private date: Date;

    constructor(private dateString: string) {
        this.date = new Date(this.dateString);
    }

    private months: string[] = [
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

    public formatDate(): string {
        this.throwErrorMessage();

        const year = this.date.getFullYear();
        const date = this.date.getDate();
        const monthIndex = this.date.getMonth();
        const monthName = this.months[monthIndex];
        const formatted = `${date} ${monthName} ${year}`;

        const uploaded = formatted.toString();
        return uploaded;
    }

    public formatDateAndTime(timezone: string, locale: string): string {
        this.throwErrorMessage();

        const options: Intl.DateTimeFormatOptions = {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            timeZone: timezone,
        };

        const formattedDate = this.date.toLocaleDateString(locale, options);

        return formattedDate;
    }

    private throwErrorMessage(): void {
        if (!this.dateString) {
            throw new Error("Please provide a date string");
        }
    }
}
