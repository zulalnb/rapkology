import { getPosts } from "@/lib/fetch-posts";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);

		const page = Math.max(1, Number(searchParams.get("page") ?? "1"));
		const limit = Math.min(50, Math.max(1, Number(searchParams.get("limit") ?? "6")));

		const res = await getPosts({ limit, page });

		return Response.json(res);
	} catch {
		return Response.json({ error: "Something went wrong" }, { status: 500 });
	}
}
