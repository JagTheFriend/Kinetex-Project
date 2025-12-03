import type { NewsArticle } from "@/data/newsData";

type NewsGridProps = {
	articles: NewsArticle[];
};

const NewsGrid = ({ articles }: NewsGridProps) => {
	return (
		<div className="flex flex-col gap-8">
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"></div>
		</div>
	);
};

export default NewsGrid;
