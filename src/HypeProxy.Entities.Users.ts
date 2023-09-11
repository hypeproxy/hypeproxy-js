/* THIS (.ts) FILE IS GENERATED BY Tapper */
/* eslint-disable */
/* tslint:disable */
import { Purchase, Notification, Memo, Reminder } from './HypeProxy.Entities';
import { Status } from './HypeProxy.Entities.Statuses';
import { Ticket, TicketAnswer } from './HypeProxy.Entities.Tickets';
import { BillingCycles, PaymentMethods } from './HypeProxy.Constants';

/** Transpiled from HypeProxy.Entities.Users.AuthorizationDetails */
export type AuthorizationDetails = {
    /** Transpiled from bool */
    isDenied: boolean;
    /** Transpiled from string? */
    deniedReason?: string;
    /** Transpiled from System.DateTime */
    blockingDateTime?: (Date | string);
}

/** Transpiled from HypeProxy.Entities.Users.BillingDetails */
export type BillingDetails = {
    /** Transpiled from string */
    address: string;
    /** Transpiled from string */
    zipCode: string;
    /** Transpiled from string */
    city: string;
    /** Transpiled from string */
    country: string;
    /** Transpiled from bool */
    isCompany: boolean;
    /** Transpiled from string? */
    companyName?: string;
    /** Transpiled from string? */
    companyIdentificationNumber?: string;
    /** Transpiled from string? */
    companyVatNumber?: string;
    /** Transpiled from string? */
    companyCountry?: string;
}

/** Transpiled from HypeProxy.Entities.Users.ComplianceDetails */
export type ComplianceDetails = {
    /** Transpiled from bool */
    hasRequestedKyc: boolean;
    /** Transpiled from bool */
    hasApprovedKyc?: boolean;
    /** Transpiled from System.DateTime */
    approvedKycAt?: (Date | string);
    /** Transpiled from string? */
    kycId?: string;
    /** Transpiled from string? */
    usageDomain?: string;
    /** Transpiled from string? */
    usageExplanation?: string;
}

/** Transpiled from HypeProxy.Entities.Users.User */
export type User = {
    /** Transpiled from System.Guid */
    id: string;
    /** Transpiled from string */
    email: string;
    /** Transpiled from string */
    fullName: string;
    /** Transpiled from System.DateTime */
    registrationDateTime: (Date | string);
    /** Transpiled from string */
    stripeCustomerId: string;
    /** Transpiled from System.Guid */
    billingDetailsId?: string;
    /** Transpiled from System.Collections.Generic.ICollection<HypeProxy.Entities.Purchase> */
    purchases: Purchase[];
    /** Transpiled from System.Collections.Generic.ICollection<HypeProxy.Entities.Notification> */
    notifications: Notification[];
    /** Transpiled from System.Collections.Generic.ICollection<HypeProxy.Entities.Memo> */
    memos: Memo[];
    /** Transpiled from System.Collections.Generic.ICollection<HypeProxy.Entities.Reminder> */
    reminders: Reminder[];
    /** Transpiled from System.Collections.Generic.ICollection<HypeProxy.Entities.Statuses.Status> */
    statuses: Status[];
    /** Transpiled from System.Collections.Generic.ICollection<HypeProxy.Entities.Tickets.Ticket> */
    tickets: Ticket[];
    /** Transpiled from System.Collections.Generic.ICollection<HypeProxy.Entities.Tickets.TicketAnswer> */
    ticketAnswers: TicketAnswer[];
    /** Transpiled from string? */
    cultureConcern?: string;
    /** Transpiled from int */
    securityFlag: number;
    /** Transpiled from string? */
    passwordSignature?: string;
    /** Transpiled from string? */
    fingerprintId?: string;
    /** Transpiled from string? */
    customData?: string;
    /** Transpiled from bool */
    hadFirstLogin: boolean;
}

/** Transpiled from HypeProxy.Entities.Users.UserSettings */
export type UserSettings = {
    /** Transpiled from bool */
    developerMode: boolean;
    /** Transpiled from bool */
    betaEnrolled: boolean;
    /** Transpiled from bool */
    skipPurchaseAssistant: boolean;
    /** Transpiled from HypeProxy.Constants.BillingCycles */
    defaultBillingCycle: BillingCycles;
    /** Transpiled from HypeProxy.Constants.PaymentMethods */
    defaultPaymentMethod: PaymentMethods;
}

