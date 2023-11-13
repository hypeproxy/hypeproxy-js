export const ApiErrorCodes = {
	UnknownError: "UNKNOWN_ERROR",
	PrivateApi: "PRIVATE_API",
	RateLimitReached: "RATE_LIMIT_REACHED",
	Authentication: {
		MissingToken: "MISSING_TOKEN",
		ExpiredToken: "EXPIRED_TOKEN",
		MalformedToken: "MALFORMED_TOKEN"
	},
	User: {
		NotFound: "USER_NOT_FOUND",
		NotAllowed: "USER_NOT_ALLOWED",
		MissingUserId: "MISSING_USER_ID"
	},
	OrderValidation: {
		UnprocessablePayment: "UNPROCESSABLE_PAYMENT",
		FailedValidation: "FAILED_VALIDATION",
		UnavailableQuantity: "UNAVAILABLE_QUANTITY",
		UnexpectedConditions: "UNEXPECTED_CONDITIONS",
		InvalidPaymentMethod: "INVALID_PAYMENT_METHOD",
		InvalidBillingCycle: "INVALID_BILLING_CYCLE",
		InvalidQuantity: "INVALID_QUANTITY",
		InvalidCoupon: "INVALID_COUPON",
		ProductNotFound: "PRODUCT_NOT_FOUND",
		LocationNotFound: "LOCATION_NOT_FOUND",
		ProviderNotFound: "PROVIDER_NOT_FOUND"
	},
	Features: {
		UnavailableFeature: "UNAVAILABLE_FEATURE"
	}
};


// export const ApiErrorCodes = {
// 	UnknownError: "UNKNOWN_ERROR",
// 	PrivateApi: "PRIVATE_API",
//
// 	Authentication: {
// 		MissingToken: "MISSING_TOKEN",
// 		ExpiredToken: "EXPIRED_TOKEN",
// 		MalformedToken: "MALFORMED_TOKEN",
// 	},
//
// 	User: {
// 		UserNotFound: "USER_NOT_FOUND",
// 		UserNotAllowed: "USER_NOT_ALLOWED",
// 		MissingUserId: "MISSING_USER_ID",
// 	}
// }
