export interface Country {
  title: string;
  image: string;
  url: string;
}

interface CountriesResponse {
  ok: boolean;
  data?: Country[]
}

export interface GetCountries {
  (): Promise<CountriesResponse>
}