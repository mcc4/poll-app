"use client";

import { Input } from "@/components/ui/input";
import { z } from "zod";

const pollSchema = z.object({
	title: z.string().min(1),
	options: z.array(z.string().min(1)),
});

export type Poll = z.infer<typeof pollSchema>;

export default function AddPoll() {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const data = Object.fromEntries(formData.entries());

		const res = await fetch("/api/polls", {
			method: "POST",
			body: JSON.stringify(data),
		});

		if (!res.ok) {
			throw new Error("Failed to create poll");
		}

		const poll = await res.json();
		console.log(poll);
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-5">
			<Input type="text" placeholder="Poll Title" />
			<hr />
			<Input type="text" placeholder="Option 1" />
			<Input type="text" placeholder="Option 2" />

			<Input
				disabled={
					pollSchema.safeParse({ title: "", options: [] }).success
				}
				type="submit"
				className="rounded p-2 bg-green-500 text-gray-100 active:scale-110 hover:scale-105 transition duration-300"
				value="Create Poll"
			/>
		</form>
	);
}
