import TammysCalculator from "@/components/tammys-calculator"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Tammy&apos;s Calculator</h1>
      <TammysCalculator />
    </main>
  )
}
