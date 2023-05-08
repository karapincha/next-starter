'use client'

import { useEffect, useState } from 'react'
import * as icons from 'lucide-react'

import { useDebounce } from '@/lib/hooks'
import { TextField } from '@/components/ui'

interface IconProps {
  name: keyof typeof icons
}

const IconComponent: React.FC<IconProps> = ({ name }) => {
  const Icon: any = icons[name]

  return (
    <div
      className="flex flex-col flex-wrap items-center justify-center gap-4 overflow-hidden rounded border border-gray-200 p-4 hover:bg-gray-50"
      onClick={() => {
        navigator.clipboard.writeText(`<${name} />`)
      }}
    >
      <Icon className="h-6 w-6" />
    </div>
  )
}

const mapIcons = (list: [string, React.ReactElement][]) => {
  return list.map(([name]: any) => {
    return <IconComponent key={name} name={name} />
  })
}

const list: any = Object.entries(icons).filter(
  ([name]) =>
    name !== 'default' && name !== 'createLucideIcon' && name !== 'icons'
)

const Page: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] =
    useState<[string, React.ReactElement][]>(list)
  const debouncedSearchTerm = useDebounce(searchTerm, 50)

  useEffect(() => {
    const filteredData = list.filter(([item]: any) =>
      item.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    )
    setFilteredData(filteredData)
  }, [debouncedSearchTerm])

  const handleChange = (value: string) => {
    setSearchTerm(value)
  }

  return (
    <main className="container flex min-h-screen flex-col gap-16 py-20">
      <div className="prose mx-auto flex w-full flex-col gap-4">
        <h1 className="text-5xl font-semibold">Icons</h1>

        <TextField
          label="Search icons"
          onChange={handleChange}
          value={searchTerm}
          placeholder='Search for "arrow"'
          className="mb-4"
          isRequired
        />

        <div className="grid grid-cols-6 gap-4">{mapIcons(filteredData)}</div>
      </div>
    </main>
  )
}

export default Page
