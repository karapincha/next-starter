import tailwindConfig from '@/tailwind.config.js'
import resolveConfig from 'tailwindcss/resolveConfig'

const fullTwConfig = resolveConfig(tailwindConfig)
const colors = Object.entries(fullTwConfig.theme?.colors ?? {})

const renderColors = (colors: any) => {
  if (!colors) return null

  return (
    <div className="flex w-full flex-wrap gap-10">
      {colors.map(([colorName, shades]: any) => {
        if (typeof shades === 'string') return
        const colorShades = Object.entries(shades)

        return (
          <div key={colorName} className="flex w-full gap-2">
            <h2 className="w-24 text-sm font-medium capitalize">{colorName}</h2>
            <div className="flex w-full gap-2">
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
    <main className="container flex min-h-screen flex-col gap-10 p-24">
      <h1 className="text-4xl font-bold">Styleguide</h1>

      <div className="flex flex-col gap-10">
        <h2 className="text-2xl">Colors</h2>
        <div className="flex flex-wrap">{renderColors(colors)}</div>
      </div>
    </main>
  )
}
