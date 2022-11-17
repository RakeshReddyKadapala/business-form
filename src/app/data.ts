// export interface values {
//     Email_Address: String,
//     legal_businessname: String,
//     businessname_oncard: String,
//     businessaddressline1: String,
//     businessaddressline2: String,
//     businessaddress_zipcode: Number,
//     business_ph_no: Number,
//     firstname: String,
//     MI: String,
//     lastname: String,
//     nameoncard: String,
//     homeaddressline1: String,
//     homeaddressline2: String,
//     homeaddresszipcode: Number

// }

// export class Idata {

//     Email_Address: String | undefined;
//     legal_businessname: String | undefined;
//     businessname_oncard: String | undefined;
//     businessaddressline1: String | undefined;
//     businessaddressline2: String | undefined;
//     businessaddress_zipcode: Number | undefined;
//     business_ph_no: Number | undefined;
//     firstname: String | undefined;
//     MI: String | undefined;
//     lastname: String | undefined;
//     nameoncard: String | undefined;
//     homeaddressline1: String | undefined;
//     homeaddressline2: String | undefined;
//     homeaddresszipcode: Number | undefined;
//     value: any;

// }

export class Idata {
    email: string = '';
    businessname: string = '';
    cardname: string = '';
    business_address1: string = '';
    zip1: number | undefined;
    phone: number | undefined;;
    firstname: string = '';
    lastname: string = '';
    nameoncard: string = '';
    homeaddress: string = '';
    zip: number | undefined;
    business_address2: string = '';
    MI: string = '';
    homeaddressline2: string = '';
}
export class Idata1 {

    email: string = '';
    businessname: string = '';
    cardname: string = '';
    business_address1: string = '';
    phone: number = 0;
    zip1: number = 0;
    firstname: string = '';
    lastname: string = '';
    nameoncard: string = '';
    homeaddress: string = '';
    zip: number = 0;
    business_address2: string = '';
    MI: string = '';
    homeaddressline2: string = '';

}