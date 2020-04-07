export function setProviderRequest(id) {
  return {
    type: '@provider/SET_PROVIDER_REQUEST',
    id,
  };
}

export function setProviderSuccess(provider) {
  return {
    type: '@provider/SET_PROVIDER_SUCCESS',
    provider,
  };
}
