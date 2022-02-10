export class Employee {
  id!: number;
  name!: string;
  gender!: string;
  email?: string;
  phoneNumber?: number | null;
  contactPreference!: string;
  dateOfBirth!: string;
  department!: string;
  isActive!: boolean;
  photoPath?: string;

  /**
   *
   */
  // constructor() {
  //   this.id = 1,
  //   this.name = '',
  //   this.gender = 'Male',
  //   this.email = '',
  //   this.phoneNumber = 0,
  //   this.contactPreference = 'Email',
  //   this.dateOfBirth = '',
  //   this.department = '',
  //   this.isActive = true,
  //   this.photoPath = '';
  // }
}
