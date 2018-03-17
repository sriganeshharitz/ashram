export class Bean {
    constructor(
        public email: string,
        public password: string,
        public fname: string = '',
        public lname: string = '',
        public mobileNum: string = '',
        public address: string = '') {
    }
}
