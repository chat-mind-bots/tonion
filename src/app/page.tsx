import AuthComponent from "@/shared/components/AuthComponent";
import { Suspense } from "react";
import Register from "@/shared/components/register";
import { GetUser } from "@/shared/components/get-user";

export default function Home() {
	return (
		<div>
			<p>text</p>
			<AuthComponent />
			<Suspense fallback={<div>DOWNLOADS</div>}>
				<Register />
			</Suspense>
			<Suspense fallback={<div>User Download</div>}>
				<GetUser />
			</Suspense>
		</div>
	);
}
