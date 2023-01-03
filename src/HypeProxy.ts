import { ApiResponse } from "./HypeProxy.Responses.ApiResponse";

export interface ApiResponseFor<T> extends ApiResponse
{
	data: T;
}