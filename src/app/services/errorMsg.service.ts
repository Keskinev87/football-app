export class ErrorMsgService {

    public errorMsgs: Object = {
        games: {
            401: "Game already exists",
            404: "No such game found"
        }
    }     


    getErrMsg(code: number, componentCategory: string) { 
        return this.errorMsgs[componentCategory][code]
    }

}