'use client'

import { useState } from "react";
import BaseModal from "../BaseModal";
import { TextInput } from "@/components/input";
import { Button } from "@/components/utils";

const MemberModal = ({ show, onHideModal, onSubmit }) => {
  const [peopleDetail, setPeopleDetail] = useState({});
  const [validate, setValidate] = useState(false);
  const changeEmail = (value) => {
    setValidate(false);
    setPeopleDetail((prev) => ({ ...prev, email: value }));
  };
  const changeMessage = (value) => {
    setValidate(false);
    setPeopleDetail((prev) => ({ ...prev, message: value }));
  };
  const submit = () => {
    if (peopleDetail.email === undefined) {
      setValidate(true);
    } else {
      onSubmit(peopleDetail);
    }
  };
  return (
    <BaseModal show={show} onHideModal={onHideModal} className="w-5/12">
      <div className="text-black">
        <h3 className="text-center text-xl font-semibold mb-5">Add Project</h3>
        {validate && (
          <p className="p-2 rounded-md bg-[#FF0000]/50 text-white mb-3">
            You need to input email!!
          </p>
        )}
        <label className="text-lg font-semibold mb-2">Email: </label>
        <TextInput
          placeholder=""
          onChange={changeEmail}
          className="my-5 w-100 bg-dark-white"
        />
        <label className="text-lg font-semibold mb-2">Message: </label>
        <TextInput
          placeholder=""
          onChange={changeMessage}
          className="my-5 w-100 h-24 bg-dark-white"
        />
        <Button color="dark-purple" onClick={submit} className="float-right">
          Invite
        </Button>
      </div>
    </BaseModal>
  );
};

export default MemberModal;
