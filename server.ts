import { createServer, IncomingMessage, ServerResponse } from 'http'
import { parse } from 'url'
import next, { NextApiRequest, NextApiResponse } from 'next'
import { renderToString } from '@emdgroup-liquid/liquid/hydrate'
import path from 'path'
import { promises as fsPromises } from 'fs'

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    createServer((async (req: IncomingMessage, res: ServerResponse) => {
      try {
        const parsedUrl = parse(req.url ?? '', true)
        const pathname = parsedUrl.pathname ?? ''

        // Serve static assets from the public folder
        if (
          pathname.startsWith('/_next') ||
          pathname.startsWith('/__next') ||
          pathname.startsWith('/liquid')
        ) {
          const filePath = path.join(
            process.cwd(),
            'public',
            pathname.replace(/^\/public/, '')
          )
          try {
            const fileContents = await fsPromises.readFile(filePath)
            res.writeHead(200)
            res.end(fileContents)
            return
          } catch (err) {
            // Fall through to default handling if asset not found
          }
        }

        if (pathname.startsWith('/_next') || pathname.startsWith('/__next')) {
          await handle(req, res, parsedUrl)
        } else {
          const html = await app.renderToHTML(
            req as NextApiRequest,
            res as NextApiResponse,
            pathname,
            parsedUrl.query
          )
          const renderedHtml = await renderToString(html)
          res.end(renderedHtml.html)
        }
      } catch (err) {
        console.error('Error occurred handling', req.url, err)
        res.statusCode = 500
        res.end('internal server error')
      }
    }) as unknown as () => void).listen(port, () => {
      console.log(`> Ready on ${hostname}:${port}`)
    })
  })
  .catch((err) => {
    console.error(err)
  })
