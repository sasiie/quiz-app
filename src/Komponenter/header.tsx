type Props = {
  title: string;
  onBack?: () => void;
};

export function Header({ title, onBack }: Props) {
  return (
    <header className="header">
      {onBack ? (
        <button className="back-button" onClick={onBack} aria-label="Tillbaka">
          ←
        </button>
      ) : (
        <span />
      )}

      <h1 className="header-title">{title}</h1>

      <span />
    </header>
  );
}
