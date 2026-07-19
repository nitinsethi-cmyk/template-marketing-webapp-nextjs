function getFetchConfig() {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
  const previewToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

  if (!spaceId || !accessToken) {
    throw new Error(
      'Missing CONTENTFUL_SPACE_ID or CONTENTFUL_ACCESS_TOKEN. Set them as Worker runtime variables in the Cloudflare dashboard (Settings → Variables), not only as Build variables.',
    );
  }

  return {
    endpoint: `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
    params: {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
    previewParams: {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${previewToken || ''}`,
      },
    },
  };
}

/** @deprecated Prefer getFetchConfig() so env is read inside the request context on Workers. */
export const fetchConfig = {
  get endpoint() {
    return getFetchConfig().endpoint;
  },
  get params() {
    return getFetchConfig().params;
  },
  get previewParams() {
    return getFetchConfig().previewParams;
  },
};

export function customFetcher<TData, TVariables extends { preview?: boolean | null }>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers'],
) {
  return async (): Promise<TData> => {
    const config = getFetchConfig();
    const res = await fetch(config.endpoint, {
      method: 'POST',
      ...options,
      ...(variables?.preview ? config.previewParams : config.params),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
