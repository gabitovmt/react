export default class Comparator {

  static string() {
    return function (str1, str2) {
      str1 = str1.toLowerCase();
      str2 = str2.toLowerCase();

      return str1 > str2 ? 1 : str1 < str2 ? -1 : 0;
    }
  }

  static field(fieldName, comparator) {
    return function (o1, o2) {
      return comparator(o1[fieldName], o2[fieldName]);
    }
  }

  static comparators(... comparators) {
    return function (o1, o2) {
      let result = 0;

      for (let index = 0; result === 0; index++) {
        result = comparators[index](o1, o2);
      }

      return result;
    }
  }
}
