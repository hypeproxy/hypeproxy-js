import { ApiResponse } from "./HypeProxy.Responses.Base";

export interface ApiResponseFor<T> extends ApiResponse
{
	data: T;
}
