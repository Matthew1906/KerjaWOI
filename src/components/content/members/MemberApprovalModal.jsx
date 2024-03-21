'use client'

import { useRef, useState } from "react";
import BaseModal from "../BaseModal";
import { Button } from "@/components/utils";
import { useRouter } from "next/navigation";
import { poppins_600 } from "@/app/lib/font";
import { inviteTeamMember } from "@/app/controllers/team";

const MemberApprovalModal = ({ show, onHideModal, onSubmit }) => {
  
  return (
    <BaseModal show={show} onHideModal={()=>{
      onHideModal()
    }} className="w-5/12">
      <p>TBD: Member Approval Modal</p>
    </BaseModal>
  );
};

export default MemberApprovalModal;
