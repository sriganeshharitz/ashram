import { Relative } from './relative';

export class CompleteBean {
    id: string;
    sbaId: string;
    fname: string;
    lname: string;
    email: string;
    password: string;
    address: string;
    gender: number;
    mobileNum: string;
    dob: number;
    relativeList: Relative[];
    active: boolean;
}
