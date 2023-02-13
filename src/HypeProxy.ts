import { ApiResponse } from "./HypeProxy.Responses";

export interface ApiResponseFor<T> extends ApiResponse
{
	data: T;
}
