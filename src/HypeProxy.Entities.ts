/* THIS (.ts) FILE IS GENERATED BY Tapper */
/* eslint-disable */
/* tslint:disable */
import { User } from './HypeProxy.Entities.Users';
import { CountryCodes, WarningLevels, Icons, PurchaseStatuses, PaymentMethods, BillingCycles } from './HypeProxy.Constants';
import { Datacenter } from './HypeProxy.Entities.Infrastructure';
import { Price } from './HypeProxy.Entities.Prices';
import { Proxy } from './HypeProxy.Entities.Proxies';
import { Invoice } from './HypeProxy.Entities.Invoices';

/** Transpiled from HypeProxy.Entities.BaseEntity */
export type BaseEntity = {
    /** Transpiled from System.Guid */
    id: string;
    /** Transpiled from bool */
    isFeatured?: boolean;
    /** Transpiled from bool */
    isAllowed?: boolean;
    /** Transpiled from int */
    weight?: number;
}

/** Transpiled from HypeProxy.Entities.BaseEntityWithOwnership */
export type BaseEntityWithOwnership = {
    /** Transpiled from System.DateTime */
    createdAt?: (Date | string);
    /** Transpiled from System.DateTime */
    updatedAt?: (Date | string);
    /** Transpiled from System.Guid */
    userId: string;
} & BaseEntity;

/** Transpiled from HypeProxy.Entities.BaseEntityWithPurchaseContext */
export type BaseEntityWithPurchaseContext = {
    /** Transpiled from System.Guid */
    purchaseId?: string;
} & BaseEntity;

/** Transpiled from HypeProxy.Entities.Coupon */
export type Coupon = {
    /** Transpiled from string */
    code: string;
    /** Transpiled from string? */
    description?: string;
    /** Transpiled from double */
    percentOff: number;
    /** Transpiled from bool */
    isOneTime: boolean;
    /** Transpiled from bool */
    isUsed: boolean;
} & BaseEntityWithOwnership;

/** Transpiled from HypeProxy.Entities.Feature */
export type Feature = {
    /** Transpiled from string */
    name: string;
    /** Transpiled from string? */
    description?: string;
    /** Transpiled from string? */
    icon?: string;
    /** Transpiled from bool */
    visibleSwitch: boolean;
    /** Transpiled from string? */
    switchComponentName?: string;
    /** Transpiled from string? */
    bladeComponentName?: string;
} & BaseEntity;

/** Transpiled from HypeProxy.Entities.Location */
export type Location = {
    /** Transpiled from string */
    name: string;
    /** Transpiled from string? */
    description?: string;
    /** Transpiled from System.Guid */
    parentLocationId?: string;
    /** Transpiled from HypeProxy.Constants.CountryCodes */
    countryCode?: CountryCodes;
    /** Transpiled from string? */
    flagUrl?: string;
    /** Transpiled from int */
    availableStock: number;
    /** Transpiled from bool */
    outOfStock: boolean;
} & BaseEntity;

/** Transpiled from HypeProxy.Entities.Memo */
export type Memo = {
    /** Transpiled from string */
    message: string;
} & BaseEntityWithOwnership;

/** Transpiled from HypeProxy.Entities.Notification */
export type Notification = {
    /** Transpiled from string? */
    title?: string;
    /** Transpiled from string? */
    message?: string;
    /** Transpiled from System.Uri? */
    link?: string;
    /** Transpiled from HypeProxy.Constants.WarningLevels */
    level: WarningLevels;
    /** Transpiled from HypeProxy.Constants.Icons */
    icon?: Icons;
    /** Transpiled from bool */
    isSeen: boolean;
} & BaseEntityWithOwnership;

/** Transpiled from HypeProxy.Entities.Product */
export type Product = {
    /** Transpiled from string */
    name: string;
    /** Transpiled from string? */
    shortName?: string;
    /** Transpiled from string? */
    tagline?: string;
    /** Transpiled from string? */
    label?: string;
    /** Transpiled from string? */
    shortDescription?: string;
    /** Transpiled from string? */
    longDescription?: string;
    /** Transpiled from string? */
    webDescription?: string;
    /** Transpiled from string? */
    icon?: string;
    /** Transpiled from string? */
    illustrationUrl?: string;
    /** Transpiled from System.Uri? */
    preHookUri?: string;
    /** Transpiled from System.Uri? */
    postHookUrl?: string;
    /** Transpiled from int */
    availableStock: number;
    /** Transpiled from bool */
    outOfStock: boolean;
} & BaseEntity;

/** Transpiled from HypeProxy.Entities.Provider */
export type Provider = {
    /** Transpiled from string */
    name: string;
    /** Transpiled from string? */
    description?: string;
    /** Transpiled from string? */
    companyName?: string;
    /** Transpiled from string? */
    websiteUrl?: string;
    /** Transpiled from string? */
    logoUrl?: string;
    /** Transpiled from int */
    availableStock: number;
    /** Transpiled from bool */
    outOfStock: boolean;
} & BaseEntity;

/** Transpiled from HypeProxy.Entities.Purchase */
export type Purchase = {
    /** Transpiled from System.DateTime */
    liveUntil?: (Date | string);
    /** Transpiled from HypeProxy.Constants.PurchaseStatuses */
    status: PurchaseStatuses;
    /** Transpiled from bool */
    isAutomaticallyRenewed: boolean;
    /** Transpiled from HypeProxy.Constants.PaymentMethods */
    paymentMethod: PaymentMethods;
    /** Transpiled from HypeProxy.Constants.BillingCycles */
    billingCycle: BillingCycles;
    /** Transpiled from string? */
    relatedPaymentId?: string;
    /** Transpiled from bool */
    isTrial: boolean;
    /** Transpiled from System.Guid */
    productId: string;
    /** Transpiled from bool */
    isGracePeriod: boolean;
    /** Transpiled from System.DateTime */
    gracePeriodEnd?: (Date | string);
    /** Transpiled from bool */
    isRefundable: boolean;
} & BaseEntityWithOwnership;

/** Transpiled from HypeProxy.Entities.Reminder */
export type Reminder = {
    /** Transpiled from string? */
    contactEmail?: string;
    /** Transpiled from bool */
    wasContacted: boolean;
    /** Transpiled from System.Guid */
    productId: string;
    /** Transpiled from System.Guid */
    locationId?: string;
    /** Transpiled from System.Guid */
    providerId?: string;
} & BaseEntityWithOwnership;

