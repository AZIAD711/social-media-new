// GOLBAL ERROR
class ErrorMessage {
    constructor() {}
    // SHOW EMAIL IS EXSIT
    emailExsitError():never{
        throw new Error("EMAIL IS INVALID")
    }
    // LOGIN ERROR 
    loginError():never{
        throw new Error("EMAIL OR PASSWORD IS INVALID ! ")
    }
    // NOT FOUND EMAIL 
    notFoundEmailError():never{
         throw new Error("EMAIL NOT FOUND ! ")
    }
    // INVALID OTP
    invalidOtpError():never{
       throw new Error("INVALID OTP !") 
    }
    // USER NOT FOUND 
    userNotFoundError():never{
       throw new Error("USER NOT FOUND !") 
    }
    // DUBLICATE TITLE OF POST 
    duplicateTitlePostError():never{
        throw new Error("TITLE OF POST DUPLICATED ! ") 
    }

}
export default new ErrorMessage()