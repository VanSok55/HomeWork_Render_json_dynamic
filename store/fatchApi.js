const Base_Url = "https://fakestoreapi.com/";

export async function getData(endUser)
{
    try{
        const data = await fetch(`${Base_Url}${endUser}`);
        const res = await data.json();
        return res;
    }catch(Error){
        console.log("Error",Error);
    }
    
}