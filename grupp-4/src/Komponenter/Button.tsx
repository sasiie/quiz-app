// components/Button.tsx
type ButtonProps = {
  children: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button className="back-button">
      {children}
    </button>
  );
}