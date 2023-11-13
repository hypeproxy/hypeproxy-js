// @ts-ignore
import { ApiResponse as BaseApiResponse } from "./HypeProxy.Responses";

export namespace ApplicationResponses {
	export interface ApiResponse<T> extends BaseApiResponse
	{
		data: T;
	}
}