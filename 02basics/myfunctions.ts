function addTwo(num: number): number {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email:string , isPaid: boolean = false) => {}

let myValue = addTwo(5)
getUpper("avasv")

signUpUser("jaco", "jaco@bob.bob", false)
loginUser("jaco", "h@g.com")

// function getValue(myVal: number) {
//     if(myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string):string => {
    return ""
}

const heros = ["Batman", "Superman", "Spiderman", "Ironman", "Hulk"]

heros.map((hero: string) => {
    return 2
})

function consoleError(errmsg: string): void {
    console.log(errmsg)
}

function handleError(errmsg: string): never {
    throw new Error(errmsg)
}

export {}