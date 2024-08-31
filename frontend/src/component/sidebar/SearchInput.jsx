import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5"
import useConversation from "../../../zustand/useConversation"
import useGetConservation from '../../hooks/UseGetConservation'
import toast from 'react-hot-toast'

const SearchInput = () => {
  const [search, setSearch] = useState("")
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConservation();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      return;
    }

    const conversation = conversations.find((conversation) =>
      conversation?.username?.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No user found");
    }
  };

  return (
    <form className="d-flex align-items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="form-control rounded-pill"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-primary rounded-circle">
        <IoSearchSharp className="h5 m-0" />
      </button>
    </form>
  );
}

export default SearchInput