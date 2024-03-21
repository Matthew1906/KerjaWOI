'use client'

import { useRef, useState } from "react";
import BaseModal from "../BaseModal";
import { Button } from "@/components/utils";
import { useRouter } from "next/navigation";
import { poppins_600 } from "@/app/lib/font";
import { inviteTeamMember } from "@/app/controllers/team";

const MemberModal = ({ slug, show, onHideModal, onSubmit }) => {
  const formRef = useRef();
  const [ error, setError ] = useState(false);
  const router = useRouter()
  const handleSubmit = async(event)=>{
    event.preventDefault();
    setError(false);
    const formData = new FormData(event.currentTarget);
    const result = await inviteTeamMember({team:slug, email:formData.get('email')})
    if(!result?.status){
      setError(result.message)
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
      <form className="text-black block" ref={formRef} onSubmit={handleSubmit}>
        <h3 className="text-center text-xl font-semibold mb-5">Add Member to Team</h3>
        <label htmlFor='email' className="text-lg font-semibold mb-2">Email: </label>
        <input
          type="email"
          name='email'
          placeholder="Enter email"
          className="grow outline-none p-2 rounded-md drop-shadow my-5 w-100 bg-dark-white"
          required
        />
        <div>
        {error && 
          <p className={`text-left text-Orange ${poppins_600.className}`}>{error}</p>
        }
        </div>
        <Button color="dark-purple" className='float-right'>
          Invite
        </Button>
      </form>
    </BaseModal>
  );
};

export default MemberModal;
