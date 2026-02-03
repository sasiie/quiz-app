type Props = {
  title: string;
  leftSlot?: React.ReactNode;
};

export function Header({ title, leftSlot }: Props) {
  return (
    <header className="header">
      {leftSlot ?? <span />}

      <h1 className="header-title">{title}</h1>

      <span />
    </header>
  );
}