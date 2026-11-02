import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN || 'hyrox-lab-musashikosugi',
  apiKey: import.meta.env.PUBLIC_MICROCMS_API_KEY || 'fpjNp8z3qTIpS2QGWqwms6Qj9yeqSo51uLTP',
});

export type News = {
  id: string;
  title: string;
  publishedAt: string;
  content: string;
  category?: string;
};