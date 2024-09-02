import { useEffect, useState } from "react";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/messages/${selectedConversation?._id}`);
      const data = await res.json();

      if (data.error) throw new Error(data.error);

      setMessages(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(error.message);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedConversation?._id) {
      fetchMessages();
    } else {
      setMessages([]);
    }
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading, fetchMessages };
};

export default useGetMessages;
