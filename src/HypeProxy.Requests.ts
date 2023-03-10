/* THIS (.ts) FILE IS GENERATED BY Tapper */
/* eslint-disable */
/* tslint:disable */
import { BillingPeriods, PaymentMethods, TicketPriorities } from './HypeProxy.Constants';

/** Transpiled from HypeProxy.Requests.ChangeBillingDetailsRequest */
export type ChangeBillingDetailsRequest = {
    /** Transpiled from string */
    fullName?: string;
    /** Transpiled from string */
    address?: string;
    /** Transpiled from string */
    zipCode?: string;
    /** Transpiled from string */
    city?: string;
    /** Transpiled from string */
    country?: string;
    /** Transpiled from bool */
    isCompany: boolean;
    /** Transpiled from string */
    companyName?: string;
    /** Transpiled from string */
    companyIdentificationNumber?: string;
    /** Transpiled from string */
    companyVatNumber?: string;
    /** Transpiled from string */
    companyCountry?: string;
}

/** Transpiled from HypeProxy.Requests.ChangeCommentRequest */
export type ChangeCommentRequest = {
    /** Transpiled from string */
    message?: string;
}

/** Transpiled from HypeProxy.Requests.ChangeCredentialsRequest */
export type ChangeCredentialsRequest = {
    /** Transpiled from string */
    username?: string;
    /** Transpiled from string */
    password?: string;
    /** Transpiled from bool */
    isIpAuthenticationEnabled: boolean;
    /** Transpiled from System.Collections.Generic.IEnumerable<string> */
    authorizedIps?: string[];
}

/** Transpiled from HypeProxy.Requests.ChangePasswordRequest */
export type ChangePasswordRequest = {
    /** Transpiled from string */
    currentPassword?: string;
    /** Transpiled from string */
    newPassword?: string;
    /** Transpiled from string */
    passwordConfirmation?: string;
}

/** Transpiled from HypeProxy.Requests.ChangeRequirementsRequest */
export type ChangeRequirementsRequest = {
    /** Transpiled from string */
    usageDomain?: string;
    /** Transpiled from string */
    usageExplanation?: string;
}

/** Transpiled from HypeProxy.Requests.ChangeUserSettingsRequest */
export type ChangeUserSettingsRequest = {
    /** Transpiled from HypeProxy.Constants.BillingPeriods */
    defaultBillingPeriods: BillingPeriods;
    /** Transpiled from HypeProxy.Constants.PaymentMethods */
    defaultPaymentMethods: PaymentMethods;
}

/** Transpiled from HypeProxy.Requests.ConfirmEmailRequest */
export type ConfirmEmailRequest = {
    /** Transpiled from string */
    email?: string;
    /** Transpiled from string */
    token?: string;
}

/** Transpiled from HypeProxy.Requests.CreateReminderRequest */
export type CreateReminderRequest = {
    /** Transpiled from string */
    email?: string;
    /** Transpiled from System.Guid */
    productId: string;
}

/** Transpiled from HypeProxy.Requests.CreateTicketAnswerRequest */
export type CreateTicketAnswerRequest = {
    /** Transpiled from string */
    message?: string;
}

/** Transpiled from HypeProxy.Requests.CreateTicketRequest */
export type CreateTicketRequest = {
    /** Transpiled from string */
    subject?: string;
    /** Transpiled from string */
    message?: string;
    /** Transpiled from HypeProxy.Constants.TicketPriorities */
    priority: TicketPriorities;
    /** Transpiled from System.Guid */
    relatedPurchaseId?: string;
}

/** Transpiled from HypeProxy.Requests.ForgotPasswordRequest */
export type ForgotPasswordRequest = {
    /** Transpiled from string */
    email?: string;
}

/** Transpiled from HypeProxy.Requests.OrderCriteriaRequest */
export type OrderCriteriaRequest = {
    /** Transpiled from System.Guid */
    productId: string;
    /** Transpiled from System.Guid */
    locationId: string;
    /** Transpiled from System.Guid */
    providerId: string;
    /** Transpiled from HypeProxy.Constants.PaymentMethods */
    paymentMethod: PaymentMethods;
    /** Transpiled from HypeProxy.Constants.BillingPeriods */
    billingPeriod: BillingPeriods;
    /** Transpiled from int */
    quantity: number;
    /** Transpiled from string? */
    couponCode?: string;
    /** Transpiled from bool */
    isAutomaticallyRenewed: boolean;
}

/** Transpiled from HypeProxy.Requests.RequestDetails */
export type RequestDetails = {
    /** Transpiled from System.Guid */
    id: string;
    /** Transpiled from System.Guid */
    userId?: string;
    /** Transpiled from string */
    endpoint?: string;
    /** Transpiled from System.DateTime */
    date: (Date | string);
    /** Transpiled from long */
    timestamp: number;
    /** Transpiled from string */
    userAgent?: string;
    /** Transpiled from string */
    clientIp?: string;
}

/** Transpiled from HypeProxy.Requests.ResetPasswordRequest */
export type ResetPasswordRequest = {
    /** Transpiled from string */
    email?: string;
    /** Transpiled from string */
    token?: string;
    /** Transpiled from string */
    newPassword?: string;
    /** Transpiled from string */
    passwordConfirmation?: string;
}

/** Transpiled from HypeProxy.Requests.SignInRequest */
export type SignInRequest = {
    /** Transpiled from string */
    email: string;
    /** Transpiled from string */
    password: string;
    /** Transpiled from string? */
    otpCode?: string;
}

/** Transpiled from HypeProxy.Requests.SignUpRequest */
export type SignUpRequest = {
    /** Transpiled from string */
    email?: string;
    /** Transpiled from string */
    password?: string;
    /** Transpiled from string */
    fullname?: string;
    /** Transpiled from string */
    fingerprint?: string;
    /** Transpiled from bool */
    acceptTerms: boolean;
}

