import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  imageUrl?: string;
}

export default function SEO({ 
  title, 
  description, 
  canonicalUrl, 
  imageUrl = "https://international.ilinkbiz.com/og-image.png" 
}: SEOProps) {
  const fullUrl = canonicalUrl ? `https://international.ilinkbiz.com${canonicalUrl}` : 'https://international.ilinkbiz.com';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
    </Helmet>
  );
}
