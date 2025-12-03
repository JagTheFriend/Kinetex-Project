import Header from "@/components/Header";
import NewsGrid from "@/components/NewsGrid";
import { newsArticles } from "@/data/newsData";

const Index = () => {
	return (
		<div className="min-h-screen bg-background">
			<Header />

			<main className="container mx-auto px-4 py-8">
				<NewsGrid articles={newsArticles} />
			</main>

			<footer className="border-t border-border py-6">
				<div className="container mx-auto px-4 text-center">
					<p className="font-body text-sm text-muted-foreground">
						© {new Date().getFullYear()} NEUZ-A News App. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Index;
