interface EmailTemplateProps {
  nome: string;
  email: string;
  cell: string;
  mensagem: string;
}

export const EmailTemplate = ({ cell, email, mensagem, nome }: EmailTemplateProps) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.5",
      color: "#333",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "5px",
    }}
  >
    <h1 style={{ fontSize: "24px", marginBottom: "20px", color: "#d9534f" }}>
      Nova Mensagem de Contato
    </h1>
    <p style={{ fontSize: "16px", marginBottom: "20px" }}>
      Você recebeu uma nova mensagem de contato com os seguintes detalhes:
    </p>
    <p style={{ fontSize: "16px", marginBottom: "10px" }}>
      <strong>Nome:</strong> {nome}
    </p>
    <p style={{ fontSize: "16px", marginBottom: "10px" }}>
      <strong>Email:</strong> {email}
    </p>
    <p style={{ fontSize: "16px", marginBottom: "10px" }}>
      <strong>Celular:</strong> {cell}
    </p>
    <p style={{ fontSize: "16px", marginBottom: "20px" }}>
      <strong>Mensagem:</strong> {mensagem}
    </p>
    <p style={{ fontSize: "16px" }}>
      Atenciosamente,
      <br />
      Equipe da NexusTechStore
    </p>
  </div>
);
