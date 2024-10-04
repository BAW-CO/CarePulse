declare module 'react-phone-number-input' {
    import React from 'react'
    
    export interface PhoneInputProps {
      value: string
      onChange: (value: string) => void
      defaultCountry?: string
      international?: boolean
      [key: string]: any
    }
  
    const PhoneInput: React.FC<PhoneInputProps>
    export default PhoneInput
  }
  
  declare module 'react-phone-number-input/style.css'