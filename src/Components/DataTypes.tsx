function DataTypes(){
    let name : string = "Palak";
    let age : number = 20;
    let isBool : boolean = true;

    //array
    let num : number[]=[10,20,30];
    let num2 : Array<number> = [10,20,30];

    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    let big: bigint = 100n;

    const message : String ="Hello TypeScript";
    let fullname : string = "John"
    let sentence : string = `Hello, my name is ${fullname}`;

    let u : undefined = undefined;
    let n : null = null;

    //object
    let student : { class : string , rollno : number } = {class : "MCA" , rollno : 718};

    type User_type = {
        email : string,
        password : number
    }
    let user : User_type = {email : "user@gmail.com" , password : 12345678};

    //function
    function product(num1 : number, num2 : number) : number {
        return num1*num2;
    }

    //Props
    type prop_type = {
        name : string
    }

    function getname({name} : prop_type){
        return {name};
    }

    return(
        <>
            <h2>Name : {name}</h2>
            <h2>Age : {age}</h2>
            <h2>Message : {message}</h2>
            <h2>{decimal}</h2>
            <h2>{hex}</h2>
            <h2>{binary}</h2>
            <h2>{octal}</h2>
            <h2>{big}</h2>
            <h2>{sentence}</h2>
            <h2>{student.class} {student.rollno}</h2>
            <h2>{user.email} {user.password}</h2>
            
        </>
    )
}

export default DataTypes;