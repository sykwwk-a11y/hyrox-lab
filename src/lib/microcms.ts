import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN || '',
  apiKey: import.meta.env.PUBLIC_MICROCMS_API_KEY || '',
});

export type News = {
  id: string;
  title: string;
  publishedAt: string;
  content: string;
  category?: string;
};
