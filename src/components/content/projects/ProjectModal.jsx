'use client'

import { useState } from "react";
import BaseModal from "../BaseModal";
import Button from "@/components/utils/Button";
import TextInput from "@/components/input/TextInput";

const ProjectModal = ({ show, onHideModal, onSubmit }) => {
  const [projectDetail, setProjectDetail] = useState({});
  const [validate, setValidate] = useState(false);
  const changeTitle = (value) => {
    setValidate(false);
    setProjectDetail((prev) => ({ ...prev, title: value }));
  };
  const changeDescription = (value) => {
    setValidate(false);
    setProjectDetail((prev) => ({ ...prev, description: value }));
  };
  const submit = () => {
    if (projectDetail.title === undefined) {
      setValidate(true);
    } else {
      onSubmit(projectDetail);
    }
  };
  return (
    <BaseModal show={show} onHideModal={onHideModal} className="w-5/12 h-full">
      <div className="text-dark-purple p-5">
        <h3 className="text-center text-xl font-semibold mb-5">
          Create New Project
        </h3>
        {validate && (
          <p className="p-2 rounded-md bg-[#FF0000]/50 text-white mb-3">
            You need to at least input a project title!!
          </p>
        )}
        <label className="text-lg font-semibold mb-2">Project Name: </label>
        <TextInput
          placeholder=""
          onChange={changeTitle}
          className="my-5 w-100 bg-dark-white"
        />
        <label className="text-lg font-semibold mb-2">
          Project Description:{" "}
        </label>
        <TextInput
          placeholder=""
          onChange={changeDescription}
          className="my-5 w-100 h-24 bg-dark-white"
        />
        <Button color="dark-purple" onClick={submit} className="float-right">
          Create
        </Button>
      </div>
    </BaseModal>
  );
};

export default ProjectModal;
