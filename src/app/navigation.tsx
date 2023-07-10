import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navigation() {
	return (
		<div className="flex flex-row items-center justify-between p-2 bg-gray-700">
			<button>Poll Creator</button>
			<div className="rounded-full w-5 h-8 bg-red-500"></div>
		</div>
	);
}
