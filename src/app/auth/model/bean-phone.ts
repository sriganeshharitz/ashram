export class BeanPhone {
    constructor(
        public mobileNum: string,
        public password: string,
        public fname?: string,
        public lname?: string,
        public address?: string,
        public dob?: Date,
        public gender?:number,
        public email?: string) {
    }
}
