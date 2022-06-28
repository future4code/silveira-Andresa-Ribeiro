import axios from "axios"
import { Address } from "../type/type"
import { Request, Response } from 'express';


export const getAddress = async (cep: string): Promise<Address | undefined> => {
    try {

        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        const address: Address = {
            cep: cep,
            logradouro: result.data.logradouro,
            numero: result.data.numero,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf
        }

        return address;

    } catch (error) {
        return undefined;
    }
}