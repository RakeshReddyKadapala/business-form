

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Idata, Idata1 } from '../data';

import { ServicefileService } from '../servicefile.service';

import { emailValidator } from '../email-validator.directive';


interface values {
  email: string;
  businessname: string;
  cardname: string;
  business_address1: string;
  zip1: number;
  phone: number;
  firstname: string;
  lastname: string;
  nameoncard: string;
  homeaddress: string;
  zip: number;
  business_address2: string;
  MI: string;
  homeaddressline2: string;

}

@Component({
  selector: 'app-bussinessform',
  templateUrl: './bussinessform.component.html',
  styleUrls: ['./bussinessform.component.css']
})
export class BussinessformComponent implements OnInit {
  registerForm!: FormGroup;
  user: values;




  keyObj2: Idata1 = new Idata1
  keyList: Idata[] = [];
  //caret
  showMe: boolean = false
  ngOnit() { }
  toggleTag() {
    this.showMe = !this.showMe
  }
  //radio button
  radioExample: FormControl = new FormControl();


  constructor(private formBuilder: FormBuilder, private ServicefileService: ServicefileService) {
    this.user = {} as values;
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      businessname: new FormControl('this.user.businessname', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      cardname: new FormControl(this.user.cardname, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]),
      business_address1: new FormControl(this.user.business_address1, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),

      zip1: new FormControl(this.user.zip1, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(6),
      ]),
      phone: new FormControl(this.user.phone, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
      ]),
      firstname: new FormControl(this.user.firstname, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      lastname: new FormControl(this.user.lastname, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),

      nameoncard: new FormControl(this.user.nameoncard, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),

      homeaddress: new FormControl(this.user.homeaddress, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      zip: new FormControl(this.user.zip, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      business_address2: new FormControl(this.user.business_address2),
      MI: new FormControl(this.user.MI),
      homeaddressline2: new FormControl(this.user.homeaddressline2),

      radioExample: this.radioExample


    });

    this.registerForm = this.formBuilder.group({
      email: [''],
      businessname: [''],
      cardname: [''],
      business_address1: [''],
      zip1: [''],
      phone: [''],
      firstname: [''],
      lastname: [''],
      nameoncard: [''],
      homeaddress: [''],
      zip: [''],
      business_address2: [''],
      MI: [''],
      homeaddressline2: ['']
    });




  }

  get email() {
    return this.registerForm.get('email')!;
  }
  get businessname() {
    return this.registerForm.get('businessname')!;
  }
  get cardname() {
    return this.registerForm.get('cardname')!;
  }
  get business_address1() {
    return this.registerForm.get('business_address1')!;
  }

  get zip1() {
    return this.registerForm.get('zip1')!;
  }
  get phone() {
    return this.registerForm.get('phone')!;
  }
  get firstname() {
    return this.registerForm.get('firstname')!;
  }
  get lastname() {
    return this.registerForm.get('lastname')!;
  }
  get nameoncard() {
    return this.registerForm.get('nameoncard')!;
  }

  get homeaddress() {
    return this.registerForm.get('homeaddress')!;
  }
  get zip() {
    return this.registerForm.get('zip')!;
  }

  get business_address2() {
    return this.registerForm.get('business_address2')!;
  }
  get MI() {
    return this.registerForm.get('MI')!;
  }

  get homeaddressline2() {
    return this.registerForm.get('homeaddressline2')!;
  }


  public validate(): void {
    if (this.registerForm.invalid) {
      for (const control of Object.keys(this.registerForm.controls)) {
        this.registerForm.controls[control].markAsTouched();
      }
      return;
    }


    this.user = this.registerForm.value;
    // console.log(this.registerForm.value)
    console.log(this.user);


    // console.info('Email:', this.user.email);
    // console.info('Legal business name:', this.user.businessname);
    // console.info('Business name on card:', this.user.cardname);
    // console.info('business_address1:', this.user.business_address1);
    // console.info('business_address2:', this.user.business_address2);
    // console.info('business_address1 Pincode:', this.user.zip1);
    // console.info('Phone Number:', this.user.phone);
    // console.info('First Name:', this.user.firstname);
    // console.info('MI:', this.user.MI);
    // console.info('Last Name:', this.user.lastname);
    // console.info('Name on card:', this.user.nameoncard);
    // console.info('Home address Line1:', this.user.homeaddress);
    // console.info('homeaddressline2:', this.user.homeaddressline2);
    // console.info('Home address zipcode:', this.user.zip);



  }

  // //checkbx
  // copyadd(event: any) {
  // if (event.target.checked) {
  // this.registerForm.controls['business_address1'].setValue(
  // this.registerForm.controls['homeaddress'].value
  // );
  // } else {
  // this.registerForm.controls['business_address1'].reset();
  // }
  // }

  mark() {
    this['business_address1'].setValue = this['homeaddress'].setValue

    // this.inputAddress1 = this.address

  }






  addingData() {
    // console.log(this.keyDetail);
    this.keyObj2.email = this.registerForm.value.email;
    this.keyObj2.businessname = this.registerForm.value.businessname;
    this.keyObj2.cardname = this.registerForm.value.cardname;
    this.keyObj2.business_address1 = this.registerForm.value.business_address1;
    this.keyObj2.zip1 = this.registerForm.value.zip1;
    this.keyObj2.phone = this.registerForm.value.phone;
    this.keyObj2.firstname = this.registerForm.value.firstname;
    this.keyObj2.lastname = this.registerForm.value.lastname;
    this.keyObj2.nameoncard = this.registerForm.value.nameoncard;
    this.keyObj2.homeaddress = this.registerForm.value.homeaddress;
    this.keyObj2.zip = this.registerForm.value.zip;
    this.keyObj2.business_address2 = this.registerForm.value.business_address2;
    this.keyObj2.MI = this.registerForm.value.MI;
    this.keyObj2.homeaddressline2 = this.registerForm.value.homeaddressline2;


    console.log(this.registerForm.value.email)

    this.ServicefileService.addingData(this.keyObj2).subscribe((res) => {
      console.log(res);
      this.getData();
    })
  }


  getData() {
    this.ServicefileService.getData().subscribe((res) => {
      this.keyList = res;
    }, (err: any) => {
      console.log("error while fetching data")
    });
  }





}





















// export class BussinessformComponent {
// title = 'reactiveformproject';
// registerForm!: FormGroup;
// submitted = false;





// //from service file
// public response: Observable<Idata[]>;


// constructor(private formBuilder: FormBuilder, public service: ServicefileService) {
// //get
// //interface
// this.response = this.service.getEmployee();
// console.log(this.response);

// }
// //post
// sendData = new Idata;
// postemployee() {

// // this.sendData.Email_Address = this.sendData.value.Email_Address
// this.service.postEmployee(this.sendData).subscribe(data => {
// console.log(data);

// });
// this.response = this.service.getEmployee();


// }

// // ngOnInit() {
// // //validations
// // this.registerForm = this.formBuilder.group({
// // businessname: ['', Validators.required],
// // cardname: ['', Validators.required],
// // business_address1: ['', Validators.required],
// // firstname: ['', Validators.required],
// // lastname: ['', Validators.required],
// // nameoncard: ['', Validators.required],
// // homeaddress: ['', Validators.required],
// // email: ['', [Validators.required, Validators.email]],
// // phone: ['', [Validators.required, Validators.pattern("^((\+91-?)|0)?[0-9]{10}$")]],
// // zip: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
// // zip1: ['', [Validators.required, Validators.pattern('[0-9]{6}')]]
// // })
// // }
// // onSubmit() {
// // this.submitted = true
// // console.log(" form submitted");
// // console.log(this.registerForm);
// // //stop here if form is invalid
// // if (this.registerForm.invalid) {
// // return;
// // }
// // // display form values on success
// // // alert('SUCCESS!! :-)nn' + JSON.stringify(this.registerForm.value, null, 4));
// // // alert("success");
// // }




// }

