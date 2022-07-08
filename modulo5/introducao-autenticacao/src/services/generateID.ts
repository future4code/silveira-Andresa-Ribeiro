import { v4 } from "uuid";

export function generateID(): string {
  return v4()
}