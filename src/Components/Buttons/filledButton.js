const FilledButton = ({ color, background, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-base rounded py-3 px-6 m-1 border-none ${background} ${color}`}
    >
      {text}
    </button>
  );
};

export default FilledButton;
