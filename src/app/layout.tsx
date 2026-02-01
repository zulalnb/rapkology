import type { Metadata } from "next";
import { Saira, Saira_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const saira = Saira({
	variable: "--font-saira",
	subsets: ["latin"],
});

const sairaCondensed = Saira_Condensed({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-saira-condensed",
});

export const metadata: Metadata = {
	title: "Rapkology - Rap Kültürünün İncelikleri, Sanatçı Profil ve Şarkı Analizleri",
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
				<Header />
				{children}
			</body>
		</html>
	);
}
