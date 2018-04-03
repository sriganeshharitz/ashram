export class AppUser {
    constructor(
        public email?: string,
        public firstName?: string,
        public lastName?: string,
        public sbaId?: string,
        public address?: string,
        public phone?: string,
        public relatives?: string[],
        public gender?: string,
        public dateOfBirth?: Date) {
    }
}
