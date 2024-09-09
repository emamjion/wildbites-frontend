"use server";

export const registerUser = async(data) => {
    const res = await fetch(`${process.env.BACKEND_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(data),
        cache: 'no-store'
    });
    const userInfo = await res.json();
    return userInfo;
}



        // console.log(newUser);
        // try{
        //     const res = await registerUser(data);
        //     console.log(res);
        // }catch(err){
        //     console.error(err.message);
        // }