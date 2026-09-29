// GOLBAL ERROR
class ErrorMessage {
    constructor() { }
    // SHOW EMAIL IS EXSIT
    emailExsit() {
        throw new Error("EMAIL IS INVALID");
    }
}
export default new ErrorMessage();
