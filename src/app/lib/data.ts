import { Client, User } from "../lib/model";
import { connectToDB } from "./utils";

export const fetchClients = async (id: string)=> {
    try {
        connectToDB();
        const clients = await Client.find({responsible: id}).lean();
        return clients.map(client => ({
            id: client._id.toString(),
            accountNumber: client.accountNumber,
            surname: client.surname,
            name: client.name,
            lastname: client.lastname,
            dateOfBirth: client.dateOfBirth,
            TIN: client.TIN,
            status: client.status,
          }));
    } catch(e){
        console.log(e)
        throw e
    }
}