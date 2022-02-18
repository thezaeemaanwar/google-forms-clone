const { useEffect } = require("react");

const useOutsideAlert = (ref, actionCallback) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        actionCallback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, actionCallback]);
};

export default useOutsideAlert;
