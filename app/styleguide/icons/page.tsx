'use client'

import { useEffect, useMemo, useState } from 'react'
import * as icons from 'lucide-react'
import { SSRProvider } from 'react-aria'

import { useDebounce } from '@/lib/hooks'
import { TextField } from '@/components/ui'

/**
 * Props for the Icon component
 * @interface
 * @property {string} name - Name of the icon to display
 */
interface IconProps {
  name: keyof typeof icons
}

/**
 * Component that displays an icon
 * @param {IconProps} props - Props for the Icon component
 */
const IconComponent: React.FC<IconProps> = ({ name }: IconProps) => {
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

/**
 * Maps an array of icon names to an array of Icon components
 * @param {Array} list - Array of icon names
 * @returns {Array} - Array of Icon components
 */
const mapIcons = (list: [string, React.ReactElement][]) => {
  return list.map(([name]: any) => {
    return <IconComponent key={name} name={name} />
  })
}

/**
 * Page component
 */
export default function Page() {
  const list: any = useMemo(() => {
    return Object.entries(icons).filter(
      ([name]) =>
        name !== 'default' && name !== 'createLucideIcon' && name !== 'icons'
    )
  }, [])

  const [searchTerm, setSearchTerm] = useState('')

  /**
   * Array of filtered icon data based on search term
   * @type {Array}
   */
  const [filteredData, setFilteredData] =
    useState<[string, React.ReactElement][]>(list)

  /**
   * Debounced search term
   * @type {string}
   */
  const debouncedSearchTerm = useDebounce(searchTerm, 0)

  /**
   * Updates the filtered data based on the debounced search term
   */
  useEffect(() => {
    const filteredData = list.filter(([item]: any) =>
      item.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    )
    setFilteredData(filteredData)
  }, [debouncedSearchTerm, list])

  /**
   * Updates the search term when the text field changes
   * @param {string} value - The new value of the text field
   */
  const handleChange = (value: string) => {
    setSearchTerm(value)
  }

  return (
    <SSRProvider>
      <main className="container flex min-h-screen flex-col gap-16 py-20">
        <div className="prose mx-auto flex w-full flex-col gap-4">
          <h1 className="text-5xl font-semibold">Icons</h1>

          <TextField
            label="Search icons"
            onChange={handleChange}
            value={searchTerm}
            placeholder='Search for "arrow"'
            className="mb-4"
          />

          <div className="grid grid-cols-6 gap-4">{mapIcons(filteredData)}</div>
        </div>
      </main>
    </SSRProvider>
  )
}
