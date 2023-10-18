import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddProfile } from './Actions';

const ProfileDetils = () => {
    const [profile, setProfile] = useState({name: "" , email : "" , phoneNo : "" , dateOfBirth : "" , occupation : "" ,address : ""})
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmitDetails = (event) => {
        event.preventDefault()
        const checkItems = profile.name.trim() && profile.email.trim() && profile.phoneNo.trim() && profile.dateOfBirth.trim() && profile.occupation.trim() && profile.address.trim() 
        if(checkItems){
            const newProfile = {
                // id : uuidv4(),   
                name: profile.name , 
                email : profile.email , 
                phoneNo : profile.phoneNo , 
                dateOfBirth : profile.dateOfBirth, 
                occupation : profile.occupation ,
                address : profile.address,
            }
            dispatch(AddProfile(newProfile))
        }
    }

    const onCheckDetails = () => {
        navigate("/user")
      }
    
    return (
        <form className='mt-[4%] text-center' onSubmit={onSubmitDetails}>
            <h1 className='mb-[10px] text-[30px] font-[800] m-[20px] text-[#fc6c85] hover:underline'>Create Profile</h1>
            <div className='mt-[10px] text-[white]'>
                <label htmlFor='name'>Name :</label>
                <input type="text" id = "name" className='ml-[60px] bg-slate-200' onChange={e => setProfile({...profile,name:e.target.value})}/><br></br>
                <label className='mt-[10px]' htmlFor='email'>Email :</label>
                <input type="email" id = "email" className='ml-[60px] bg-slate-200' onChange={e => setProfile({...profile,email:e.target.value})}/><br></br>
                <label className='mt-[10px]' htmlFor='phone'>phone number :</label>
                <input type="phone" id = "phone" className='ml-[5px] bg-slate-200'onChange={e => setProfile({...profile,phoneNo:e.target.value})}/><br></br>
                <label className='mt-[10px] mr-[10px]' htmlFor='date'>Date of birth :</label>
                <input type="date" id = "date" className='bg-slate-200 text-[black]' onChange={e => setProfile({...profile,dateOfBirth:e.target.value})}/><br></br>
                <label className='mt-[10px]' htmlFor='occupation'>Occupation:</label>
                <input type="text" id = "occupation" className='ml-[28px] bg-slate-200'onChange={e => setProfile({...profile,occupation:e.target.value})}/><br></br>
                <label className='mt-[10px]' htmlFor='address'>Address :</label>
                <input type="text" id = "address" className='ml-[40px] bg-slate-200' onChange={e => setProfile({...profile,address:e.target.value})}/><br></br>
                <button className='button bg-[#000000]' type='submit'>Submit</button>
                <button className='button' onClick={onCheckDetails}>Check UserDetils</button>
            </div>  
        </form>
      )
}

export default ProfileDetils