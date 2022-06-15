import { getAddress } from './getAddress';
import { insertAddressInTheBody } from '../data/insertAddressInTheBody';
import { Request, Response } from 'express';

export const insertAddress = async (req: Request, res: Response) => {

    try{
        const cep = req.params.cep;
        const numero = Number(req.query.numero);
        const complemento = req.params.complemento as string | undefined;

        const address = await getAddress(cep);

        if(!address){
            throw new Error("CEP inválido!")
        }
        if(!numero || isNaN(numero)) {
            throw new Error ("Por favor, insira na query um número para validar seu endereço!")
        }

        await insertAddressInTheBody(cep, address, numero, complemento)

        res.status(201).send("Endereçoo criado com sucesso")
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}