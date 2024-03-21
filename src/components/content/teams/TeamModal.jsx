'use client'

import { useRef, useState } from "react";
import BaseModal from "../BaseModal";
import Button from "@/components/utils/Button";
import { createTeam } from "@/app/controllers/team";
import { poppins_600 } from "@/app/lib/font";
import { useRouter } from "next/navigation";

const TeamModal = ({ show, onHideModal, onSubmit }) => {
  const formRef = useRef();
  const [ error, setError ] = useState(false);
  const router = useRouter()
  const handleSubmit = async(event)=>{
    event.preventDefault();
    setError(false);
    const formData = new FormData(event.currentTarget);
    const result = await createTeam({teamName:formData.get('teamName')})
    if(!result){
      setError('Team name already exist!')
    }
    else{
      formRef.current.reset();
      router.refresh();
      onSubmit()
    }
  }
  return (
    <BaseModal show={show} onHideModal={()=>{
      setError(false);
      onHideModal()
    }} className="w-5/12">
      <form ref={formRef} className="text-dark-purple" onSubmit={handleSubmit}>
        <h3 className="text-center text-xl font-semibold mb-10">Create New Team</h3>
        <label htmlFor='name' className="text-lg font-semibold mb-2">Team Name: </label>
        <input
          type="text"
          name='teamName'
          placeholder="Enter team name (permanent)"
          className='grow outline-none p-2 rounded-md drop-shadow my-5 w-100 bg-dark-white'
        />
        {error && <div><p className={`text-left text-Orange ${poppins_600.className}`}>{error}</p></div>}
        <Button color="dark-purple" className='float-right'>Create</Button>
      </form>
    </BaseModal>
  );
};

export default TeamModal;
