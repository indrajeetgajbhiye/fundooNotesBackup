export class Model {
    title?: string = ""
    description?: string = ""
    color: string = "#ffffff"
    createdDate: Date
    modifiedDate: Date
    id: string
    imageUrl: string
    isArchived: boolean = false
    isDeleted: boolean = false
    isPined: boolean = false
    reminder: Array<string> = []
    noteLabels: Array<Label> = []
    userId: string
    labelIdList: any = []
    noteCheckLists: Array<Checklists> = []
    questionAndAnswerNotes: [Object]
    collaborators: any = [];
    user?: {
        createdDate?: Date
        email: String
        emailVerified: boolean
        firstName: String
        id: String
        imageUrl: String
        lastName: String
        modifiedDate: Date
        role: String
        service: String
        username: String
    }
}
export interface Label {
    id: string
    label: string
    isDeleted: boolean
    userId: string

}
export interface Checklists {
    createdDate: Date
    id: string
    isDeleted: boolean
    itemName: string
    modifiedDate: Date
    notesId: string
    status: string
}

export interface userList {
    "firstName": string
    "lastName": string
    "email": string
    "userId": string
}

export class Question{
    message : string;
    like : any;
    rate : any;
    user : any;
    createdDate : Date;
}
export class Reply{
    message : string;
    id : string;
}
export class rating{
    rate : string;
    id : string;
}

export class inputCheckList{
    itemName : string;
    status : string;
}