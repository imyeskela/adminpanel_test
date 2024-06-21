"use client";
import { changeStatus } from "@/app/lib/actions";
import { useState, useTransition } from "react";

interface Client {
    id: string;
    accountNumber: string;
    surname: string;
    name: string;
    lastname: string;
    dateOfBirth: string;
    TIN: string;
    status: string;
}

interface PanelRowProps {
    client: Client;
}
export const PanelRow = ({ client }: PanelRowProps) => {
    const [status, setStatus] = useState(client.status);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value;
        setStatus(newStatus);
    
        startTransition(async () => {
          await changeStatus(client.id, newStatus);
        });
      };
    return (
        <tr>
            <td className="table-cell">{client.accountNumber}</td>
            <td className="table-cell">{client.surname}</td>
            <td className="table-cell">{client.name}</td>
            <td className="table-cell">{client.lastname}</td>
            <td className="table-cell">{client.dateOfBirth}</td>
            <td className="table-cell">{client.TIN}</td>
            <td className="table-cell">
                <select
                    name="status"
                    id="status"
                    className="select-cell bg-inherit"
                    defaultValue={status}
                    onChange={handleChange}
                    disabled={isPending}
                >
                    <option value="В работе">В работе</option>
                    <option value="Отказ">Отказ</option>
                    <option value="Сделка закрыта">Сделка закрыта</option>
                </select>
            </td>
        </tr>
    );
};
