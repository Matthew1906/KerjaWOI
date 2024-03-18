'use client'

import { useState } from "react";
import BaseModal from "../BaseModal";
import Button from "@/components/utils/Button";
import TextInput from "@/components/input/TextInput";

const TeamModal = ({ show, onHideModal, onSubmit }) => {
  const [teamName, setTeamName] = useState("");
  const onChange=(e)=>setTeamName(e);
  const submit = (teamName)=>onSubmit(teamName);
  const submitFromButton = ()=>onSubmit(teamName);
  return (
    <BaseModal show={show} onHideModal={onHideModal} className="w-5/12">
      <div className="text-dark-purple">
        <h3 className="text-center text-xl font-semibold mb-10">Create New Team</h3>
        <label className="text-lg font-semibold mb-2">Team Name: </label>
        <TextInput placeholder="" submit={submit} onChange={onChange} className='my-5 w-100 bg-dark-white'/>
        <Button color="dark-purple" onClick={submitFromButton}className='float-right'>Create</Button>
      </div>
    </BaseModal>
  );
};

export default TeamModal;
