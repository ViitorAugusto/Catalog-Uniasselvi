export const handleCellInput = (event: React.FormEvent<HTMLInputElement>) => {
  const target = event.target as HTMLInputElement;
  const value = target.value.replace(/\D/g, "");
  const formattedValue = value
    .replace(/^(\d{2})(\d)/g, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .slice(0, 15);
  target.value = formattedValue;
};
