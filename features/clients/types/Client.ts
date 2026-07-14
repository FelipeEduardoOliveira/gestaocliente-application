export interface Client {
  companyName: string;
  email: string;
  cpf: string;
  cnpj: string;
  phone: string;
  facebook: string;
  instagram: string;
  website: string;
  status: string;
}

export interface CreateClient {
  companyName: string;
  email: string;
  cpf?: string;
  cnpj?: string;
  phone?: string;
  instagram?: string;
  website?: string;
  facebook?: string;
  status?: string;
}
