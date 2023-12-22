export type RootStateType = {
    dialogsPage: DialogsPageType,
}


type DialogsPageType = {
    dialogs: DialogType[],
    messages: MessageType[],
}

type MessageType = {
    id: number, 
    message: string,
}

type DialogType = {
    id: number, 
    name: string,
}


let state:RootStateType = {
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Vika' },
            { id: 3, name: 'Alina' },
            { id: 4, name: 'Vasia' },
            { id: 5, name: 'Masha' },
        ],
        messages: [
            { id: 1, message: 'Lorem ipsum dolor sit amet.' },
            { id: 2, message: 'Lorem ipsum dolor sit amet consectetur' },
            { id: 3, message: 'Lorem ipsum dolor sit amet consectetur' },
            { id: 4, message: 'Lorem ipsum dolor sit.' },
        ]
    }
}

export default state;