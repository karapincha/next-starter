import tailwindConfig from '@/tailwind.config.js'
import resolveConfig from 'tailwindcss/resolveConfig'

const fullTwConfig = resolveConfig(tailwindConfig)
const colors = Object.entries(fullTwConfig.theme?.colors ?? {})

const renderColors = (colors: any) => {
  if (!colors) return null

  return (
    <div className="not-prose flex w-full flex-wrap gap-10">
      {colors.map(([colorName, shades]: any) => {
        if (typeof shades === 'string') return
        const colorShades = Object.entries(shades)

        return (
          <div key={colorName} className="flex w-full gap-2">
            <h2 className="w-[100px] shrink-0 text-sm font-medium capitalize">
              {colorName}
            </h2>
            <div className="flex w-full flex-1 gap-2">
              {colorShades.map(([shadeName, shadeColor]: any) => (
                <div
                  key={shadeName}
                  className="flex w-full flex-col font-mono text-sm"
                >
                  <div
                    className="mb-2 flex h-12 w-full rounded"
                    style={{
                      backgroundColor: shadeColor,
                    }}
                  />
                  <span>{shadeName}</span>
                  <span className="opacity-50">{shadeColor}</span>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function Page() {
  return (
    <main className="container flex min-h-screen flex-col gap-16 py-20">
      <div className="prose mx-auto w-full">
        <h1 className="text-5xl font-semibold">Colors</h1>
        <div className="flex flex-wrap">{renderColors(colors)}</div>
      </div>
    </main>
  )
}
