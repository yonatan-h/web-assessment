export default function TabButton({
  isSelected,
  text,
  onClick,
}: {
  isSelected: boolean;
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={() => onClick()}
      className={`
        p-2 rounded-lg font-bold
         ${isSelected ? "bg-primary/10 text-primary" : "text-gray-500"}`}
    >
      {text}
    </button>
  );
}
