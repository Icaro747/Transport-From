/* eslint-disable radix */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
export default class MaskUtil {
  static money(value) {
    try {
      value = value.replace(/[^\d]+/g, '');
      if (parseInt(value)) {
        value += '';
        value = value.replace(/[\D]+/g, '');
        value += '';
        value = value.replace(/([0-9]{2})$/g, ',$1');

        if (value.length > 6) {
          value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
        }
      }
      return value;
    } catch (e) {
      console.error('ERROR de conveção de moeda', e?.message);
      return null;
    }
  }

  static moneyV2(value) {
    try {
      value = value.replace(/[^\d]/g, '');

      const cleanMoneyMask = (num = '') => {  // !DEPRECATED
        if (typeof num === 'number') num = num.toString();
        return num.replace(/R\$ |\./g, '').split(',').join('');
      }

      const moneyMask = (num = '') => {
        if (typeof num === 'number') num = num.toString();
        if (/^\d/.test(num)) {
          const cleanNumber = num.replace(/(\.|,)/g, '');
          const reverse = cleanNumber.split('').reverse();
          let { length } = reverse;

          if (length > 2) {
            reverse.splice(2, 0, ',');
            length = reverse.length;
            for (let i = 6; i < length; i += 4) {
              length++;
              reverse.splice(i, 0, '.');
            }
          }
          else {
            while (length < 3) { reverse.push('0'); length++ }
            return moneyMask(reverse.reverse().join(''));
          }
          return reverse.reverse().join('');
        }

      }

      if (!value) return '0,00'
      value = cleanMoneyMask(value);
      if (value.length > 3) value = value.replace(/^0/g, "");
      value = moneyMask(value);
      return value === "0" ? "0,00" : value;

    } catch (e) {
      console.error('ERROR de conveção de moeda', e?.message);
      return null;
    }
  }

  static RemoveMaskConverterFloat(num = '') {
    if (num.length) {
      num = num.replace(/R\$ /g, '');
      return parseFloat(num.split('.').join('').split(',').join('.'));
    }
    return num;
  }

  static centena(num) {
    const moneyMask = (n2) => {
      if (typeof n2 === 'number') n2 = n2.toString();
      if (/^\d/.test(n2)) {
        const cleanNumber = n2.replace(/(\.|,)/g, '');
        const reverse = cleanNumber.split('').reverse();
        let { length } = reverse;

        for (let i = 3; i < length; i += 4) {
          length++;
          reverse.splice(i, 0, '.');
        }

        return reverse.reverse().join('');

      }
    };

    if (num.length > 3) num = num.replace(/^0/g, "");
    num = moneyMask(num);
    return num;
  }

  static data(value) {
    value = value.replace(/[^\d]/g, '');
    if (value.length < 5) {
      value = value.replace(/(\d{2})(\d{1})/g, '$1/$2');
    } else {
      value = value.replace(/(\d{2})(\d{2})(\d{1})/g, '$1/$2/$3');
    }
    return value;
  }

  static dataAndHoro(value) {
    value = value.replace(/[^\d]/g, '');
    if (value.length < 5) {
      value = value.replace(/(\d{2})(\d{1})/g, '$1/$2');
    } else if (value.length < 9) {
      value = value.replace(/(\d{2})(\d{2})(\d{1})/g, '$1/$2/$3');
    } else if (value.length < 11) {
      value = value.replace(/(\d{2})(\d{2})(\d{4})(\d{1})/g, '$1/$2/$3 $4');
    } else {
      value = value.replace(/(\d{2})(\d{2})(\d{4})(\d{2})(\d{1})/g, '$1/$2/$3 $4:$5');
    }
    return value;
  }

  static tel(value) {
    value = value.replace(/[^\d]/g, '');
    if (value.length <= 2) {
      value = value.replace(/(\d{2})/g, '+$1');
    } else if (value.length < 5) {
      value = value.replace(/(\d{2})(\d{1})/g, '+$1 $2');
    } else if (value.length <= 9) {
      value = value.replace(/(\d{2})(\d{2})(\d{1})/g, '+$1 $2 $3');
    } else {
      value = value.replace(/(\d{2})(\d{2})(\d{5})(\d{1})/g, '+$1 $2 $3-$4');
    }
    return value;
  }
}