import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_CONFIG } from '~shared/constants/server.constants';
import { useUserStore } from '~store/user.store';

export class HttpSerivce {
	private baseUrl: string;
	private fetchingService: AxiosInstance;
	private apiVersion: string;

	constructor(
		baseUrl = API_CONFIG.BASE_URL,
		fetchingService = axios,
		apiVersion = 'api',
	) {
		this.baseUrl = baseUrl;
		this.fetchingService = fetchingService;
		this.apiVersion = apiVersion;
	}

	private getFullApiUrl(url: string): string {
		return `${this.baseUrl}/${this.apiVersion}/${url}`;
	}

	private populateTokenToHeaderConfig(): { Authorization: string } {
		const token = useUserStore.getState().token;
		return {
			Authorization: `Bearer ${token}`,
		};
	}

	private extractUrlAndDataFromConfig({
		...configWithoutDataAndUrl
	}: AxiosRequestConfig): Omit<AxiosRequestConfig, 'data' | 'url'> {
		return configWithoutDataAndUrl;
	}

	get<respT>(
		config: AxiosRequestConfig,
		withAuth = true,
	): Promise<AxiosResponse<respT>> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.get<respT>(
			this.getFullApiUrl(config.url),
			this.extractUrlAndDataFromConfig(config),
		);
	}

	post<respT>(
		config: AxiosRequestConfig,
		withAuth = true,
	): Promise<AxiosResponse<respT>> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.post<respT>(
			this.getFullApiUrl(config.url),
			config.data,
			this.extractUrlAndDataFromConfig(config),
		);
	}

	patch<respT>(
		config: AxiosRequestConfig,
		withAuth = true,
	): Promise<AxiosResponse<respT>> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.patch<respT>(
			this.getFullApiUrl(config.url),
			config.data,
			this.extractUrlAndDataFromConfig(config),
		);
	}

	delete<respT>(
		config: AxiosRequestConfig,
		withAuth = true,
	): Promise<AxiosResponse<respT>> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.delete<respT>(
			this.getFullApiUrl(config.url),
			this.extractUrlAndDataFromConfig(config),
		);
	}
}
