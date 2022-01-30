const OutLinedButton = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${color} bg-transparent border-2 border-hoverGrey py-3 px-6 rounded m-1`}
    >
      {text}
    </button>
  );
};

export default OutLinedButton;
