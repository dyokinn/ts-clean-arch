import { IClient } from "./IClient";

export class AxiosClient implements IClient{
    connString: string;

    constructor(connString: string){
        this.connString = this.connString
    }        

    get() {
        throw new Error("Method not implemented.");
    }
    post() {
        throw new Error("Method not implemented.");
    }
    put() {
        throw new Error("Method not implemented.");
    }
    delete() {
        throw new Error("Method not implemented.");
    }

}