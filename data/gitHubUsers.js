const USERS_URL = "https://api.github.com/search/users?q=";

export const getGitHubUsers = async (request) => {
  const response = await fetch(`${USERS_URL}${request}in:user&per_page=100`);
  const data = await response.json();

  return data;
}
