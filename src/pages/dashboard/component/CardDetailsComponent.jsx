import React, {useCallback, useEffect, useState} from "react";
// import cardImg from '../../../assets/image/cardgirl.svg'
import '../styles/CardDetailsComponent.css'
// import {useSelector, useDispatch} from "react-redux";
// import {addFirstName, addLastName, addMaidenName} from "../../../store/CardDetails";

function CardDetailsComponent(){
    // const firstName = useSelector((state)=> state.cardDetails.firstName)
    // const lastName = useSelector((state)=> state.cardDetails.lastName)
    // const maidenName = useSelector((state)=> state.cardDetails.maidenName)
    // const id = useSelector((state)=> state.cardDetails.id)
    // const username = useSelector((state)=> state.cardDetails.username)
    // const password = useSelector((state)=> state.cardDetails.password)
    // const gender = useSelector((state)=> state.cardDetails.gender)
    // const email = useSelector((state)=> state.cardDetails.email)
    // const phoneNumber = useSelector((state)=> state.cardDetails.phoneNumber)
    // const age = useSelector((state)=> state.cardDetails.age)
    // const dispatch = useDispatch()


    const[data, setData] = useState({})
    const [value, setValue] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError]= useState(null)



    // async function fetchProduct(){
    //     await fetch(url)
    //         .then(data=> data.json())
    //         .then(data=> {setValue(data); console.log(data)})
    //         .catch(err => setError(err.message))
    // }

    let count = 0;

    const fetchData= useCallback(async ()=>{

        count++

        const url = "https://dummyjson.com/users/"+count
        setIsLoading(true);
        try{
            const res = await fetch(url,{
                method:'GET',
                headers:{
                    'content-type': 'application/json'
                }
            });
            if(res.ok){
                const data = await res.json();
                setData(data);
                setIsLoading(false);

            }
            else{
                console.log('Error: Network connection was lost')
            }
        } catch(err){
            setError(err.message);
            setIsLoading(false);
        }
    }, []);



    useEffect(()=>{
            fetchData();
        }, [fetchData]
    
    )
    if(error){
        return <p>Error: {error}</p>
    }
    if(isLoading){
        return <p>Fetching...</p>
    }


    return(
        <div className="MainContainer">
        <div className="container">
                <img src={data.image} alt="pic" />
            <div className="details">
            <label htmlFor="id">
                Id: <input type="text" id="id" value= {data.id}/>
            </label>
            <label htmlFor="firstName">
                FirstName: <input type="text" id="firstName" value={data.firstName}/>
            </label>
            <label htmlFor="lastName">
                LastName: <input type="text" id="lastName" value={data.lastName}/>
            </label>
            <label htmlFor="maidenName">
                Maiden Name: <input type="text" id="maidenName" value= {data.maidenName} />
            </label>
            <label htmlFor="age">
                Age: <input type="text" id="age" value={data.age}/>
            </label>
            <label htmlFor="gender">
                Gender: <input type="text" id="gender" value={data.gender}/>
            </label>
            <label htmlFor="email">
                Email: <input type="text" id="email" value={data.email}/>
            </label>
            <label htmlFor="phoneNumber">
                Phone Number: <input type="text" id="phoneNumber" value={data.phone}/>
            </label>
            <label htmlFor="username">
                Username: <input type="text" id="username" value={data.username}/>
            </label>
            <label htmlFor="password">
                Password: <input type="text" id="password" value={data.password} />
            </label>
                <button onClick={fetchData}>Next</button>
            </div>

        </div>
        </div>
    )
}

export default CardDetailsComponent