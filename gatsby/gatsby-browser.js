import React from 'react'
import Layout from './src/components/Layout'
import { Helmet } from 'react-helmet';

export function wrapPageElement({element, props}) {
  return ( 
    <Layout {...props}>
      <Helmet>
        <title>Graham Hagenah</title>
        <meta name="description" content="Web projects created by Graham HAgenah" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      {element}
      {console.clear()}
      {console.log(`
██╗  ██╗ ██████╗ ██╗    ██╗██████╗ ██╗   ██╗    ███████╗████████╗██████╗  █████╗ ███╗   ██╗ ██████╗ ███████╗██████╗ ██╗
██║  ██║██╔═══██╗██║    ██║██╔══██╗╚██╗ ██╔╝    ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔════╝ ██╔════╝██╔══██╗██║
███████║██║   ██║██║ █╗ ██║██║  ██║ ╚████╔╝     ███████╗   ██║   ██████╔╝███████║██╔██╗ ██║██║  ███╗█████╗  ██████╔╝██║
██╔══██║██║   ██║██║███╗██║██║  ██║  ╚██╔╝      ╚════██║   ██║   ██╔══██╗██╔══██║██║╚██╗██║██║   ██║██╔══╝  ██╔══██╗╚═╝
██║  ██║╚██████╔╝╚███╔███╔╝██████╔╝   ██║▄█╗    ███████║   ██║   ██║  ██║██║  ██║██║ ╚████║╚██████╔╝███████╗██║  ██║██╗
╚═╝  ╚═╝ ╚═════╝  ╚══╝╚══╝ ╚═════╝    ╚═╝╚═╝    ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝
                                                                                                                       `)}
    {console.log("This website was designed and built by Graham Hagenah")}
    </Layout>
  )
}