import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello, world!",
  description: "A blank Hello World screen",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
