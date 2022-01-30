const FilledButton = ({ color, background, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-base bg-${background} text-${color} rounded py-3 px-6 m-1 border-none`}
    >
      {text}
    </button>
  );
};

export default FilledButton;
