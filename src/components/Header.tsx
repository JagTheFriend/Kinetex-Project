import { Newspaper } from "lucide-react";

const Header = () => {
	return (
		<header className="border-b border-border bg-card py-6">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-center gap-3">
					<Newspaper className="h-8 w-8 text-primary" />
					<h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
						NEUZ-A News App
					</h1>
				</div>
			</div>
		</header>
	);
};

export default Header;
