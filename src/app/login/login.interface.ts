import { FormGroup } from '@angular/forms';

export interface ILoginComponent {
    form: FormGroup;
    onSubmit(): void;
}

export interface ILogin {
    email: string;
    password: string;
    remember: boolean;
}