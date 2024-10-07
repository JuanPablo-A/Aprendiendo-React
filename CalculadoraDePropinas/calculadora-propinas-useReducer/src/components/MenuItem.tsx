import type { MenuItem } from "../types";

type MenuItemProps = {
	item: MenuItem;
	addItem: ( item: MenuItem ) => void;
};

export default function MenuItem({ item, addItem }: MenuItemProps) {
	return (
		<button className="border-2 border-teal-400 w-full rounded-md p-3 hover:bg-teal-200 flex justify-between" 
		onClick={() => addItem(item)}
		>
			<div>{item.name}</div>
			<p className="font-black">${item.price}</p>
		</button>
	);
}
