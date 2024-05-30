interface EmailTemplateProps {
  nome: string;
  email: string;
  cell: string;
  mensagem: string;
}

export const EmailTemplate = ({
  cell,
  email,
  mensagem,
  nome,
}: EmailTemplateProps) => (
  <div className="border border-red-300 space-y-4 ">
    <h1>Welcome, {nome}!</h1>
    <p>Thank you for contacting us. Here is the information you provided:</p>
    <p>
      <strong>Name:</strong> {nome}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Cell:</strong> {cell}
    </p>
    <p>
      <strong>Message:</strong> {mensagem}
    </p>
  </div>
);
