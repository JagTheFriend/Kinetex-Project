import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export default function CustomError() {
	return (
		<div className="flex flex-col">
			<Alert variant="destructive">
				<AlertCircleIcon />
				<AlertTitle>Oops, something went wrong!</AlertTitle>
				<AlertDescription>
					<p>Please try again later.</p>
				</AlertDescription>
			</Alert>
		</div>
	);
}
