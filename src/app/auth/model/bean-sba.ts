export class BeanSBA {
    constructor(
        public sbaId: string,
        public password: string,
        public mobileNum?: string,
        public fname?: string,
        public lname?: string,
        public address?: string,
        public dob?: Date,
        public gender?:number,
        public email?: string) {
    }
}
