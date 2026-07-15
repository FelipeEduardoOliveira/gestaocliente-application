// Tira tudo que não é número
const onlyNumbers = (value: string) => value.replace(/\D/g, "");

// CPF: 000.000.000-00
export function maskCPF(value: string): string {
  return onlyNumbers(value)
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

// CNPJ: 00.000.000/0000-00
export function maskCNPJ(value: string): string {
  return onlyNumbers(value)
    .slice(0, 14)
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
}

// CPF/CNPJ automático: detecta pela quantidade de dígitos digitados
export function maskCPFCNPJ(value: string): string {
  const digits = onlyNumbers(value);
  return digits.length > 11 ? maskCNPJ(value) : maskCPF(value);
}

// Telefone fixo/celular automático: (00) 0000-0000 ou (00) 00000-0000
export function maskPhone(value: string): string {
  const digits = onlyNumbers(value).slice(0, 11);

  if (digits.length <= 10) {
    // fixo: (00) 0000-0000
    return digits
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d{1,4})$/, "$1-$2");
  }

  // celular: (00) 00000-0000
  return digits
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{1,4})$/, "$1-$2");
}

// Celular fixo (sempre 9 dígitos): (00) 00000-0000
export function maskCellphone(value: string): string {
  return onlyNumbers(value)
    .slice(0, 11)
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{1,4})$/, "$1-$2");
}

// Instagram: garante que sempre comece com @, e não deixa o usuário apagar o @
export function maskInstagram(value: string): string {
  const clean = value.replace(/^@+/, "").replace(/\s/g, "");
  return clean ? `@${clean}` : "";
}

// Website: não é bem "máscara", é normalização — garante protocolo ao perder o foco
export function normalizeWebsite(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

// Email: não mascara (mascarar email digitando é uma péssima ideia, atrapalha o usuário)
// só normaliza lowercase e tira espaço
export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

// UF: só 2 letras, maiúsculas, sem número
export function maskUF(value: string): string {
  return value
    .replace(/[^a-zA-Z]/g, "")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Tipos de máscara suportados pelo componente Input.
 * "phone" = detecta fixo/celular automático
 */
export type MaskType =
  | "cpf"
  | "cnpj"
  | "cpfCnpj"
  | "phone"
  | "cellphone"
  | "instagram"
  | "uf";

const maskMap: Record<MaskType, (value: string) => string> = {
  cpf: maskCPF,
  cnpj: maskCNPJ,
  cpfCnpj: maskCPFCNPJ,
  phone: maskPhone,
  cellphone: maskCellphone,
  instagram: maskInstagram,
  uf: maskUF,
};

export function applyMask(type: MaskType, value: string): string {
  return maskMap[type](value);
}
