// GOLBAL ERROR
class ErrorMessage {
    constructor() {}
    // SHOW EMAIL IS EXSIT
    emailExsitError():never{
        throw new Error("EMAIL IS INVALID")
    }
    // LOGIN ERROR 
    loginError(){
        throw new Error("EMAIL OR PASSWORD IS INVALID ! ")
    }
    // NOT FOUND EMAIL 
    notFoundEmailError(){
         throw new Error("EMAIL NOT FOUND ! ")
    }

}
export default new ErrorMessage()