import dynamic from "next/dynamic";

const TinaAdmin = dynamic(() => import("tinacms/dist/admin"), { ssr: false });

export default function AdminPage() {
  return <TinaAdmin />;
}