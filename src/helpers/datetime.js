import dayjs from "dayjs"
import 'dayjs/locale/th'

import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(relativeTime);
dayjs.extend(customParseFormat)

export const datetime = {
    formatDateTimeFromNow,
    formatNumDate,
    formatNumDate1,
    formatENDate,
    formatENDate1,
    formatENDate2,
    formatENDateWithHyphen,
    formatENFullDateTime,
    formatTHShortDate,
    formatTHFullDate,
    formatTHFullDateTime,
    diffDateDays,
    diffDateDaysText,
    dateFormat,
    timeFormat
}

function diffDateDays(start, end) {
    let result = ''
    if ( ( start != 'N/A' && start != '' && start != 'None' ) && ( end != 'N/A' && end != '' && end != 'None' ) ) {

        let date1 = dayjs(start);
        let date2 = dayjs(end);
        let day = date2.diff(date1, 'day');
        result = day

    } else {
        result = 'N/A'
    }
    return result
}

function diffDateDaysText(value) {
    let result = ''
    if ( value != 'N/A' && value != '' && value != 'None' ) {

        let now = dayjs(new Date());
        let end = dayjs(value);
        let day = end.diff(now, 'day');

        if (Math.sign(day) == '-1') {
            result = 'Expired'
        } else {
            if (day == 0) {
                result = "Today";
            }
            else if (day == 1) {
                result = day + ' Day';
            }
            else {
                result = day+1 + ' Days';
            }
        }
    } else {
        result = 'N/A'
    }
    return result
}

// Date Time Diff
function formatDateTimeFromNow(value) {
    let result = ''
    if ( value != 'N/A' && value != '' && value != 'None' ) {

        value = dayjs(value).add(7, 'hour')

        let now = dayjs(new Date());
        let end = dayjs(value);
        let diff = now.diff(end, 'day');

        if ( diff < 1 ) {
            result = dayjs(value).fromNow();
        } else if ( diff == 1 ) {
            result = 'Yesterday at ' + dayjs(value).format('HH:mm');
        } else if ( diff >= 2 && diff <= 6 ) {
            result = dayjs(value).format('dddd') + ' at ' + dayjs(value).format('HH:mm');
        } else {
            return formatENDate(value)
        }

    } else {
        result = 'N/A'
    }
    return result
}

// Date Time Number

// 31/12/2022
function formatNumDate(value) {
    let result = ''
    if ( value != 'N/A' && value != '' && value != 'None' ) {
        result = dayjs(value).format('DD/MM/YYYY')
    } else {
        result = 'N/A'
    }
    return result
}

function formatNumDate1(value) {
    let result = ''
    if ( value != 'N/A' && value != '' && value != 'None' ) {
        result = dayjs(value).format('YYYY/MM/DD')
    } else {
        result = 'N/A'
    }
    return result
}

// Date Time English


// Jan 01, at 00:00
function formatENDate(value) {
    let result = ''
    if ( value != 'N/A' && value != '' && value != 'None' ) {
        result = dayjs(value).format('MMMM D') + ' at ' + dayjs(value).format('HH:mm')
    } else {
        result = 'N/A'
    }
    return result
}

// Jan 01, 2022
function formatENDate1(value) {
    let result = ''
    if ( value != 'N/A' && value != '' && value != 'None' ) {
        result = dayjs(value).format('MMMM D, YYYY');
    } else {
        result = 'N/A'
    }
    return result
}

// 01 Jan 2022
function formatENDate2(value) {
    let result = ''
    if ( value != 'N/A' && value != '' && value != 'None' ) {
        result = dayjs(value).format('DD MMM YYYY');
    } else {
        result = 'N/A'
    }
    return result
}

function formatENDateWithHyphen(value) {
    let result = ''
    if ( value != 'N/A' && value != '' && value != 'None' ) {
        result = dayjs(value).format('YYYY-MM-DD')
    } else {
        result = 'N/A'
    }
    return result
}

// 01 Jan 2022 00:00
function formatENFullDateTime(value) {
    let result = ''
    if ( value != 'N/A' && value != '' && value != 'None' ) {
        result = dayjs(value).format('DD MMMM YYYY HH:mm')
    } else {
        result = 'N/A'
    }
    return result
}

// Date Time Thai

// 01 ม.ค. 2566
function formatTHShortDate(value) {
    let result = ''
    if ( value != 'N/A' && value != '' && value != 'None' ) {
        result = dayjs(value).locale('th').add(543, 'year').format('DD MMM YYYY')
    } else {
        result = 'N/A'
    }
    return result
}

// 01 มกราคม 2566
function formatTHFullDate(value) {
    let result = ''
    if ( value != 'N/A' && value != '' && value != 'None' ) {
        result = dayjs(value).locale('th').add(543, 'year').format('DD MMMM YYYY')
    } else {
        result = 'N/A'
    }
    return result
}

function formatTHFullDateTime(value) {
    let result = ''
    if ( value != 'N/A' && value != '' && value != 'None' ) {
        result = dayjs(value).locale('th').add(543, 'year').format('DD MMMM YYYY HH:mm')
    } else {
        result = 'N/A'
    }
    return result
}


function dateFormat(val, format = "DD MMMM YYYY HH:mm") {
    if (!val) return;
    return dayjs(val).format(format);
}

function timeFormat(val, format = "HH:mm:ss") {
    if (!val) return;
    let time = `${dayjs().format('DD-MM-YYYY')} ${val}`
    return dayjs(time,'DD-MM-YYYY HHmmss').format(format);
}

