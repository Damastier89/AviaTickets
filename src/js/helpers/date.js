import {
    format
} from 'date-fns';

/**
 * // JS - комментарии
 * @param {String} str // дата в виде строки
 * @param {String} type // yyyy.mm.dd
 * @returns // какой тип или что будет возвращено
 */

export function formatDate(str, type) {
    const date = new Date(str);
    return format(date, type);
}