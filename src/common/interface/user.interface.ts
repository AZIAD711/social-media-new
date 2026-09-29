import { GenderEnum } from "../enum/gender.enum.js"
import { ProviderEnum } from "../enum/provider.enum.js"
import { StatusAccountEnum } from "../enum/status-account.enum.js"
import { UserRoleEnum } from "../enum/user-role.enum.js"

export interface IUser {
    // FIRST NAME
    firstName: string,

    // LAST NAME
    lastName: string,

    // EMAIL
    email: string,

    // PASSWORD
    password: string,

    // ADDRESS
    address: string,

    // GENDER
    gender: GenderEnum,

    // PHONE NUMBER
    phoneNumber: string,

    // AGE
    age: number,

    // CONFIRM EMAIL
    confirmEmail?: boolean,

    // PROFILE IMAGE
    profileImage?: string,
    // ROLE 
    role: UserRoleEnum,
    // PROVIDER 
    provider: ProviderEnum,
    // CHANGE CREDINATILS 
    changeCredintals: Date,
    // STATUS ACCOUNT 
    statusAccount: StatusAccountEnum
}