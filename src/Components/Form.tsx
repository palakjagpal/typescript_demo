import  React,{ useState } from "react";
import type {FormEvent, ChangeEvent} from "react";
import './Form.css';

function Form(){

    //validation
    type value_type = {
        name ?: string;
        email ?: string;
        password ?: string;
    };

    const[name, setname] = useState<string>("");
    const[email,setemail] = useState<string>("");
    const[password, setpassword] = useState<string>("");
    const[errors,seterrors] = useState<value_type>({});
    const [success, setsuccess] = useState("");

    const emailRegex = /^\S+@\S+\.\S+$/;

    function execute(e : React.FormEvent<HTMLFormElement>){
        //e → the event parameter (usually passed to an event handler)
        //React.FormEvent → a React-specific event type for form-related events (like submit)
        //<HTMLFormElement> → specifies that the event is coming from a <form> element

        e.preventDefault();

        if(validate()){
            setsuccess("Form Submitted successfully");
        }
    }

    function validate(){
        /*
            const → declares a constant variable (cannot be reassigned)
            newErrors → variable name
            : value_type → TypeScript type annotation (the variable must follow the Errors type)
            = {} → initializes it as an empty object
            Creates an empty object called newErrors that must follow the structure defined by the value_type type
        */
       const newErrors : value_type = {};

       if(!name){
            /*newErrors → an object storing validation errors
            .name → a property for the “name” field*/
            newErrors.name = "Name is required";
       }
       if(!email){
        newErrors.email = "Email is required";
       }else if (!emailRegex.test(email)) {
            newErrors.email = "Invalid email";
        }
       if(!password){
        newErrors.password = "Password is required";
       } else if(password.length<8){
            newErrors.password = "Password must be atleast of 8 characters";
       }
       seterrors(newErrors);

       /*
        Object.keys(newErrors) → gets all the keys (properties) in the newErrors object
        .length → counts how many keys are present
        === 0 → checks if there are zero keys
        Return true if there are no errors, otherwise return false
        If newErrors is empty - no validation errors valid form
        It checks if the error object is empty → meaning the form is valid.
        */
       return Object.keys(newErrors).length === 0;

    }


    return(
        <>

            <h2>FORM VALIDATION</h2>
            <hr></hr>
            {success && <p>{success}</p>}
            <div className="form">
                <form onSubmit={execute}>
                    <label>Name : </label>
                    <input type="text" placeholder="John Doe" value={name} onChange={(e) => setname(e.target.value)}></input>
                    {errors.name && <p>{errors.name}</p>}

                    <label>Email : </label>
                    <input type="email" placeholder="example@gmail.com" value={email} onChange={(e) => setemail(e.target.value)}>
                    </input>
                    {errors.email && <p>{errors.email}</p>}

                    <label>Password : </label>
                    <input type="password" placeholder="********" value={password} onChange={(e) => setpassword(e.target.value)}></input>
                    {errors.password && <p>{errors.password}</p>}

                    <button type="submit">CREATE ACCOUNT</button>
                </form>
            </div>
        </>
    )
}

export default Form;