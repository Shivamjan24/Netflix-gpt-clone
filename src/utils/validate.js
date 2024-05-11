const validate = (email,passwrd) =>{
    const e=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const p=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passwrd);
    if(!e)
    return "email is not valid";
    if(!p)
    return "password is not valid";
    return null;
}

export default validate;