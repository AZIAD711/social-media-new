// LOGIN DTO 
export interface ILoginDto {
    email : string,
    password : string
}
// RESET PASSWORD
export interface IResetPassword{
    email:string, 
    password:string, 
    otp:number
}