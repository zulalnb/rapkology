import type { Metadata } from "next";
import { Saira, Saira_Condensed } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { BASE_URL } from "@/lib/constants";

const NEXT_VERSION = process.env.NEXT_PUBLIC_NEXT_VERSION
	? `Next.js ${process.env.NEXT_PUBLIC_NEXT_VERSION}`
	: "Next.js";

const metaTitle = "Rapkology - Rap Kültürünün İncelikleri, Sanatçı Profil ve Şarkı Analizleri";
const metaDescription =
	"Rapkology, rap müziğin derinliklerine dalın. Rap sanatçıları, sözler ve şarkılar hakkında kapsamlı bilgiler, analizler ve daha fazlası. Rap dünyasının incelikleri burada!";

const saira = Saira({
	variable: "--font-saira",
	subsets: ["latin"],
	display: "swap",
});

const sairaCondensed = Saira_Condensed({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-saira-condensed",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: {
		default: metaTitle,
		template: "%s - Rapkology",
	},
	description: metaDescription,
	generator: NEXT_VERSION,
	openGraph: {
		title: metaTitle,
		description: metaDescription,
		locale: "tr_TR",
		type: "website",
		siteName: "Rapkology",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="tr">
			<body className={`${saira.variable} ${sairaCondensed.variable} antialiased`}>
				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
