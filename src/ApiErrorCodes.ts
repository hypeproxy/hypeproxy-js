export const ApiErrorCodes = {
	UnknownError: "UNKNOWN_ERROR",
	PrivateApi: "PRIVATE_API",
	
	Authentication: {
		MissingToken: "MISSING_TOKEN",
		ExpiredToken: "EXPIRED_TOKEN",
		MalformedToken: "MALFORMED_TOKEN",
	},
	
	User: {
		UserNotFound: "USER_NOT_FOUND",
		UserNotAllowed: "USER_NOT_ALLOWED",
		MissingUserId: "MISSING_USER_ID",
	}
}