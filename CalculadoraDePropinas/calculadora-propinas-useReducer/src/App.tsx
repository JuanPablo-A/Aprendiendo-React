import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPorcentageFor from "./components/TipPorcentageFor";

function App() {
	const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();

	return (
		<>
			<header className="bg-teal-400 py-5">
				<h1 className="text-center text-4xl font-black">
					Calculadora de propinas y consumo
				</h1>
			</header>

			{/* md = media querys */}
			<main className="max-w-7xl mx-40 mt-20 grid md:grid-cols-2">
				<div className="p-5">
					<h2 className="text-4xl font-black">Menu</h2>

					<div className="space-y-3 mt-10">
						{menuItems.map((item) => (
							<MenuItem 
								key={item.id} 
								item={item} 
								addItem={addItem}
							/>
						))}
					</div>
				</div>

				<div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
					{order.length > 0 ? (
						<>
							<OrderContents 
							order= {order}
							removeItem={removeItem}
							/>

							<TipPorcentageFor 
								setTip={setTip}
								tip={tip}
							/>

							<OrderTotals 
								order={order}
								tip	={tip}
								placeOrder={placeOrder}
							/>
						</>
					) : (
						<p className="text-lg text-center"> La orden esta vacia </p>
					)}
				</div>
			</main>
		</>
	);
}

export default App;
