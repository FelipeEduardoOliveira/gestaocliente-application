import { SetStateAction } from "react";
import { Client, UpdateClient } from "./Client";

export interface IClientTable {
  data: Client[];
  isLoading: boolean;
  setUpdateCient: React.Dispatch<SetStateAction<UpdateClient | null>>;
  onNewClient: () => void;
}
