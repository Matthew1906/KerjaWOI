'use client'

import { joinTeam } from "@/app/controllers/team";
import BaseModal from "../BaseModal";
import { Button } from "@/components/utils";
import { useRouter } from "next/navigation";

const MemberApprovalModal = ({ show, onHideModal, invitations }) => {
  const router = useRouter();
  const handleJoin = async(invitation)=>{
    await joinTeam(invitation.userName, invitation.teamName);
    router.refresh();
  }
  return (
    <BaseModal show={show} onHideModal={()=>{
      onHideModal()
    }} className="w-5/12">
      {invitations.length>0
      ? (
        invitations.map((invitation, key)=>{
          return(
            <div key={key} className="mt-12 flex items-center gap-4">
              <p>You are invited to join team {invitation.team.name}!</p>
              <form onSubmit={(e)=>{
                e.preventDefault()
                handleJoin(invitation);
              }}>
                <Button color="dark-purple">Join</Button>
              </form>
            </div>
          )
        })
      )
      : <p>No invitations!</p>
      }
    </BaseModal>
  );
};

export default MemberApprovalModal;
