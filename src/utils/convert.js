export default class convert {

  static StringToData(value) {
    try {
      const arrDataExclusao = value.split('/');
      const stringFormatada = `${arrDataExclusao[2]}-${arrDataExclusao[1]}-${arrDataExclusao[0]}`;
      let dataFormatada1 = new Date(stringFormatada);

      if (dataFormatada1.getDate() !== Number(arrDataExclusao[0]))
        dataFormatada1 = dataFormatada1.setDate(dataFormatada1.getDate() + 1)

      return dataFormatada1;
    } catch (e) {
      console.error("StringToData Error", e.message);
      return null;
    }
  }

  /**
   * @param {Date} date 
   * @returns {string} 
   */
  static DateToString(date) {
    return `${date.getFullYear()}-${date.getMonth() < 9 && 0}${date.getMonth() + 1}-${date.getDate()}`
  }
}