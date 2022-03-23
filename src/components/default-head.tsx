import Head from 'next/head'

export default function DefaultHead({ title }: { title?: string }) {
  return (
    <Head>
      <title>{title ? `${title} | ` : null}WE CARE</title>
      <meta name='description' content='WE CARE' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
