
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";

export default function Home(){
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card title="Total a receber" value="R$ 15.320,00"/>
          <Card title="Recebido no mês" value="R$ 7.450,00"/>
          <Card title="Inadimplentes" value="3"/>
        </div>

        <div className="bg-white rounded-xl shadow mt-8 p-5">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="py-3">Cliente</th>
                <th>Valor</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-4">Rafael Souza</td>
                <td>R$ 1.120,00</td>
                <td className="text-red-500">Em atraso</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
