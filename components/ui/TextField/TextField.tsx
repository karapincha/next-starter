import React from 'react'
import { useTextField, type AriaTextFieldProps } from 'react-aria'

import { cn } from '@/lib/utils'

export function TextField(props: AriaTextFieldProps & { className?: string }) {
  let { label, className } = props
  let ref = React.useRef(null)
  let { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref)

  return (
    <div className={cn('flex w-full flex-col gap-1', className)}>
      {label && (
        <label {...labelProps} className="font-medium">
          {label}
        </label>
      )}

      <input
        {...inputProps}
        ref={ref}
        className="w-full rounded border p-2 text-sm font-normal"
      />

      {props.description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {props.description}
        </div>
      )}

      {props.errorMessage && (
        <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}>
          {props.errorMessage}
        </div>
      )}
    </div>
  )
}
