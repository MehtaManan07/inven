interface Args {
  authToken?: string;
  media?: boolean;
}

const getHeaders = ({ authToken, media }: Args = {}) => {
  const headers: Record<string, string> = {
    "Content-Type": !media ? "application/json" : "multipart/form-data",
  };

  if (authToken) {
    headers["Authorization"] = `Bearer ${authToken}`;
  }

  return headers;
};

export default getHeaders;
