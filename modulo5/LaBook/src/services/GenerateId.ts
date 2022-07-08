import { v4 } from "uuid"

export class GenerateId {
    idGenerate = (): string => v4();
}