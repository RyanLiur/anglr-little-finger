import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'paymentCardNumber'
})
export class PaymentCardNumberPipe implements PipeTransform {
    transform(value: string, maxLength: number): string {
        const joinStr = ' '; // クレカ区切り文字
        // 既設定区切り文字を削除
        value = value.replace(new RegExp(joinStr, 'g'), '').substring(0, maxLength);
        switch (value.substring(0, 2)) {
            case '36': // 14桁: Diners Club(4桁+6桁+4桁)
            case '34': // 15桁: American Express(4桁+6桁+5桁)
            case '37': // 15桁: American Express(4桁+6桁+5桁)
                value = value.replace(/\b(\d{4})(.+)/, '$1' + joinStr + '$2');
                value = value.replace(new RegExp(joinStr + '(\\d{6})(.+)'), joinStr + '$1' + joinStr + '$2');
                return value;
            default: // 16桁: VISAなど(4桁+4桁+4桁+4桁)
                const arry = value.match(/\d{4}/g) || [];
                if (arry.length === 0) {
                    return value;
                } else {
                    const remainder = value.substring(arry.length * 4, value.length);
                    return arry.join(joinStr) + (remainder.length > 0 ? joinStr : '') + remainder;
                }
        }
    }
}
