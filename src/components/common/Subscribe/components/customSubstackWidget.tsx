import { useEffect } from 'react'
import useScript from 'src/helpers/useScript'

export const Substack = () => {
  const status = useScript('https://substackapi.com/widget.js')

  useEffect(() => {
    if (status) {
      window.CustomSubstackWidget = {
        substackUrl: 'oiangelodias.substack.com',
        placeholder: 'example@gmail.com',
        buttonText: 'Subscribe',
        theme: 'custom',
        colors: {
          primary: '#FFFFFF',
          input: '#000000',
          email: '#FFFFFF',
          text: '#000000',
        },
      }
    }
  }, [status])

  if (status) {
    return <div id="custom-substack-embed" />
  }

  return <div>Loading</div>
}
