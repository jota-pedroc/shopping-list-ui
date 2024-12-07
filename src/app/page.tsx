import ShoppingListPage from "./list/page";

export default function Home() {
  return (
    <div className="grid justify-items-center">
      <main className="">
        <h1 className="text-3xl">Home</h1>
        <ShoppingListPage />
      </main>
    </div>
  );
}
