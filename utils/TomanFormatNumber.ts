export const format_number = (num: number): string => {
    let formattedNumber: string;

    if (num >= 1_000_000_000) {
        formattedNumber = (num / 1_000_000_000).toFixed(1);
        formattedNumber = parseFloat(formattedNumber).toString() + ' میلیارد';
    } else if (num >= 1_000_000) {
        formattedNumber = (num / 1_000_000).toFixed(1);
        formattedNumber = parseFloat(formattedNumber).toString() + ' میلیون';
    } else if (num >= 1_000) {
        formattedNumber = (num / 1_000).toFixed(1);
        formattedNumber = parseFloat(formattedNumber).toString() + ' هزار';
    } else {
        formattedNumber = num.toLocaleString();
    }

    return formattedNumber;
};