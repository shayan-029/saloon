'use client';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { luxuryTheme } from '@/theme';

// Builds a shared emotion cache so server-generated class names
// match what the client produces — eliminating hydration mismatches.
function EmotionCacheProvider({ children }: { children: React.ReactNode }) {
  const [{ cache, flush }] = useState(() => {
    const c = createCache({ key: 'mui' });
    c.compat = true;
    const prevInsert = c.insert.bind(c);
    const inserted: string[] = [];
    c.insert = (...args: Parameters<typeof prevInsert>) => {
      const result = prevInsert(...args);
      const name = args[1]?.name;
      if (name && c.inserted[name] !== undefined && !inserted.includes(name)) {
        inserted.push(name);
      }
      return result;
    };
    return {
      cache: c,
      flush: () => {
        const prev = [...inserted];
        inserted.length = 0;
        return prev;
      },
    };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (!names.length) return null;
    const styles = names.map((n) => cache.inserted[n]).join('');
    return (
      <style
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <EmotionCacheProvider>
      <ThemeProvider theme={luxuryTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </EmotionCacheProvider>
  );
}
