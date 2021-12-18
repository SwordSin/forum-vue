export interface RegisterForm {
    username: string;
    password: string;
    netName: string;
    passwordAgain: string;
    email: string;
}

export interface ResponseBodyType {
    status: number;
    desc: string;
    data: any;
}