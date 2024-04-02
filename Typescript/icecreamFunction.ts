export default class icecreamLogics {
  arrowfunction = (flav1: string, flav2?: string) => {
    if (flav2 == undefined) console.log(flav1);
    else console.log(flav1, ",", flav2);
  };
  selectIcecremFlavWithoutLimit(flav1: string, ...otherFlav: string[]) {
    if (otherFlav.length == 0) console.log(flav1);
    else console.log(flav1, ",", otherFlav.join(","));
  }
}
export class Validation {
  validateEmail(search: string): boolean {
    var serchfind: boolean;

    var regexp = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");

    serchfind = regexp.test(search);
    console.log(search);
    console.log(serchfind);
    return serchfind;
  }
  validatePincode(pinCode: string): Boolean {
    var serchfind: boolean;
    var pattern = new RegExp("^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$");

    serchfind = pattern.test(pinCode);
    console.log(pinCode);
    console.log(serchfind);
    return serchfind;
  }
}
