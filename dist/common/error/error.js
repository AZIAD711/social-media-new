// GOLBAL ERROR
class ErrorMessage {
    constructor() { }
    // SHOW EMAIL IS EXSIT
    emailExsitError() {
        throw new Error("EMAIL IS INVALID");
    }
    // LOGIN ERROR 
    loginError() {
        throw new Error("EMAIL OR PASSWORD IS INVALID ! ");
    }
    // NOT FOUND EMAIL 
    notFoundEmailError() {
        throw new Error("EMAIL NOT FOUND ! ");
    }
    // INVALID OTP
    invalidOtpError() {
        throw new Error("INVALID OTP !");
    }
    // USER NOT FOUND 
    userNotFoundError() {
        throw new Error("USER NOT FOUND !");
    }
    // DUBLICATE TITLE OF POST 
    duplicateTitlePostError() {
        throw new Error("TITLE OF POST DUPLICATED ! ");
    }
    // POST NOT FOUND 
    postNotFoundError() {
        throw new Error("POST NOT FOUND !");
    }
}
export default new ErrorMessage();
