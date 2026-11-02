import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('./dist/', import.meta.url));
const host = '127.0.0.1';
const port = Number(process.env.PORT || 5187);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.ttf': 'font/ttf', '.json': 'application/json', '.txt': 'text/plain; charset=utf-8' };
const server = http.createServer(async (req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'");
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405); return res.end('Method not allowed'); }
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (pathname === '/health') { res.setHeader('Content-Type', 'application/json'); return res.end(JSON.stringify({ status: 'ready', name: 'BetterTaclobanCity', mode: 'local-preview' })); }
    if (pathname.split('/').some(part => part.startsWith('.') && part)) { res.writeHead(404); return res.end('Not found'); }
    let file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(root)) { res.writeHead(404); return res.end('Not found'); }
    let info;
    try { info = await stat(file); if (!info.isFile()) throw new Error('not a file'); }
    catch {
      if (path.extname(pathname) || pathname.startsWith('/assets/') || pathname.startsWith('/locales/')) { res.writeHead(404); return res.end('Not found'); }
      file = path.join(root, 'index.html');
      info = await stat(file);
    }
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    res.setHeader('Content-Length', info.size);
    res.writeHead(200);
    res.end(req.method === 'HEAD' ? undefined : await readFile(file));
  } catch { res.writeHead(404); res.end('Not found'); }
});
server.listen(port, host, () => console.log(`BetterTaclobanCity preview: http://${host}:${port}`));
for (const signal of ['SIGTERM', 'SIGINT']) process.on(signal, () => server.close(() => process.exit(0)));
