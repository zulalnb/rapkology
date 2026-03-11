import type { Metadata } from "next";
import { Saira, Saira_Condensed } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

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
	title: {
		default: "Rapkology - Rap Kültürünün İncelikleri, Sanatçı Profil ve Şarkı Analizleri",
		template: "%s - Rapkology",
	},
	description:
		"Rapkology, rap müziğin derinliklerine dalın. Rap sanatçıları, sözler ve şarkılar hakkında kapsamlı bilgiler, analizler ve daha fazlası. Rap dünyasının incelikleri burada!",
	openGraph: {
		title: "Rapkology - Rap Kültürünün İncelikleri, Sanatçı Profil ve Şarkı Analizleri",
		description:
			"Rapkology, rap müziğin derinliklerine dalın. Rap sanatçıları, sözler ve şarkılar hakkında kapsamlı bilgiler, analizler ve daha fazlası. Rap dünyasının incelikleri burada!",
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
