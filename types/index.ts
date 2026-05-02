export type User={
    id:number
    fullName:string
    age:number
    passWord:string
    isStudent:boolean
    created_at:string
}

export type Category={
    id:string
    name:string
    created_at:string
}

export type Product={
    id:string
    title:string
    description:string
    price:number
    imageUrl:string
    category:{
        id:string
        name:string 
    }
}