
export default function Sidebar(){
  return (
    <aside className="w-64 min-h-screen bg-[#0B1F4D] text-white p-6">
      <h1 className="text-2xl font-bold mb-10">CRED MAIS</h1>

      <nav className="space-y-4">
        <a className="block hover:text-blue-300" href="#">Dashboard</a>
        <a className="block hover:text-blue-300" href="#">Clientes</a>
        <a className="block hover:text-blue-300" href="#">Empréstimos</a>
        <a className="block hover:text-blue-300" href="#">Pagamentos</a>
      </nav>
    </aside>
  )
}
