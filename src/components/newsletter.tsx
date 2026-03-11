"use client";

import { SyntheticEvent } from "react";
import { ArrowRight } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "./ui/input-group";
import { Label } from "./ui/label";

export default function Newsletter() {
	function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
		e.preventDefault();

		const form = e.currentTarget;
		const formData = new FormData(form);
		const email = formData.get("email")?.toString().trim();

		if (!email) {
			console.log("Email boş");
			return;
		}

		console.log("Gönderilen email:", email);

		form.reset();
	}

	return (
		<form onSubmit={handleSubmit}>
			<p className="font-saira-cond mb-21 text-2xl font-bold uppercase md:mb-14">
				Gelişmelerden İlk Sen Haberdar Ol!
			</p>
			<div className="group relative">
				<InputGroup className="border-b-black-900 rounded-none border-t-0 border-r-0 border-l-0 has-[[data-slot=input-group-control]:focus-visible]:ring-0">
					<div className="relative w-full">
						<InputGroupInput id="email" name="email" type="email" required placeholder=" " className="peer" />

						<Label
							htmlFor="email"
							lang="en"
							className="pointer-events-none absolute top-2.5 left-3 z-10 origin-left font-bold uppercase transition-transform peer-focus:-translate-x-3 peer-focus:-translate-y-5 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-x-3 peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:scale-75"
						>
							Email
						</Label>
					</div>

					<InputGroupAddon align="inline-end">
						<InputGroupButton type="submit" variant="link" className="text-yellow font-bold uppercase">
							Gönder <ArrowRight />
						</InputGroupButton>
					</InputGroupAddon>
				</InputGroup>
			</div>
		</form>
	);
}
