import { useEffect, useState } from "react";

export default function useFirstVisit(key = "enquiryShown") {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem(key);
    if (!alreadyShown) {
      setShow(true);
    }
  }, [key]);

  const close = () => {
    localStorage.setItem(key, "true");
    setShow(false);
  };

  return { show, close };
}
