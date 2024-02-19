let a = {
    name: 'it-camasutra.com',
    protocol: 'https',
    maxStudentsCount: 10,
    isOnline: true,
    strdents: ['ivan', 'andrey', 'farid'],
    classroom: {
        teacher: {
            name: 'wew',
            age: 18
        }
    }
}



let b = {
    ...a,
    strdents: [...a.strdents],
    classroom: {...a.classroom, teacher: {...a.classroom.teacher}}
}

a.name = '1'
a.strdents = ['2']
a.classroom.teacher.name = 'vova'
a.classroom = {new: '123'}

console.log(a)
console.log(b)  