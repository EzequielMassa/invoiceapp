import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { auth, signIn } from "../utils/auth";
import { SubmitButton } from "../components/SubmitButtons";
import { redirect } from "next/navigation";

export default async function Login() {
	const session = await auth();

	if (session?.user) {
		redirect("/dashboard");
	}
	return (
		<>
			<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
				<div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
			</div>
			<div className="flex h-screen w-full items-center justify-center px-4">
				<Card className="max-w-sm">
					<CardHeader>
						<CardTitle className="text-2xl">Login</CardTitle>
						<CardDescription>Choose your login method</CardDescription>
					</CardHeader>
					<CardContent>
						<form
							action={async () => {
								"use server";
								await signIn("google");
							}}
							className="flex flex-col gap-y-4"
						>
							<SubmitButton text="Login with Google" />
						</form>
					</CardContent>
				</Card>
			</div>
		</>
	);
}