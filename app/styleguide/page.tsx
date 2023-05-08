import Link from 'next/link'

export default function Page() {
  return (
    <main className="container flex min-h-screen flex-col gap-10 p-24">
      <div className="prose mx-auto w-full">
        <h1 className="text-5xl font-semibold">Styleguide</h1>

        <p>
          This is a styleguide for the design system of this project. It is
          intended to be used as a reference for the design system, and as a
          playground for the design system.
        </p>

        <div className="grid w-full grid-cols-2 gap-10 pt-10">
          <Link
            className="flex w-full rounded border border-gray-200 p-10 hover:bg-gray-50"
            href="/styleguide/colors"
          >
            <div className="text-xl font-medium">Colors</div>
          </Link>
          <Link
            className="flex w-full rounded border border-gray-200 p-10 hover:bg-gray-50"
            href="/styleguide/typography"
          >
            <div className="text-xl font-medium">Typography</div>
          </Link>
          <Link
            className="flex w-full rounded border border-gray-200 p-10 hover:bg-gray-50"
            href="/styleguide/logo"
          >
            <div className="text-xl font-medium">Logo</div>
          </Link>
          <Link
            className="flex w-full rounded border border-gray-200 p-10 hover:bg-gray-50"
            href="/styleguide/icons"
          >
            <div className="text-xl font-medium">Icons</div>
          </Link>
        </div>
      </div>
    </main>
  )
}
