// GOLBAL ERROR
class ErrorMessage {
    constructor() {}
    // SHOW EMAIL IS EXSIT
    emailExsit():never{
        throw new Error("EMAIL IS INVALID")
    }

}
export default new ErrorMessage()