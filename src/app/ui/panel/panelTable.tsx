import { PanelRow } from "./panelRow";

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

interface ClientsTableProps {
    clients: Client[];
}

const PanelTable = async ({ clients }: ClientsTableProps) => {
    return (
        <table className="p-2 w-screen border rounded-2xl border-indigo-300 text-white gap-2 border-separate border-spacing-5">
            <thead>
                <tr>
                    <th id="number" className="table-head">
                        №
                    </th>
                    <th id="lastname" className="table-head">
                        Фамилия
                    </th>
                    <th id="name" className="table-head">
                        Имя
                    </th>
                    <th id="surname" className="table-head">
                        Отчество
                    </th>
                    <th id="birthday" className="table-head">
                        Дата Рождения
                    </th>
                    <th id="fullname_responsible" className="table-head">
                        ФИО Отвественного
                    </th>
                    <th id="status" className="table-head">
                        Статус
                    </th>
                </tr>
            </thead>
            <tbody>
                {clients.map((client) => (
                    <PanelRow key={client.id} client={client} />
                ))}
            </tbody>
        </table>
    );
};

export default PanelTable;
