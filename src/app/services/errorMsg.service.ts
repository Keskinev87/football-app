export class ErrorMsgService {

    public errorMsgs: Object = {
        games: {
            401: "Game already exists",
            404: "Game not found"
        }
    }     


    getErrMsg(code: number, componentCategory: string) { 
        return this.errorMsgs[componentCategory][code]
    }

}