import AuthComponent from "@/shared/components/AuthComponent";
import { Suspense } from "react";
import Register from "@/shared/components/register";

export default function Home() {
	return (
		<div>
			<p>text</p>
			<AuthComponent />
			<Suspense fallback={<div>DOWNLOADS</div>}>
				<Register />
			</Suspense>
		</div>
	);
}
