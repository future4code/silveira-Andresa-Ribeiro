import { Address } from '../type/type';
import { connection } from './connection';


export const insertAddressInTheBody = async (cep: string, address: Address, numero: number, complemento: string | undefined) => {
    const {logradouro, bairro, cidade, estado} = address;

    await connection(`address`).insert({cep, logradouro, numero, complemento, bairro, cidade, estado})
}