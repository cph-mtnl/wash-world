const backendUrl = "https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io";

export function formatLocationsUrl() {
  return backendUrl + "/locations";
}

export function formatCamUrl(locationId) {
  return `${backendUrl}/cam/${locationId}`;
}

export function formatProductsUrl(lpn) {
  return `${backendUrl}/products/${lpn}`;
}

export function formatStartWashUrl(locationId, programId) {
  return `${backendUrl}/${locationId}/start/${programId}`;
}
