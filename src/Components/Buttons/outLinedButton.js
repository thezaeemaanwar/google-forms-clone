const OutLinedButton = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-${color} bg-transparent border-2 border-grey py-3 px-6 rounded m-1`}
    >
      {text}
    </button>
  );
};

export default OutLinedButton;
